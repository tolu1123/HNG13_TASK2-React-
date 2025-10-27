import { MdOutlineAnalytics } from "react-icons/md";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();
  // Total tickets
  const { count: total, error: totalError } = await supabase
    .from("ticket")
    .select("*", { count: "exact", head: true });

  // Open tickets
  const { count: open, error: openError } = await supabase
    .from("ticket")
    .select("*", { count: "exact", head: true })
    .eq("status", "open");

  // Closed tickets
  const { count: closed, error: closedError } = await supabase
    .from("ticket")
    .select("*", { count: "exact", head: true })
    .eq("status", "closed");


  if(totalError || openError || closedError ) {
    throw new Error("An error occured while loading the page, please reload.")
  }

  return (
    <main>
      <div className=''>
        {/* section for cards */}
        <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='flex gap-2 px-5 py-6 rounded-xl shadow-lg'>
            {/* The icon */}
            <span className='h-fit inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] p-2'>
              <MdOutlineAnalytics />
            </span>
            <div className=''>
              {/* The card heading */}
              <h6 className=''>Total Tickets</h6>
              {/* The details */}
              <p className='font-roboto text-lg md:text-xl font-bold'>{total}</p>
            </div>
          </div>

          <div className='flex gap-2 px-5 py-6 rounded-xl shadow-lg'>
            {/* The icon */}
            <span className='h-fit inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] p-2'>
              <MdOutlineAnalytics />
            </span>
            <div className=''>
              {/* The card heading */}
              <h6 className=''>Open Tickets</h6>
              {/* The details */}
              <p className='font-roboto text-lg md:text-xl font-bold'>{open}</p>
            </div>
          </div>

          <div className='flex gap-2 px-5 py-6 rounded-xl shadow-lg'>
            {/* The icon */}
            <span className='h-fit inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] p-2'>
              <MdOutlineAnalytics />
            </span>
            <div className=''>
              {/* The card heading */}
              <h6 className=''>Resolved Tickets</h6>
              {/* The details */}
              <p className='font-roboto text-lg md:text-xl font-bold'>{closed}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
