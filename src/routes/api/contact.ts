import type { RequestHandler } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';

export const post: RequestHandler = async (req) => {
	const formData = await req.request.formData();

	const email = formData.get('email') as string;
	const name = formData.get('name') as string;
	const message = formData.get('message') as string;

	const transporter = nodemailer.createTransport({
		host: 'mail.dawoodahmed.com',
		port: 465,
		secure: false, // upgrade later with STARTTLS
		auth: {
			user: 'forms@dawoodahmed.com',
			pass: import.meta.env.VITE_MAILPASS
		},
		name: 'mail.dawoodahmed.com'
	});

	const data: object = {
		from: 'forms@dawoodahmed.com',
		to: [import.meta.env.VITE_MAILTO, import.meta.env.VITE_DEV],
		subject: 'dawooddates.com Form',
		html: `<h1>Form Submission</h1><br><p>Name: ${name}</p><br><p>Email: ${email}</p><br><p>Message: ${message}</p><br>`
	};

	transporter.sendMail(data, (err, info) => {
		if (err) {
			throw err;
		} else console.log(info);
	});

	return {
		status: 303,
		headers: {
			Location: '/'
		}
	};
};
