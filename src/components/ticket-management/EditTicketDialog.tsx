"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { EditIcon } from "@/icons";
import EditTicketForm from "./EditTicketForm";
import { useState } from "react";


interface Ticket {
  title: string;
  id: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  assignee: string;
}

interface Profile {
  username: string
}

export default function EditTicketDialog({ ticket, profiles }: {ticket: Ticket, profiles: Profile[]}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='text-gray-500 hover:text-gray-700 bg-transparent hover:bg-transparent'>
          <EditIcon className='h-4 w-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Edit Ticket #{ticket.id.slice(0,8)}</DialogTitle>
          <DialogDescription className='sr-only'>
            This is a dialog for editing tickets.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <EditTicketForm ticket={ticket} profiles={profiles}  setOpen={setOpen}/>
        </div>
        <DialogFooter className='sm:justify-end'>
          <Field orientation='horizontal' className="flex justify-end">
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Cancel
              </Button>
            </DialogClose>
            <Button type='submit' form='form-create-ticket'>
              Submit
            </Button>
          </Field>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
