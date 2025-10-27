import React from "react";
import Link from "next/link";

function HeaderHome() {
  return (
    <header className='w-full'>
      <div className='w-full mx-auto lg:max-w-[1440px] flex justify-between align-middle bg-transparent px-5 py-4 z-10'>
        <h1 className='text-lg font-bold'>TicketFlow</h1>
        <nav>
          <Link href='/login'>Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderHome;
