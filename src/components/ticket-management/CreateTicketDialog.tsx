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
import { FiPlus } from "@/icons";
import CreateTicketForm from "./CreateTicketForm";
import { useState } from "react";

interface Profile {
  username: string;
}

export default function CreateTicketDialog({profiles}: {profiles: Profile[]}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-[#0052CC] hover:bg-[#0041A8] text-white font-medium'>
          <FiPlus className='mr-2 h-4 w-4' />
          Create New Ticket
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Create New Ticket</DialogTitle>
          <DialogDescription className='sr-only'>
            This is a dialog for creating new tickets.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <CreateTicketForm profiles={profiles} setOpen={setOpen}/>
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
