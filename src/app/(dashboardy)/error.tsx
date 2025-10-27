"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

import { GrAlert } from "@/icons";

export default function Error({
  error,
  // eslint-disable-next-line
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='h-full flex flex-col justify-center items-center '>
      <h2 className='text-center text-xl'>
        <span className='block text-5xl text-red-700 '>
          <GrAlert className="mx-auto" />
        </span>
        Something went wrong!
      </h2>
      <p className='my-1'>{error.message}</p>
       
    </div>
  );
}
