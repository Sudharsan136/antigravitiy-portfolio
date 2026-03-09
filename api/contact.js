const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New message from ${name} via Portfolio`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#0f0f0f;color:#f1f1f1;border-radius:12px;">
                <h2 style="color:#3b82f6;margin-bottom:24px;">📬 New Portfolio Message</h2>
                <table style="width:100%;border-collapse:collapse;">
                    <tr>
                        <td style="padding:10px 0;color:#a1a1aa;width:80px;vertical-align:top;">Name</td>
                        <td style="padding:10px 0;font-weight:600;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding:10px 0;color:#a1a1aa;vertical-align:top;">Email</td>
                        <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding:10px 0;color:#a1a1aa;vertical-align:top;">Message</td>
                        <td style="padding:10px 0;white-space:pre-wrap;">${message}</td>
                    </tr>
                </table>
                <hr style="border:1px solid #222;margin:24px 0;" />
                <p style="font-size:12px;color:#555;">Sent from your portfolio contact form</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (err) {
        console.error('Mail error:', err.message);
        res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }
};
