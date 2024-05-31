const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-xl sm:text-3xl text-white font-bold tracking-tight'>
          Vagabond.in
        </span>
        <span className='text-white font-bold tracking-tight flex gap-4 text-sm'>
          <p className='cursor-pointer'>Privacy Policy</p>
          <p className='cursor-pointer'>Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
