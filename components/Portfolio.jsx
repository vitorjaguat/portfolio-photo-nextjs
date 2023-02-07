import Image from 'next/legacy/image';

export default function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-cols-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1547803233-71d592607aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80'
            alt='sample'
            layout='responsive'
            width='677'
            height='451'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1544008009-d2389e57b0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            alt='sample'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1544008009-d2389e57b0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            alt='sample'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1544008009-d2389e57b0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            alt='sample'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1544008009-d2389e57b0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            alt='sample'
          />
        </div>
      </div>
    </div>
  );
}
