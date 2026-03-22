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

"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState } from "react"; // CHANGED: Added useState import
import { Dialog, DialogPanel } from "@headlessui/react"; // CHANGED: Added Dialog import
import { RiCloseFill } from "react-icons/ri"; // CHANGED: Added close icon import
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

      {/* CHANGED: Added full screen modal dialog */}
      <Dialog
        open={fullscreenImage !== null}
        onClose={handleCloseFullscreen}
        className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/90 p-4">
          <DialogPanel className="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
            {/* CHANGED: Close button */}
            <button
              type="button"
              onClick={handleCloseFullscreen}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close">
              <RiCloseFill size={32} />
            </button>

            {/* CHANGED: Full screen image display */}
            {fullscreenImage && (
              <Image
                src={fullscreenImage}
                alt="Fullscreen view"
                width={1920}
                height={1080}
                className="max-w-full max-h-full object-contain rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-md shadow-zinc-200/50"
              />
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}