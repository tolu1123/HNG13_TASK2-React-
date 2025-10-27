
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadge from "@/components/ticket-management/StatusBadge";

import EditTicketDialog from "@/components/ticket-management/EditTicketDialog"
import DeleteTicketDialog from "./DeleteTicketDialog";

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

export default function TicketCard({ ticket, profiles }: { ticket: Ticket, profiles: Profile[] }) {
  return (
    <Card className=' shadow-sm'>
      <CardHeader className='flex flex-row items-start justify-between'>
        <div className='space-y-1'>
          <CardTitle className='font-roboto text-lg font-bold'>
            {ticket.title}
          </CardTitle>
          <CardDescription className='text-sm'>
            #{ticket.id.slice(0,8)}
          </CardDescription>
        </div>
        <div className='flex space-x-2'>
           
          <EditTicketDialog profiles={profiles} ticket={ticket} />
          <DeleteTicketDialog ticket={ticket} />
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-600 mb-4'>{ticket.description}</p>
        <div className='flex items-center justify-between'>
          <StatusBadge status={ticket.status} />
          <div className='flex items-center space-x-2'>
            <span className='text-sm text-gray-500'>{ticket.assignee}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
