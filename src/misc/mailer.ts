import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

import * as constants from "./constants";
import Mail from "nodemailer/lib/mailer";

export function sendEmail(to: string, subject: string, template: string, payload: any, next: (isGood: boolean) => void) {
    // create reusable transporter object using the default SMTP transport
    const transport = nodemailer.createTransport({
        host: constants.url(),
        port: 465,
    });

    const source = fs.readFileSync(path.join(__dirname, "/template/", template), "utf8");
    const html = handlebars.compile(source);

    const options: Mail.Options = {
        from: constants.kSupportEmail,
        to: to,
        subject: subject,
        html: html(payload),
    };
    transport.sendMail(options, (error) => {
        next(!error);
    });
}