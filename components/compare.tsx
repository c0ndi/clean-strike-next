"use client";

import dynamic from "next/dynamic";
import React from "react";

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
const ReactCompareImage = dynamic(() => import("react-compare-image"), { ssr: false });
// const ReactBeforeSliderComponent = dynamic(() => import('react-before-after-slider-component'), { ssr: false });

interface CompareProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  className?: string;
  sliderPositionPercentage?: number;
  hoverSlider?: boolean;
  // Dodaj inne propsy z react-compare-image, które uznasz za potrzebne
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
    <div className={className}>
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        leftImageAlt={altBefore}
        rightImageAlt={altAfter}
        sliderPositionPercentage={sliderPositionPercentage}
        {...rest}
      />
    </div>
  );
};

const Compare2: React.FC<CompareProps> = ({
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
    <ReactBeforeSliderComponent
      firstImage={{
        imageUrl: before,
        alt: altBefore,
      }}
      secondImage={{
        imageUrl: after,
        alt: altAfter,
      }}
    />
  )
}

export function HomeCompare() {
  return (
    <div className="h-[300px] container my-32 grid grid-cols-1 gap-4 md:grid-cols-3">
      <Compare
        before="/images/before1.png"
        after="/images/after1.png"
        altBefore="Kostka przed 1"
        altAfter="Kostka po 1"
        className="rounded-lg overflow-hidden border border-border/50"
      />
      <Compare2
        before="/images/before1.png"
        after="/images/after1.png"
        altBefore="Kostka przed 2"
        altAfter="Kostka po 2"
        className="rounded-lg overflow-hidden border border-border/50"
      />
      <Compare
        before="/images/before3.jpg"
        after="/images/after3.jpg"
        altBefore="Kostka przed 3"
        altAfter="Kostka po 3"
        className="rounded-lg overflow-hidden border border-border/50"
      />
    </div>
  )
}

export default Compare;