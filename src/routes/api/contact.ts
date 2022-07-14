import type { RequestHandler } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';

export const post: RequestHandler = async (req) => {
	const formData = await req.request.formData();

	const email = (formData.get('email') as string).toLowerCase();
	const name = formData.get('name') as string;
	const message = formData.get('message') as string;

	var transporter = nodemailer.createTransport({
		host: 'smtp.example.com',
		port: 587,
		secure: false, // upgrade later with STARTTLS
		auth: {
			user: 'username',
			pass: 'password'
		}
	});

	var mailOptions = {
		from: 'youremail@gmail.com',
		to: 'myfriend@yahoo.com',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!'
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};
