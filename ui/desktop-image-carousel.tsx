// "use client";

// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./carousel-arrow-buttons";

// type PropType = {
//   slides: string[];
//   options?: EmblaOptionsType;
// };

// export default function DesktopImageCarousel(props: PropType) {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <>
//       <div
//         className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50"
//         ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((slide, index) => (
//             <div className="embla__slide" key={index}>
//               <Image
//                 priority
//                 src={slide}
//                 alt={`Slide ${index + 1}`}
//                 width={1920}
//                 height={1080}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-3 p-6 pb-0">
//       <div className="embla__buttons place-content-center ">
//         <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//       </div>
//       <div></div>
//       <div className="embla__buttons place-content-center ">
//         <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//       </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import { useState } from "react"; // CHANGED: Added useState import
// import { Dialog, DialogPanel } from "@headlessui/react"; // CHANGED: Added Dialog import
// import { RiCloseFill } from "react-icons/ri"; // CHANGED: Added close icon import
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./carousel-arrow-buttons";

// type PropType = {
//   slides: string[];
//   options?: EmblaOptionsType;
// };

// export default function DesktopImageCarousel(props: PropType) {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   // CHANGED: Added state for full screen image
//   const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

//   // CHANGED: Handler to open full screen
//   const handleImageClick = (slide: string) => {
//     setFullscreenImage(slide);
//   };

//   // CHANGED: Handler to close full screen
//   const handleCloseFullscreen = () => {
//     setFullscreenImage(null);
//   };

//   return (
//     <>
//       <div
//         className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50"
//         ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((slide, index) => (
//             <div className="embla__slide" key={index}>
//               {/* CHANGED: Added onClick handler and cursor pointer wrapper */}
//               <div
//                 onClick={() => handleImageClick(slide)}
//                 className="cursor-pointer">
//                 <Image
//                   priority
//                   src={slide}
//                   alt={`Slide ${index + 1}`}
//                   width={1920}
//                   height={1080}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-3 p-6 pb-0">
//         <div className="embla__buttons place-content-center ">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//         </div>
//         <div></div>
//         <div className="embla__buttons place-content-center ">
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>
//       </div>

//       {/* CHANGED: Added full screen modal dialog */}
//       <Dialog
//         open={fullscreenImage !== null}
//         onClose={handleCloseFullscreen}
//         className="relative z-50">
//         <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/90 p-4">
//           <DialogPanel className="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
//             {/* CHANGED: Close button */}
//             <button
//               type="button"
//               onClick={handleCloseFullscreen}
//               className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
//               aria-label="Close">
//               <RiCloseFill size={32} />
//             </button>

//             {/* CHANGED: Full screen image display */}
//             {fullscreenImage && (
//               <Image
//                 src={fullscreenImage}
//                 alt="Fullscreen view"
//                 width={1920}
//                 height={1080}
//                 className="max-w-full max-h-full object-contain rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50"
//               />
//             )}
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </>
//   );
// }


"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState } from "react"; // CHANGED: Added useState import
import { Dialog, DialogPanel } from "@headlessui/react"; // CHANGED: Added Dialog import
import { RiCloseFill } from "react-icons/ri"; // CHANGED: Added close icon import
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"; // CHANGED: Added navigation icons
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-buttons";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function DesktopImageCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // CHANGED: Added state for full screen image with index tracking
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);

  // CHANGED: Handler to open full screen
  const handleImageClick = (slide: string) => {
    const index = slides.indexOf(slide);
    setFullscreenImageIndex(index);
  };

  // CHANGED: Handler to close full screen
  const handleCloseFullscreen = () => {
    setFullscreenImageIndex(null);
  };

  // CHANGED: Handler to go to next image in fullscreen
const handleNextImage = () => {
  if (fullscreenImageIndex !== null) {
    setFullscreenImageIndex((prevIndex) => {
      // CHANGED: Added null coalescing to handle possibly null prevIndex
      const currentIndex = prevIndex ?? 0;
      return currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    });
  }
};

// CHANGED: Handler to go to previous image in fullscreen
const handlePrevImage = () => {
  if (fullscreenImageIndex !== null) {
    setFullscreenImageIndex((prevIndex) => {
      // CHANGED: Added null coalescing to handle possibly null prevIndex
      const currentIndex = prevIndex ?? 0;
      return currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    });
  }
};

  // CHANGED: Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "Escape") handleCloseFullscreen();
  };

  const currentFullscreenImage = fullscreenImageIndex !== null ? slides[fullscreenImageIndex] : null;
  const isFullscreenOpen = fullscreenImageIndex !== null;

  return (
    <>
      <div
        className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50"
        ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {/* CHANGED: Added onClick handler and cursor pointer wrapper */}
              <div
                onClick={() => handleImageClick(slide)}
                className="cursor-pointer">
                <Image
                  priority
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 p-6 pb-0">
        <div className="embla__buttons place-content-center ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div></div>
        <div className="embla__buttons place-content-center ">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {/* CHANGED: Refactored full screen modal dialog with responsive navigation */}
<Dialog
  open={isFullscreenOpen}
  onClose={handleCloseFullscreen}
  className="relative z-50">
  <div 
    className="fixed inset-0 flex w-screen items-center justify-center bg-black/90 p-4"
    onKeyDown={handleKeyDown}
    tabIndex={0}>
    <DialogPanel className="relative w-full h-full max-w-6xl max-h-screen flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      {/* CHANGED: Previous button hidden on mobile, visible on md+ */}
      <button
        type="button"
        onClick={handlePrevImage}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 p-2"
        aria-label="Previous image">
        <MdNavigateBefore size={40} />
      </button>

      {/* CHANGED: Close button */}
      <button
        type="button"
        onClick={handleCloseFullscreen}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20"
        aria-label="Close">
        <RiCloseFill size={32} />
      </button>

      {/* CHANGED: Full screen image display with wrapper */}
      {currentFullscreenImage && (
        <div className="rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50 overflow-hidden max-w-[90vw] max-h-[90vh] flex items-center justify-center">
          <Image
            src={currentFullscreenImage}
            alt="Fullscreen view"
            width={1920}
            height={1080}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* CHANGED: Next button hidden on mobile, visible on md+ */}
      <button
        type="button"
        onClick={handleNextImage}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 p-2"
        aria-label="Next image">
        <MdNavigateNext size={40} />
      </button>

      {/* CHANGED: Mobile button container - visible below image on mobile, hidden on md+ */}
      <div className="flex md:hidden gap-8 justify-center w-full">
        <button
          type="button"
          onClick={handlePrevImage}
          className="text-white hover:text-gray-300 transition-colors z-20 p-2"
          aria-label="Previous image">
          <MdNavigateBefore size={40} />
        </button>
        <button
          type="button"
          onClick={handleNextImage}
          className="text-white hover:text-gray-300 transition-colors z-20 p-2"
          aria-label="Next image">
          <MdNavigateNext size={40} />
        </button>
      </div>

      {/* CHANGED: Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-lg">
        {fullscreenImageIndex !== null ? fullscreenImageIndex + 1 : 0} / {slides.length}
      </div>
    </DialogPanel>
  </div>
</Dialog>
    </>
  );
}