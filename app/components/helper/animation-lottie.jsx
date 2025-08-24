"use client"

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    // Only import Lottie on client side
    if (typeof window !== 'undefined') {
      import("lottie-react").then((module) => {
        setLottieComponent(() => module.default);
      });
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!LottieComponent) {
    return <div style={{ width: '95%', height: '200px' }} />; // Placeholder while loading
  }

  return (
    <LottieComponent {...defaultOptions} />
  );
};

export default AnimationLottie;