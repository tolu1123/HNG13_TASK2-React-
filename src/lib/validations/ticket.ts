// lib/validations/ticket.ts
import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(1, "Title field cannot be empty."),
  description: z.string().min(5, "Description must be at least 5 characters."),
  assignee: z.string().min(1, "Assignee is required."),
  status: z.enum(["open", "in-progress", "closed"]),
});

export type TicketFormValues = z.infer<typeof ticketSchema>;