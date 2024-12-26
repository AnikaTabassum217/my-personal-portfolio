


import React from "react";
import { motion } from 'framer-motion';

const WorkDetails = () => {
  return (
    <>
      <div className="relative overflow-hidden ">

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-10 h-full">
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
              <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xl font-semibold font-serif">Teaching Assistant</div>
                  <div className="text-base font-serif mt-2">American International University Bangladesh(AIUB)</div>
                  <div className="text-base font-serif">1st May 2022 to 30th August 2022</div>
                </div>

                <div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Conducted lab classes for undergraduate students on Data Structures and Theory of Computation.</li>
                    <li>Helping them understand core concepts and practical implementations.
                    </li>

                    <li>
                      Guided students in their simulation projects and coding assignments
                    </li>

                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xl font-semibold font-serif">Communication Intern</div>
                  <div className="text-base font-serif mt-2"> CrowdV Limited</div>
                  <div className="text-base font-serif">1st January to 30th June 2023</div>
                </div>

                <div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li> Assisted in drafting and editing content for internal and external communications</li>
                    <li>Coordinated with teams to streamline information flow
                    </li>
                    <li>Gained hands-on experience in creating impactful messaging and managing communication channels effectively.</li>

                  </ul>
                </div>
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
              className=" col-span-1"
            >
              <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xl font-semibold font-serif">Trainee Programmer (React, Frontend)</div>
                  <div className="text-base font-serif mt-2">Kodeeo Limited</div>
                  <div className="text-base font-serif">5th September to 30th December 2023</div>
                </div>

                <div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gained Knowledge about JavaScript and Tailwind CSS</li>
                    <li>Developed  responsive designs to ensure seamless user experiences across devices.
                    </li>

                    <li>
                    Worked with the React framework to build and maintain  web applications
                    </li>
                    <li>
                         Developed  e-commerce projects
                      </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xl font-semibold font-serif">Junior Software Engineer(Web developer)</div>
                  <div className="text-base font-serif mt-2">ATI Limited</div>
                  <div className="text-base font-serif">4th May 2024 to Presnet</div>
                </div>

                <div>
                  <ul className="list-disc pl-5 space-y-1">
                  <li> Acquired proficiency in TypeScript, enhancing code reliability and maintainability.</li>
                        <li>Developed web applications using Next.js, focusing on performance and scalability.
                             </li>
                      <li>Contributed to the development of the company’s official website and various portfolio websites, delivering modern and user-friendly designs.</li>
                  </ul>
                </div>
              </div>
              </div>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
export default WorkDetails


