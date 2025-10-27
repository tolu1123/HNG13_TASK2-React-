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
import { FaRegTrashAlt, GrAlert } from "@/icons";
import { toastError, toastSuccess } from "@/lib/toasts";
import { deleteTicket } from "@/actions/ticketing/ticketing";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Ticket {
  title: string;
  id: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  assignee: string;
}

function DeleteTicketDialog({ ticket }: { ticket: Ticket }) {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (loading) return;
    setLoading(true);
    const deleteTicketWithId = deleteTicket.bind(null, ticket.id);

    const { error, success } = await deleteTicketWithId();

    if (error) {
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

    if (success) {
      setOpen(false);
      toastSuccess(
        `Ticket "${ticket.id.slice(0, 8)}" has been deleted successfully.`
      );
      router.refresh()
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <FaRegTrashAlt className='h-4 w-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] flex flex-col'>
        <DialogHeader>
          <DialogTitle className='text-center'>
            <span className='inline-block p-3 md:p-4 rounded-full bg-red-700/20 backdrop-opacity-80'>
              <GrAlert className='text-3xl md:text-4xl mx-auto text-red-700' />
            </span>
            <p className='font-bold'>Confirm Deletion</p>
          </DialogTitle>
          <DialogDescription className='text-center'>
            Are you sure you want to permanently delete ticket #
            {ticket.id.slice(0, 8)}? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='w-full flex justify-between'>
          <DialogClose asChild>
            <Button variant='outline' className=''>
              Cancel
            </Button>
          </DialogClose>
          <Button
            type='button'
            onClick={handleDelete}
            className='text-white bg-red-700 hover:bg-red-700'
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteTicketDialog;
