import CreateTicketDialog from "@/components/ticket-management/CreateTicketDialog";
import SearchBar from "@/components/ticket-management/SearchBar";
import TicketGrid from "@/components/ticket-management/TicketGrid";
import { createClient } from "@/utils/supabase/server";




export default async function page() {
  const supabase = await createClient();

  const { data: tickets, error } = await supabase.from("ticket").select();

  if (error) {
    throw new Error(error.message);
  }

  const { data: profiles, error: profileError } = await supabase.from("profiles").select("username");

  if(profileError) {
    throw new Error(profileError.message)
  }

  return (
    <main className='min-h-full'>
      <section className='flex gap-5'>
        <SearchBar />
        <CreateTicketDialog profiles={profiles} />
      </section>
      <TicketGrid tickets={tickets} profiles={profiles}/>
    </main>
  );
}
