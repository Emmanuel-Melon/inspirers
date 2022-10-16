import { MailService, MailDataRequired } from "@sendgrid/mail";
import { Queues, withErrorHandling } from "../queue";
import { sendEmail } from "../lib/sendgrid";
import { fromEmailAddress } from "../config";

const queue = withErrorHandling<MailDataRequired>(Queues.Mail);

const message = {
  to: 'test@example.com',
  from: fromEmailAddress,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

queue.process(job => {
  return sendEmail(job.data);
});