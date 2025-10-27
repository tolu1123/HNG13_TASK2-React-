import Link from "next/link";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className='pt-20 relative'>
      {/* The div for the decorative circle */}
      <div className='w-full md:w-1/2 max-w-2xl bg-[#403294]/10 aspect-square rounded-full absolute -left-1/10 -top-3/10 md:-left-1/10 md:-top-5/10 z-1' />
      <div className='lg:max-w-[1440px] px-5 pb-30 md:pb-0 mx-auto flex flex-col justify-center items-center z-2'>
        <h2 className='text-2xl md:text-4xl font-black font-roboto text-center'>
          Effortless Ticket
          <br className='hidden lg:block' />
          Management
        </h2>
        <p className='text-center my-5'>
          The ultimate solution for streaming customer support and managing
          tickets
          <br className='hidden lg:block' />
          with ease, all in one intuitive platform.
        </p>
        <div className='flex gap-6'>
          <Button className='' asChild>
            <Link href='/login'>Get Started</Link>
          </Button>
          <Button className='px-5 py-1' asChild>
            <Link href='#about'>Learn More</Link>
          </Button>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        // preserveAspectRatio='none'
        className=''
      >
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,58.7C672,53,768,107,864,122.7C960,139,1056,117,1152,138.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </section>
  );
}

export default Hero;
