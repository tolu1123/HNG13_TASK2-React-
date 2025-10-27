import { RiInboxArchiveFill, HiOutlineUsers, MdOutlineAnalytics } from "@/icons";
function About() {
  return (
    <section id="about" className='bg-white w-full pb-10'>
      <div className='lg:max-w-[1440px] px-5 mx-auto flex flex-col justify-center items-center'>
        <h3 className='font-roboto text-xl md:text-3xl font-bold'>
          Everything you need in one platform
        </h3>
        <p className='text-center mt-5 mb-10'>
          Discover the powerful features that make managing your support tickets
          simpler
          <br className='hidden lg:block' />
          and more efficient than ever before.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {/* The Cards */}
          <div className=' px-5 py-6 rounded-xl shadow-lg bg-[#f4f5f7]'>
            {/* The icon */}
            <span className='inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] p-2'>
              <RiInboxArchiveFill />
            </span>
            <div className='mt-2'>
              {/* The card heading */}
              <h6 className='font-roboto text-lg md:text-xl font-semibold'>Unified Inbox</h6>
              {/* The details */}
              <p className=''>Bring all your customer conversations from email, chat and social media into one centralized place</p>
            </div>
          </div>

          <div className=' px-5 py-6 rounded-xl shadow-lg bg-[#f4f5f7]'>
            {/* The icon */}
            <span className='inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] p-2'>
              <HiOutlineUsers />
            </span>
            <div className='mt-2'>
              {/* The card heading */}
              <h6 className='font-roboto text-lg md:text-xl font-semibold'>Seamless Collaboration</h6>
              {/* The details */}
              <p className=''>Assign tickets, leave private notes, and track team performance to resolve issues faster together.</p>
            </div>
          </div>

          <div className=' px-5 py-6 rounded-xl shadow-lg bg-[#f4f5f7]'>
            {/* The icon */}
            <span className='inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] p-2'>
              <MdOutlineAnalytics />
            </span>
            <div className='mt-2'>
              {/* The card heading */}
              <h6 className='font-roboto text-lg md:text-xl font-semibold'>Powerful Analytics</h6>
              {/* The details */}
              <p className=''>Gain valuable insights with our comprehensive reporting tools to improve your support quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
