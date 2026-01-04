import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions: Actions = {
    waitlist: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;

        // Validation
        if (!email) {
            return fail(400, { 
                waitlistError: 'Email harus diisi!',
                waitlistEmail: email
            });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return fail(400, { 
                waitlistError: 'Format email tidak valid!',
                waitlistEmail: email
            });
        }

        // Check if SMTP is configured
        if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
            console.error('SMTP not configured');
            return fail(500, { 
                waitlistError: 'Email belum dikonfigurasi. Hubungi admin.',
                waitlistEmail: email
            });
        }

        try {
            const transporter = nodemailer.createTransport({
                host: env.SMTP_HOST,
                port: parseInt(env.SMTP_PORT || '587'),
                secure: env.SMTP_SECURE === 'true',
                auth: {
                    user: env.SMTP_USER,
                    pass: env.SMTP_PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            await transporter.sendMail({
                from: `"Genzi Waitlist" <${env.SMTP_USER}>`,
                to: 'hello@genzilabs.com',
                subject: `🎉 Waitlist Baru: ${email}`,
                html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0a; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #141414; border: 1px solid #333; border-radius: 8px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #D9FF00 0%, #A855F7 100%); padding: 30px 40px;">
                            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 800;">GENZI WAITLIST</h1>
                            <p style="margin: 8px 0 0 0; color: #000; font-size: 14px; opacity: 0.8;">Ada yang mau ikutan early access! 🚀</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="background-color: #1a1a1a; border-left: 4px solid #D9FF00; padding: 20px; border-radius: 4px;">
                                        <p style="margin: 0 0 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                                        <p style="margin: 0; color: #D9FF00; font-size: 18px; font-weight: 600;">${email}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 24px 0 0 0; color: #888; font-size: 14px; line-height: 1.6;">
                                Orang ini tertarik dengan produk-produk eksperimental Genzi. Jangan lupa follow up ya!
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #0d0d0d; padding: 24px 40px; border-top: 1px solid #222;">
                            <p style="margin: 0; color: #666; font-size: 12px; text-align: center;">
                                Dari waitlist form di <a href="https://genzilabs.com" style="color: #D9FF00; text-decoration: none;">genzilabs.com</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
                `,
                replyTo: email
            });

            return { waitlistSuccess: true };
        } catch (error) {
            console.error('Failed to send waitlist email:', error);
            return fail(500, { 
                waitlistError: 'Gagal daftar. Coba lagi nanti ya!',
                waitlistEmail: email
            });
        }
    }
};
