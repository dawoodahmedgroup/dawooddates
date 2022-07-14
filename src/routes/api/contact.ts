import type { RequestHandler } from "@sveltejs/kit";
import * as nodemailer from 'nodemailer'

export const post: RequestHandler = async (req) => {
	const formData = await req.request.formData();

	const email = (formData.get("email") as string).toLowerCase();
	const name = formData.get("name") as string;
    const message = formData.get("message") as string;

	// using nodemailer to send these values to email here
};