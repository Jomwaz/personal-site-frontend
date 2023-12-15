"use client";

import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import nightDayAnimation from "../../../../public/lottie/night-day-button.json";
import { useTheme } from "next-themes";

export default function NightDayButton(props) {
  const [mounted, setMounted] = useState(false);
  const [lottieLoaded, setLottieLoaded] = useState(false);
  const lottieRef = useRef();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])

  useEffect(() => {
    if (mounted) {
      setLottieLoaded(true);    
    }
  }, [mounted]);


  useEffect(() => {
    if (lottieLoaded) {
      lottieRef.current.setSpeed(0.4);

      if (theme == "dark") {
        lottieRef.current.goToAndStop(0);
      } 
      else {
        lottieRef.current.goToAndStop(12, true);
      } 
    } 

  }, [lottieLoaded]);

  const handleOnClick = (event) => {

    if (theme == "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark");
    }

    const currentFrame = lottieRef.current.getDuration(true);

    if (theme == "light") {
      lottieRef.current.playSegments([currentFrame, 0], true);
    } 
    else {
      lottieRef.current.playSegments([0, currentFrame], true);
    }
  };


  if (!mounted) {
    return null;
  }

  return (
    <div onClick={handleOnClick} className="hover: cursor-pointer w-12 h-12">
      <Lottie 
        lottieRef={lottieRef} 
        animationData={nightDayAnimation} 
        loop={false} 
        autoplay={false} 
        preserveAspectRatio="xMidYMid slice" 
        initialSegment={[0, 13]} // Start from the first frame
      />
    </div>
  );
}
