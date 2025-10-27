function Footer() {
  return (
    <footer>
      <div className='lg:max-w-[1440px] px-5 mx-auto flex gap-5 flex-col justify-center items-center text-center'>
        <div className="py-5">
          <h6 className="font-bold text-lg font-roboto">
            TicketFlow
          </h6>
          <p className="text-[#6b778c]">
            The best way to manage customer support.
          </p>
        </div>
        <div className="py-5">
          <p className="text-[#6b778c]">
            @2025 Ticketflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
