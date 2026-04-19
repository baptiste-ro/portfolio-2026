import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { name, email, phone, message } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		await resend.emails.send({
			from: 'do-not-reply@baptisteroyer.fr',
			to: 'baptisteroyer74@gmail.com',
			subject: 'New contact form message',
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error('Email error:', error);
		return res
			.status(500)
			.json({ success: false, error: 'Email failed to send' });
	}
}
