"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketSchema, type TicketFormValues } from "@/lib/validations/ticket";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { toastError, toastSuccess } from "@/lib/toasts";
import { updateTicket } from "@/actions/ticketing/ticketing";

interface Ticket {
  title: string;
  id: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  assignee: string;
}

interface Profile {
  username: string;
}

export default function EditTicketForm({
  ticket,
  profiles,
  setOpen
}: {
  ticket: Ticket;
  profiles: Profile[];
  setOpen: (v: boolean) => void
}) {
  
  const form = useForm<TicketFormValues>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      title: ticket.title,
      description: ticket.description,
      assignee: ticket.assignee,
      status: ticket.status,
    },
  });

  const onSubmit = async (data: TicketFormValues) => {
    const editTicket = updateTicket.bind(null, ticket.id);

    const { error, success } = await editTicket(data);


    if (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        !("message" in error)
      ) {
        // Handle validation errors (username, email, password fields)
        Object.entries(error).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            form.setError(field as keyof TicketFormValues, {
              message: messages[0], // Show first error message
            });
          }
        });
      } else {
        // Convert error to string based on its type
        if (typeof error === "string") {
          toastError(error);
        } else if (typeof error === "object" && error !== null) {
          // Handle object errors (like validation errors or PostgrestError)
          const errorMessage =
            "message" in error
              ? error.message
              : "Failed to create ticket. Please try again.";
          toastError(errorMessage as string);
        } else {
          // Fallback for any other error types
          toastError("An unexpected error occurred");
        }
      }
    }

    if (success) {
      form.reset()
      setOpen(false)
      toastSuccess(`Ticket "${data.title}" has been updated successfully.`);

    }
  };

  return (
    <form
      id='form-create-ticket'
      onSubmit={form.handleSubmit(onSubmit)}
      className='w-full'
    >
      <FieldGroup className='grid grid-cols-2'>
        <Controller
          name='title'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className='col-span-2'>
              <FieldLabel htmlFor='form-title'>Title</FieldLabel>
              <Input
                {...field}
                id='form-title'
                aria-invalid={fieldState.invalid}
                placeholder='e.g., Fix login authentication flow'
                autoComplete='off'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='description'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className='col-span-2'>
              <FieldLabel htmlFor='form-description'>Description</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id='form-description'
                  placeholder='Provide a detailed description of the issue.'
                  rows={6}
                  className='min-h-24 resize-none'
                  aria-invalid={fieldState.invalid}
                />
                <InputGroupAddon align='block-end'>
                  <InputGroupText className='tabular-nums'>
                    {field.value.length}/100 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='assignee'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className='col-span-1'>
              <FieldLabel htmlFor='form-ticket-assignee'>Assignee</FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                name={field.name}
                disabled={field.disabled}
              >
                <SelectTrigger
                  aria-invalid={fieldState.invalid}
                  id='form-ticket-assignee'
                >
                  <SelectValue placeholder='Select assignee' />
                </SelectTrigger>
                <SelectContent>
                  {profiles.map((profile) => (
                    <SelectItem key={profile.username} value={profile.username}>
                      {profile.username}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='status'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className='col-span-1'>
              <FieldLabel htmlFor='form-ticket-status'>Status</FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                name={field.name}
                disabled={field.disabled}
              >
                <SelectTrigger
                  aria-invalid={fieldState.invalid}
                  id='form-ticket-status'
                >
                  <SelectValue placeholder='Select Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='open'>Open</SelectItem>
                  <SelectItem value='in-progress'>In Progress</SelectItem>
                  <SelectItem value='closed'>Closed</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
