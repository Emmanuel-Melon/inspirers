import * as SendGrid from '@sendgrid/mail';
import { sendGridAPIKey } from "../config";

SendGrid.setApiKey(sendGridAPIKey);

export const sendEmail = (message) => {
    return SendGrid
        .send(message)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
}
