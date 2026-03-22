// "use client";

// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// // import components
// import { DotButton, useDotButton } from "./carousel-dot-buttons";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./carousel-arrow-buttons";

// type PropType = {
//   slides: string[];
//   options?: EmblaOptionsType;
// };

// export default function MobileImageCarousel(props: PropType) {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);
//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <div className="flex flex-col items-center">
//       <div className="grid grid-cols-3 md:w-auto">
//         <div className="embla__buttons place-content-center ml-10">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//         </div>
//         <div
//           className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50"
//           ref={emblaRef}>
//           <div className="embla__container">
//             <div className="embla__controls"></div>
//             {slides.map((slide, index) => {
//               const isVideo = /\.(mp4|webm|ogg)$/.test(slide);
//               return (
//                 <div className="embla__slide" key={index}>
//                   {isVideo ? (
//                     <video
//                       src={slide}
//                       width={1080}
//                       height={1920}
//                       autoPlay
//                       loop
//                       muted
//                     />
//                   ) : (
//                     <Image
//                       priority
//                       src={slide}
//                       alt={`Slide ${index + 1}`}
//                       width={1080}
//                       height={1938}
//                       {...(slide.endsWith(".gif") ? { unoptimized: true } : {})}
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="embla__buttons place-content-center mr-10">
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>
//       </div>
//       {/* <div className="embla__dots flex justify-center">
//         {scrollSnaps.map((_, index) => (
//           <DotButton
//             key={index}
//             onClick={() => onDotButtonClick(index)}
//             className={"embla__dot".concat(
//               index === selectedIndex ? " embla__dot--selected" : ""
//             )}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// }


"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState } from "react"; // CHANGED: Added useState import
import { Dialog, DialogPanel } from "@headlessui/react"; // CHANGED: Added Dialog import
import { RiCloseFill } from "react-icons/ri"; // CHANGED: Added close icon import
// import components
import { DotButton, useDotButton } from "./carousel-dot-buttons";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-buttons";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function MobileImageCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // CHANGED: Added state for full screen image
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // CHANGED: Handler to open full screen
  const handleImageClick = (slide: string) => {
    setFullscreenImage(slide);
  };

  // CHANGED: Handler to close full screen
  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 md:w-auto">
        <div className="embla__buttons place-content-center ml-10">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div
          className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md  shadow-zinc-200/50"
          ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__controls"></div>
            {slides.map((slide, index) => {
              const isVideo = /\.(mp4|webm|ogg)$/.test(slide);
              return (
                <div className="embla__slide" key={index}>
                  {isVideo ? (
                    <video
                      src={slide}
                      width={1080}
                      height={1920}
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    // CHANGED: Added onClick handler and cursor pointer
                    <div 
                      onClick={() => handleImageClick(slide)}
                      className="cursor-pointer"
                    >
                      <Image
                        priority
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        width={1080}
                        height={1938}
                        {...(slide.endsWith(".gif") ? { unoptimized: true } : {})}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="embla__buttons place-content-center mr-10">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      {/* <div className="embla__dots flex justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div> */}

      {/* CHANGED: Added full screen modal dialog */}
      <Dialog
        open={fullscreenImage !== null}
        onClose={handleCloseFullscreen}
        className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/90 p-4">
          <DialogPanel className="relative w-full h-full max-w-4xl max-h-screen flex items-center justify-center">
            {/* CHANGED: Close button */}
            <button
              type="button"
              onClick={handleCloseFullscreen}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close">
              <RiCloseFill size={32} />
            </button>

            {/* CHANGED: Full screen image display */}
            {fullscreenImage && !fullscreenImage.match(/\.(mp4|webm|ogg)$/) && (
              <Image
                src={fullscreenImage}
                alt="Fullscreen view"
                width={1080}
                height={1938}
                className="max-w-full max-h-full object-contain"
                {...(fullscreenImage.endsWith(".gif")
                  ? { unoptimized: true }
                  : {})}
              />
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}