"use server";

import { createClient } from "@/utils/supabase/server";
import z from "zod/v4";
import { ticketSchema, TicketFormValues } from "@/lib/validations/ticket";
import { revalidatePath } from "next/cache";

export async function createTicket(formData: TicketFormValues) {
  try {
    const supabase = await createClient();

    const validatedFields = ticketSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        error: z.flattenError(validatedFields.error).fieldErrors,
      };
    }

    const { title, description, assignee, status } = formData;

    const { error } = await supabase
      .from("ticket")
      .insert({ title, description, assignee, status });

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/ticket-management");
    revalidatePath("/dahboard");

    return { success: true };
  } catch (error) {
    return {
      error: error,
    };
  }
}

export async function updateTicket(
  ticketId: string,
  formData: TicketFormValues
) {
  try {
    console.log("See " + ticketId)
    const supabase = await createClient();

    const validatedFields = ticketSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        error: z.flattenError(validatedFields.error).fieldErrors,
      };
    }

    const { title, description, assignee, status } = formData;

    const { error } = await supabase
      .from("ticket")
      .update({ title, description, assignee, status })
      .eq("id", ticketId);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/ticket-management");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    return {
      error: error,
    };
  }
}

export async function deleteTicket(ticketId: string) {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("ticket").delete().eq("id", ticketId);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/ticket-management");
    revalidatePath("/dahboard");

    return { success: true };
  } catch (error) {
    return {
      error: error,
    };
  }
}
