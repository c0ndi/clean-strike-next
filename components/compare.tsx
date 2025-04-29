"use client";

import dynamic from "next/dynamic";
import React from "react";

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CompareProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  className?: string;
  sliderPositionPercentage?: number;
  hoverSlider?: boolean;
}

const Compare: React.FC<CompareProps> = ({
  before,
  after,
  altBefore = "Zdjęcie przed czyszczeniem",
  altAfter = "Zdjęcie po czyszczeniu",
  className,
  sliderPositionPercentage,
  hoverSlider,
  ...rest
}) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <Button variant={"default"} className="bg-gray-800 absolute left-3 my-auto inset-y-0 !opacity-80" disabled>
          <ArrowLeft />
          Przed
        </Button>

        <Button variant={"default"} className="bg-gray-800 absolute right-3 my-auto inset-y-0 !opacity-80" disabled>
          <ArrowRight />
          Po
        </Button>
      </div>
      <ReactBeforeSliderComponent
        className={className}
        firstImage={{
          imageUrl: after,
          alt: altAfter,
        }}
        secondImage={{
          imageUrl: before,
          alt: altBefore,
        }}
      />
    </div>
  )
}


export { Compare };