// 'use client';

// import { motion } from 'framer-motion';
import Image from 'next/image';
// import { useMediaQuery } from 'react-responsive';
const information = [
  {
    img: '/images/education/img1.png',
    title:'Secondary School Certificate',
    name:'Radio Colony Model School',
    result:'(2014, GPA-5.00)'
  },
  {
    img: '/images/education/img2.png',
    title:'Higher School Certificate',
    name:'Milestone College',
    result:'(2016, GPA-4.92)'
  },
  {
    img: '/images/education/img3.png',
    title:'BSc in Computer Science and Engineering',
    name:'American International University- Bangladesh (AIUB)',
    result:'(2018-2021, CGPA-3.86)'
  },
];

const EducationDetails = () => {
  //const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <>          
        <div className='flex lg:flex-row flex-col  justify-center items-center'>
        {information.map((info,index)=>{
          return(
            <>
            <div className='flex flex-col  justify-center items-center gap-2'>
            <Image
              src={info.img}
              alt={`image-${index}`}
              width={300}
              height={300}
            
              className="rounded-full "
            />
               <p className='text-xl font-serif font-normal'>{info.title}</p>
              <p className='text-lg font-serif font-medium'>{info.name}</p>
               <p className='text-base font-serif font-semibold'>{info.result}</p>
            </div>
            </>
          )
        })}
        </div>
    </>
  );
};

export default EducationDetails;
