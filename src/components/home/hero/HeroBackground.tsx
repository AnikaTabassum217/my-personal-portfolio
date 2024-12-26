'use client'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import React from "react";

import MotionBackground from "@/components/shared/motion-background/MotionBackground";

const img = '/images/hero/hero.png'

const HeroBackground = () => {
  return (
    <>

      <MotionBackground src={img} alt="Hero Image">
        <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold font-serif lg:px-0 px-4">
          <TextGenerateEffect words="Web Developer" />
        </div>
      </MotionBackground>
    </>
  )
}
export default HeroBackground