"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MotionBackground from "../shared/motion-background/MotionBackground";
const img = '/images/education/educationBackground.png'

const EducationBackground = () => {
  return (
    <>
      <MotionBackground src={img} alt="Education Image">
        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold font-serif lg:px-0 px-4">
            <TextGenerateEffect words="Educational Credentials." />
        </div>
      </MotionBackground>
    </>
  )
}
export default EducationBackground