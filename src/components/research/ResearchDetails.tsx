// 'use client';

// import { motion } from 'framer-motion';



// const ResearchDetails = () => {
//   return (
//     <>
    
//       <div className=" flex justify-center items-center gap-4 ">
        
//           <motion.div
           
//           >
            
//             <div className='flex flex-col justify-center items-center gap-6 w-full h-full'>
//               <div className=' text-justify'>
//                 <p>Topic: Data-Medi: A Web Database System for E-Health</p>
//                 <p>Conference Name: 6th World S4 2022</p>
//                 <p>Publisher: Springer Nature</p>
//                 <p>Author’s: Anika Tabassum, Tahmidul Islam, Tajim Md. Niamat Ullah Akhund</p>
//               </div>

//               <div className=' text-justify'>
//                 <p>Topic: A Systematic Literature Review on Bengali Grammar Correction System. (Ongoing)</p>
//                 <p>Author’s: Mohammad Abu Nadif, Anika Tabassum, Tanzeem Rahat ,Aninda Kumar Sharma,
//                 Kawser I. Rushee, Md Shamsur Rahim</p>
//               </div>
//             </div>
//           </motion.div>
       
//       </div>
//     </>
//   );
// };

// export default ResearchDetails;



'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ResearchDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-3/4 lg:w-2/3"
      >
        <div className="flex flex-col gap-8">
          {/* First Research Topic */}
          <p className='font-semibold text-xl font-serif'>Research</p>
          <div className="p-4 bg-gray-50 rounded-lg shadow-lg text-justify">
            
            <p className="font-semibold font-serif">Topic: <span className="font-normal">Data-Medi: A Web Database System for E-Health</span></p>
            <p className="font-semibold font-serif">Conference Name: <span className="font-normal">6th World S4 2022</span></p>
            <p className="font-semibold font-serif">Publisher: <span className="font-normal">Springer Nature</span></p>
            <p className="font-semibold font-serif">Authors: <span className="font-normal">Anika Tabassum, Tahmidul Islam, Tajim Md. Niamat Ullah Akhund</span></p>
             <Link href='https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xl78yisAAAAJ&citation_for_view=Xl78yisAAAAJ:u-x6o8ySG0sC  ' target="_blank">
              <button className=' mt-2 underline hover:scale-95 duration-300 font-serif'>
              View Paper
              </button>
             </Link>
          </div>
          {/* Second Research Topic */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-lg text-justify">
            <p className="font-semibold font-serif">Topic: <span className="font-normal">A Systematic Literature Review on Bengali Grammar Correction System <span className='font-semibold'>(Ongoing)</span></span></p>
            <p className="font-semibold font-serif">Authors: <span className="font-normal">Mohammad Abu Nadif, Anika Tabassum, Tanzeem Rahat, Aninda Kumar Sharma, Kawser I. Rushee, Md Shamsur Rahim</span></p>
            <Link href='https://www.researchgate.net/publication/383904576_A_Systematic_Literature_Review_on_Bengali_Grammar_Correction_System' target="_blank">
              <button className='mt-2 underline hover:scale-95 duration-300 font-serif'>
              View Paper
              </button>
             </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2 items-start mt-6'>
        <p className='font-semibold text-xl mt-4 font-serif'>Projects</p>
            
            <div className='bg-gray-50 rounded-lg shadow-lg text-justify w-full p-4'>
           <div> <Link href={'https://my-kitcheng-frontend.vercel.app/'} target="_blank" className='hover:underline italic cursor-pointer'>https://github.com/AnikaTabassum217/my-kitchen</Link></div>
            <div><Link href={'https://github.com/AnikaTabassum217/e-commerce-for-lamp'} target="_blank" className='hover:underline italic cursor-pointer'>https://e-commerce-for-lamp.vercel.app/</Link></div>
            <div><Link href={'https://github.com/AnikaTabassum217/ecommerce-project-1'} target="_blank" className='hover:underline italic cursor-pointer'>https://github.com/AnikaTabassum217/ecommerce-project-1</Link></div>
            <div><Link href={'https://github.com/AnikaTabassum217/carpool-website'} target="_blank" className='hover:underline italic cursor-pointer'>https://carpool-website-nine.vercel.app/</Link></div>
            <div><Link href={'https://github.com/AnikaTabassum217/Tesla'} target="_blank" className='hover:underline italic cursor-pointer'>https://github.com/AnikaTabassum217/Tesla</Link></div>
            <div><Link href={'https://github.com/AnikaTabassum217/BMW'} target="_blank" className='hover:underline italic cursor-pointer'>https://github.com/AnikaTabassum217/BMW</Link></div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchDetails;
