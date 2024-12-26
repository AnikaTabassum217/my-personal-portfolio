import React from "react";
import { FaGithub } from "react-icons/fa6";

import { AiFillTwitterCircle } from "react-icons/ai";
// import { SiFacebook } from "react-icons/si";
import { RiFacebookCircleFill } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
const linkedin = '/images/footer/linkedin.png'
const Footer=()=>{
    return(
        <>
        <div className="bg-gray-400 py-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

            <div className="col-span-1 flex flex-col justify-start px-4">

                <Link href={'https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=new'} target="_blank">
           <div className="font-medium text-base italic flex justify-center items-center">tabassum.anika@gmail.com</div>
           </Link>
           {/* <div>01824....47</div> */}
            </div>

            <div className="col-span-1 text-xs font-medium italic flex justify-center items-center">© Anika Tabassum 2024</div>

            <div className="col-span-1">
                <div className="flex  justify-center items-center gap-2">

                    <Link href={'https://github.com/AnikaTabassum217'} target="_blank">
                    <FaGithub size={28} className="hover:scale-95 duration-300 cursor-pointer"/>
                    </Link>
                
                <Link href={'https://www.linkedin.com/in/anika-tabassum-1b62541b1/'}>
                
                <Image
                src={linkedin}
                alt="linkedin"
                width={28}
                height={28}
                className="h-8 w-8 rounded-full hover:scale-95 duration-300 cursor-pointer"
                />
                
                </Link>
               
                <Link href={''} target="_blank">
                <AiFillTwitterCircle size={32} className="hover:scale-95 duration-300 cursor-pointer"/>
                </Link>
                
                <Link href={''} target="_blank">
                <RiFacebookCircleFill size={32} className="hover:scale-95 duration-300 cursor-pointer"/>
                </Link>
                
                </div>
            </div>
            </div>
         
        </div> 
        </>
    )
}
export default Footer