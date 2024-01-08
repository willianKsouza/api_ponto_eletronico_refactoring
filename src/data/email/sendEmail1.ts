import { Resend } from "resend";
import { ISendEmail } from "../../shared/interfaces/ISendEmail";

export class SendEmail implements ISendEmail {
  async sendEmail() {
    const resend = new Resend('re_ZkKpeVEu_84G3HAGqXRLsViHZwBYvnYJa')

    const { data , error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["willianksouza94@gmail.com"],
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    if (error) {
      return error
    }

    return data;
  }
}
