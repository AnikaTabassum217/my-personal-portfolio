// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// const profileImg = '/images/hero/img1.jpg'

// const HeroDetails = () => {
//   return (
//     <div className="relative overflow-hidden ">
//       {/* Animated Background */}
//       <motion.div
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//       >
//         {/* <div className="absolute w-[150%] h-[150%] -top-1/2 -left-1/2 rounded-full bg-blue-00 blur-3xl opacity-30 animate-pulse"></div>
//         <div className="absolute w-[120%] h-[120%] top-1/4 left-1/3 rounded-full bg-purple-00 blur-2xl opacity-40 animate-pulse"></div> */}
//       </motion.div>

//       {/* Foreground Content */}
//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 0.5,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//       >
//         {/* grid grid-cols-1 md:grid-cols-2 gap-10  p-10 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-10">
//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             className="col-span-1 "
//           >
//             <div>

//               <div className="flex flex-col justify-center items-center ">
//                 <Image
//                   src={profileImg}
//                   alt="profile Image"
//                   width={500}
//                   height={500}
//                   className="h-1/2 w-1/2 rounded-sm "
//                 />
//                 <div className="mt-4 font-semibold italic font-serif">Anika Tabassum</div>
//                 <Link href={'https://www.linkedin.com/in/anika-tabassum-1b62541b1/'} target="_blank">
//                   <div className=" font-semibold italic font-serif hover:underline hover:scale-95 duration-200">Web developer</div>
//                 </Link>

//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             className="col-span-1 "
//           >
//             <div className="container mx-auto  text-gray-700">
//               Hi, I'm Anika Tabassum - Web Developer.
//               Welcome to my portfolio! <br /> <br />
//               I'm a passionate web developer with a strong focus on creating responsive, user-friendly websites and web applications. While my expertise currently lies in front-end technologies like React, Next.js, and Tailwind CSS, I am on a journey to become a full-stack developer. I am eager to dive into back-end development to expand my skills and gain a deeper understanding of server-side technologies, databases, and APIs.
//               <br /> <br />
//               With a dedication to writing clean, efficient code and delivering seamless user experiences, I aim to build impactful digital solutions that bridge the gap between front-end and back-end development. Learning new tools and technologies excites me, and I'm committed to continuous growth in this ever-evolving field. <br /> <br />
//               Explore my projects to see how I turn ideas into reality.

//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
// export default HeroDetails
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import React from "react";


const HeroDetails = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {/* Background Animation (commented out) */}
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-14 h-full ">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="col-span-1 "
          >

            <div className="container mx-auto">
              <div className="flex flex-col gap-2 justify-center items-center ">
                <Image
                  src={'/images/hero/img1.jpg'}
                  alt="profile Image"
                  width={500}
                  height={500}
                  className="h-full w-1/2 rounded-sm "
                />
                <div className=" font-semibold italic font-serif">
                  Anika Tabassum
                </div>
                <Link
                  href="https://www.linkedin.com/in/anika-tabassum-1b62541b1/"
                  target="_blank"
                >
                  <div className="font-semibold italic font-serif hover:underline hover:scale-95 duration-200">
                    Web developer
                  </div>
                </Link>
              </div>
            </div>

          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="col-span-1 "
          >
            <div className="container mx-auto text-gray-700 ">
               <div className="flex flex-col gap-6">
               <div className="text-lg font-semibold ">Hi, I&apos;m Anika Tabassum - Web Developer.
                Welcome to my portfolio!
              </div>

              <div  className="text-base font-normal">
                I&apos;m a passionate web developer with a strong focus on creating
                responsive, user-friendly websites and web applications. While my
                expertise currently lies in front-end technologies like React,
                Next.js, and Tailwind CSS, I am on a journey to become a full-stack
                developer. I am eager to dive into back-end development to expand my
                skills and gain a deeper understanding of server-side technologies,
                databases, and APIs.
              </div>

              <div className="text-base font-normal">
                With a dedication to writing clean, efficient code and delivering
                seamless user experiences, I aim to build impactful digital solutions
                that bridge the gap between front-end and back-end development.
                Learning new tools and technologies excites me, and I&apos;m committed
                to continuous growth in this ever-evolving field.
              </div>

              <div className="text-lg font-medium">Explore my projects to see how I turn ideas into reality.</div>
                </div>              
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroDetails;
