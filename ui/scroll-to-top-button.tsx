"use client";

import { useState, useEffect } from "react";
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";

export default function ScrollToTopButton() {
  const [scrollToTopButtonVisible, setScrollToTopButtonVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const toggleButtonVisibility = () => {
      const shouldShowButton = window.scrollY > 300;
      setScrollToTopButtonVisible(shouldShowButton);

      if (shouldShowButton && !isHovering) {
        if (timeoutId) clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
          if (!isHovering) {
            setScrollToTopButtonVisible(false);
          }
        }, 3000);
        setTimeoutId(newTimeoutId);
      }
    };

    window.addEventListener("scroll", toggleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId, isHovering]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      if (window.scrollY <= 300) {
        setScrollToTopButtonVisible(false);
        if (timeoutId) clearTimeout(timeoutId);
      }
    }, 500);
  };

  return (
    <div className="flex ml-auto z-50 text-outline">
      <button
        aria-label="scroll to top button"
        name="scroll to top button"
        className={`z-80 shadow-md shadow-green-500/50 bg-green-500 text-neutral-800 fixed bottom-4 right-4 rounded-full p-2 w-12 hover:bg-green-800 hover:transform hover:scale-110 transition-all duration-300 ease-in-out ${
          scrollToTopButtonVisible ? "opacity-85" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <PiArrowFatLinesUpDuotone size={24} className="h-8 w-8 animate-pulse" />
      </button>
    </div>
  );
}