"use client"

import TicketCard from "@/components/ticket-management/TicketCard";

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

export default function TicketGrid({tickets, profiles}: {tickets: Ticket[], profiles: Profile[]}) {
  return (
    <section className={`grid ${tickets.length > 0 ?"grid-cols-1 md:grid-cols-2": "grid-cols-1 w-full h-full"} gap-5 mt-5`}>
      {tickets.length > 0 ? tickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} profiles={profiles}/>
      )): <div className="w-full h-full flex justify-center items-center text-closed text-xl">
        No tickets available.
        </div>}
    </section>
  );
}

