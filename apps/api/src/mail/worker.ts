import * as SendGrid from "@sendgrid/mail";

import { Queues, withErrorHandling } from "../queue";

import { sendGridAPIKey } from "../config";

SendGrid.setApiKey(sendGridAPIKey);

const queue = withErrorHandling<SendGrid.MailDataRequired>(Queues.Mail);

queue.process(job => {
  return SendGrid.send(job.data);
});
