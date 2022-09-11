import { Queues, withErrorHandling } from "../queue";
import prisma from "@inspirers/prisma";

const queue = withErrorHandling<any>(Queues.Routine);

queue.process(async (job) => {

});
