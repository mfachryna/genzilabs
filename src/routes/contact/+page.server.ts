import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        // Validation
        if (!name || !email || !message) {
            return fail(400, { 
                error: 'Semua field harus diisi!',
                name,
                email,
                message
            });
        }

        // Check if SMTP is configured
        if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
            console.error('SMTP not configured');
            return fail(500, { 
                error: 'Email belum dikonfigurasi. Hubungi admin.',
                name,
                email,
                message
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
                    // Allow self-signed or mismatched certificates (common with shared hosting)
                    rejectUnauthorized: false
                }
            });

            await transporter.sendMail({
                from: `"Genzi Contact Form" <${env.SMTP_USER}>`,
                to: 'hello@genzilabs.com',
                subject: `🚀 Pesan Baru dari ${name}`,
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
                            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 800;">GENZI MERAIH MIMPI</h1>
                            <p style="margin: 8px 0 0 0; color: #000; font-size: 14px; opacity: 0.8;">Ada pesan baru nih! 📬</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <!-- Sender Info -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                                <tr>
                                    <td style="background-color: #1a1a1a; border-left: 4px solid #D9FF00; padding: 20px; border-radius: 4px;">
                                        <p style="margin: 0 0 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Dari</p>
                                        <p style="margin: 0; color: #fff; font-size: 18px; font-weight: 600;">${name}</p>
                                        <p style="margin: 4px 0 0 0; color: #D9FF00; font-size: 14px;">${email}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message -->
                            <div style="margin-bottom: 30px;">
                                <p style="margin: 0 0 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Pesan</p>
                                <div style="background-color: #1a1a1a; padding: 24px; border-radius: 4px; border: 1px solid #333;">
                                    <p style="margin: 0; color: #e0e0e0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                                </div>
                            </div>
                            
                            <!-- CTA -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:${email}?subject=Re: Pesan dari Website Genzi" style="display: inline-block; background-color: #D9FF00; color: #000; padding: 14px 32px; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 4px;">
                                            BALAS SEKARANG →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #0d0d0d; padding: 24px 40px; border-top: 1px solid #222;">
                            <p style="margin: 0; color: #666; font-size: 12px; text-align: center;">
                                Pesan ini dikirim dari contact form di <a href="https://genzilabs.com" style="color: #D9FF00; text-decoration: none;">genzilabs.com</a>
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

            return { success: true };
        } catch (error) {
            console.error('Failed to send email:', error);
            return fail(500, { 
                error: 'Gagal mengirim pesan. Coba lagi nanti ya!',
                name,
                email,
                message
            });
        }
    }
};
