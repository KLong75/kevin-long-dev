// "use client";
// import { useEffect, useRef } from "react";
// import {
//   RiNextjsLine,
//   RiReactjsLine,
//   RiTailwindCssFill,
//   RiJavascriptLine,
//   RiHtml5Fill,
//   RiCss3Fill,
//   RiNodejsLine ,

// } from "react-icons/ri";
// import { TbBrandTypescript } from "react-icons/tb";
// import { SiHeadlessui } from "react-icons/si";
// import { TbFileTypeSql } from "react-icons/tb";
// import { SiGit, SiGithub, SiMongodb, SiExpress, SiMui } from "react-icons/si";
// import { HiOutlineCommandLine } from "react-icons/hi2";

// const ICONS = [
//   { component: RiNextjsLine, color: "#000" },
//   { component: RiReactjsLine, color: "#61dafb" },
//   { component: RiTailwindCssFill, color: "#06b6d4" },
//   { component: RiJavascriptLine, color: "#f7df1e" },
//   { component: TbBrandTypescript, color: "#3178c6" },
//   { component: RiHtml5Fill, color: "#e34f26" },
//   { component: RiCss3Fill, color: "#1572b6" },
//   { component: RiNodejsLine, color: "#8cc84b" },
//   { component: SiHeadlessui, color: "#4f46e5" },
//   { component: TbFileTypeSql, color: "#003b57" },
//   { component: SiGit, color: "#f05032" },
//   { component: SiGithub, color: "#181717" },
//   { component: SiMongodb, color: "#47a248" },
//   { component: SiExpress, color: "#000000" },
//   { component: HiOutlineCommandLine, color: "#f7df1e" },
//   { component: SiMui, color: "#007fff" }
// ];

// const ICON_SIZE = 48;
// const ICON_COUNT = ICONS.length;
// const SPEED = 2;

// export default function PopcornIcons() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const positions = useRef(
//     Array.from({ length: ICON_COUNT }, () => ({
//       x: Math.random() * 400,
//       y: Math.random() * 200,
//       dx: (Math.random() - 0.5) * SPEED * 2,
//       dy: (Math.random() - 0.5) * SPEED * 2,
//     }))
//   );

//   useEffect(() => {
//     let animationId: number;

//     function animate() {
//       const container = containerRef.current;
//       if (!container) return;
//       const { width, height } = container.getBoundingClientRect();

//       positions.current.forEach((pos, i) => {
//         pos.x += pos.dx;
//         pos.y += pos.dy;

//         // Bounce off walls
//         if (pos.x < 0 || pos.x > width - ICON_SIZE) pos.dx *= -1;
//         if (pos.y < 0 || pos.y > height - ICON_SIZE) pos.dy *= -1;

//         // Clamp positions
//         pos.x = Math.max(0, Math.min(pos.x, width - ICON_SIZE));
//         pos.y = Math.max(0, Math.min(pos.y, height - ICON_SIZE));

//         const icon = iconRefs.current[i];
//         if (icon) {
//           icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//         }
//       });

//       animationId = requestAnimationFrame(animate);
//     }

//     animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-80 bg-neutral-600 overflow-hidden rounded-2xl"
//       style={{ minHeight: 320 }}>
//       {ICONS.map(({ component: Icon, color }, i) => (
//         <div
//           key={i}
//           ref={(el) => { iconRefs.current[i] = el; }}
//           className="absolute"
//           style={{
//             left: 0,
//             top: 0,
//             width: ICON_SIZE,
//             height: ICON_SIZE,
//             pointerEvents: "none",
//           }}>
//           <Icon size={ICON_SIZE} color={color} />
//         </div>
//       ))}
//     </div>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";
// import { ColdFusionIcon } from "./cold-fusion-icon";
// import { NextAuthIcon } from "./next-auth-icon";
// import {
//   RiNextjsLine,
//   RiReactjsLine,
//   RiTailwindCssFill,
//   RiJavascriptLine,
//   RiHtml5Fill,
//   RiCss3Fill,
//   RiNodejsLine,
//   RiBootstrapFill,
//   RiVercelFill,
//   RiNpmjsFill,
//   RiGitlabFill,
// } from "react-icons/ri";
// import { 
//   TbBrandTypescript, 
//   TbFileTypeSql, 
// } from "react-icons/tb";
// import {
//   SiGit,
//   SiGithub,
//   SiMongodb,
//   SiExpress,
//   SiMui,
//   SiPython,
//   SiHandlebarsdotjs,
//   SiJquery,
//   SiGoogletagmanager,
//   SiGoogleanalytics,
//   SiGooglesearchconsole,
//   SiSequelize,
//   SiInsomnia,
//   SiHeroku,
//   SiMysql,
//   SiHeadlessui,
//   SiApollographql
// } from "react-icons/si";
// import { HiOutlineCommandLine } from "react-icons/hi2";

// const ICONS = [
//   { component: SiApollographql, color: "#fff" },
//   { component: NextAuthIcon, color: "#000000" },
//   { component: ColdFusionIcon, color: "#7badff" },
//   { component: RiNextjsLine, color: "#000000" },
//   { component: RiReactjsLine, color: "#61dafb" },
//   { component: RiTailwindCssFill, color: "#06b6d4" },
//   { component: RiJavascriptLine, color: "#f7df1e" },
//   { component: TbBrandTypescript, color: "#3178c6" },
//   { component: RiHtml5Fill, color: "#e34f26" },
//   { component: RiCss3Fill, color: "#1572b6" },
//   { component: RiNodejsLine, color: "#8cc84b" },
//   { component: SiHeadlessui, color: "#4f46e5" },
//   { component: TbFileTypeSql, color: "#003b57" },
//   { component: SiGit, color: "#f05032" },
//   { component: SiGithub, color: "#000000" },
//   { component: SiMongodb, color: "#47a248" },
//   { component: SiExpress, color: "#000000" },
//   { component: HiOutlineCommandLine, color: "#f7df1e" },
//   { component: SiMui, color: "#007fff" },
//   { component: SiPython, color: "#3776ab" },
//   { component: SiHandlebarsdotjs, color: "#f7931e" },
//   { component: SiJquery, color: "#0769ad" },
//   { component: SiGoogletagmanager, color: "#fbbc05" },
//   { component: SiGoogleanalytics, color: "#ea4335" },
//   { component: SiGooglesearchconsole, color: "#4285f4" },
//   { component: SiSequelize, color: "#52B0E8" },
//   { component: RiBootstrapFill, color: "#7952b3" },
//   { component: RiVercelFill, color: "#fff" },
//   { component: RiNpmjsFill, color: "#cb3837" },
//   { component: SiInsomnia, color: "#5851db" },
//   { component: SiHeroku, color: "#430098" },
//   { component: RiGitlabFill, color: "#e24329" },
//   { component: SiMysql, color: "#4479ff" },
// ];

// const ICON_SIZE = 48;
// const ICON_COUNT = ICONS.length;
// const SPEED = 2;

// export default function PopcornIcons() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [visibleCount, setVisibleCount] = useState(0);

//   // Spread icons equally throughout the container on mount
//   const positions = useRef(
//     Array.from({ length: ICON_COUNT }, () => ({
//       x: 0,
//       y: 0,
//       dx: (Math.random() - 0.5) * SPEED * 2,
//       dy: (Math.random() - 0.5) * SPEED * 2,
//     }))
//   );

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     const { width, height } = container.getBoundingClientRect();

//     // Calculate grid for even distribution
//     const cols = Math.ceil(Math.sqrt(ICON_COUNT));
//     const rows = Math.ceil(ICON_COUNT / cols);
//     const xSpacing = (width - ICON_SIZE) / Math.max(cols - 1, 1);
//     const ySpacing = (height - ICON_SIZE) / Math.max(rows - 1, 1);

//     positions.current.forEach((pos, i) => {
//       const col = i % cols;
//       const row = Math.floor(i / cols);
//       pos.x = col * xSpacing;
//       pos.y = row * ySpacing;
//     });

//     // Set initial icon positions visually
//     positions.current.forEach((pos, i) => {
//       const icon = iconRefs.current[i];
//       if (icon) {
//         icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//       }
//     });
//   }, []);

//   // Pop in icons one at a time
//   useEffect(() => {
//     if (visibleCount < ICON_COUNT) {
//       const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [visibleCount]);

//   useEffect(() => {
//     let animationId: number;

//     function animate() {
//       const container = containerRef.current;
//       if (!container) return;
//       const { width, height } = container.getBoundingClientRect();

//       positions.current.forEach((pos, i) => {
//         if (i >= visibleCount) return; // Only animate visible icons
//         pos.x += pos.dx;
//         pos.y += pos.dy;

//         // Bounce off walls
//         if (pos.x < 0 || pos.x > width - ICON_SIZE) pos.dx *= -1;
//         if (pos.y < 0 || pos.y > height - ICON_SIZE) pos.dy *= -1;

//         // Clamp positions
//         pos.x = Math.max(0, Math.min(pos.x, width - ICON_SIZE));
//         pos.y = Math.max(0, Math.min(pos.y, height - ICON_SIZE));

//         const icon = iconRefs.current[i];
//         if (icon) {
//           icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//         }
//       });

//       animationId = requestAnimationFrame(animate);
//     }

//     animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, [visibleCount]);

//   return (
//     <div ref={containerRef} className="relative w-full h-full overflow-hidden">
//       {ICONS.map(({ component: Icon, color }, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             iconRefs.current[i] = el;
//           }}
//           className={`absolute transition-opacity duration-300 ${
//             i < visibleCount ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             left: 0,
//             top: 0,
//             width: ICON_SIZE,
//             height: ICON_SIZE,
//             pointerEvents: "none",
//           }}>
//           <Icon size={ICON_SIZE} color={color} />
//         </div>
//       ))}
//     </div>
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from "react";
// import { ColdFusionIcon } from "./cold-fusion-icon";
// import { NextAuthIcon } from "./next-auth-icon";
// import {
//   RiNextjsLine,
//   RiReactjsLine,
//   RiTailwindCssFill,
//   RiJavascriptLine,
//   RiHtml5Fill,
//   RiCss3Fill,
//   RiNodejsLine,
//   RiBootstrapFill,
//   RiVercelFill,
//   RiNpmjsFill,
//   RiGitlabFill,
// } from "react-icons/ri";
// import { 
//   TbBrandTypescript, 
//   TbFileTypeSql, 
// } from "react-icons/tb";
// import {
//   SiGit,
//   SiGithub,
//   SiMongodb,
//   SiExpress,
//   SiMui,
//   SiPython,
//   SiHandlebarsdotjs,
//   SiJquery,
//   SiGoogletagmanager,
//   SiGoogleanalytics,
//   SiGooglesearchconsole,
//   SiSequelize,
//   SiInsomnia,
//   SiHeroku,
//   SiMysql,
//   SiHeadlessui,
//   SiApollographql
// } from "react-icons/si";
// import { HiOutlineCommandLine } from "react-icons/hi2";

// const ICONS = [
//   { component: SiApollographql, color: "#fff" },
//   { component: NextAuthIcon, color: "#000000" },
//   { component: ColdFusionIcon, color: "#7badff" },
//   { component: RiNextjsLine, color: "#000000" },
//   { component: RiReactjsLine, color: "#61dafb" },
//   { component: RiTailwindCssFill, color: "#06b6d4" },
//   { component: RiJavascriptLine, color: "#f7df1e" },
//   { component: TbBrandTypescript, color: "#3178c6" },
//   { component: RiHtml5Fill, color: "#e34f26" },
//   { component: RiCss3Fill, color: "#1572b6" },
//   { component: RiNodejsLine, color: "#8cc84b" },
//   { component: SiHeadlessui, color: "#4f46e5" },
//   { component: TbFileTypeSql, color: "#003b57" },
//   { component: SiGit, color: "#f05032" },
//   { component: SiGithub, color: "#000000" },
//   { component: SiMongodb, color: "#47a248" },
//   { component: SiExpress, color: "#000000" },
//   { component: HiOutlineCommandLine, color: "#f7df1e" },
//   { component: SiMui, color: "#007fff" },
//   { component: SiPython, color: "#3776ab" },
//   { component: SiHandlebarsdotjs, color: "#f7931e" },
//   { component: SiJquery, color: "#0769ad" },
//   { component: SiGoogletagmanager, color: "#fbbc05" },
//   { component: SiGoogleanalytics, color: "#ea4335" },
//   { component: SiGooglesearchconsole, color: "#4285f4" },
//   { component: SiSequelize, color: "#52B0E8" },
//   { component: RiBootstrapFill, color: "#7952b3" },
//   { component: RiVercelFill, color: "#fff" },
//   { component: RiNpmjsFill, color: "#cb3837" },
//   { component: SiInsomnia, color: "#5851db" },
//   { component: SiHeroku, color: "#430098" },
//   { component: RiGitlabFill, color: "#e24329" },
//   { component: SiMysql, color: "#4479ff" },
// ];

// const ICON_SIZE = 42;
// const ICON_COUNT = ICONS.length;
// const SPEED = 2;

// export default function PopcornIcons() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [visibleCount, setVisibleCount] = useState(0);

//   // Store both current and target positions
//   const positions = useRef(
//     Array.from({ length: ICON_COUNT }, () => ({
//       x: 0, y: 0, dx: 0, dy: 0, // current
//       tx: 0, ty: 0, // target
//       progress: 0, // 0=start, 1=arrived
//     }))
//   );

//   // On mount, set all icons' targets to a grid, but start at center
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     const { width, height } = container.getBoundingClientRect();
//     const centerX = width / 2 - ICON_SIZE / 2;
//     const centerY = height / 2 - ICON_SIZE / 2;

//     const cols = Math.ceil(Math.sqrt(ICON_COUNT));
//     const rows = Math.ceil(ICON_COUNT / cols);
//     const xSpacing = (width - ICON_SIZE) / Math.max(cols - 1, 1);
//     const ySpacing = (height - ICON_SIZE) / Math.max(rows - 1, 1);

//     positions.current.forEach((pos, i) => {
//       const col = i % cols;
//       const row = Math.floor(i / cols);
//       pos.x = centerX;
//       pos.y = centerY;
//       pos.tx = col * xSpacing;
//       pos.ty = row * ySpacing;
//       pos.progress = 0;
//     });

//     // Set initial icon positions visually
//     positions.current.forEach((pos, i) => {
//       const icon = iconRefs.current[i];
//       if (icon) {
//         icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//       }
//     });
//   }, []);

//   // Pop in icons one at a time
//   useEffect(() => {
//     if (visibleCount < ICON_COUNT) {
//       const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [visibleCount]);

//   // Animate icons from center to their target positions, then bounce
//   useEffect(() => {
//     let animationId: number;

//     function animate() {
//       const container = containerRef.current;
//       if (!container) return;
//       const { width, height } = container.getBoundingClientRect();

//       positions.current.forEach((pos, i) => {
//         if (i >= visibleCount) return;

//         // If not yet at target, animate outward
//         if (pos.progress < 1) {
//           pos.progress += 0.05; // speed of pop-out
//           if (pos.progress > 1) pos.progress = 1;
//           pos.x = pos.x + (pos.tx - pos.x) * pos.progress;
//           pos.y = pos.y + (pos.ty - pos.y) * pos.progress;
//         } else {
//           // After popping out, bounce as before
//           if (!pos.dx && !pos.dy) {
//             pos.dx = (Math.random() - 0.5) * SPEED * 2;
//             pos.dy = (Math.random() - 0.5) * SPEED * 2;
//           }
//           pos.x += pos.dx;
//           pos.y += pos.dy;
//           if (pos.x < 0 || pos.x > width - ICON_SIZE) pos.dx *= -1;
//           if (pos.y < 0 || pos.y > height - ICON_SIZE) pos.dy *= -1;
//           pos.x = Math.max(0, Math.min(pos.x, width - ICON_SIZE));
//           pos.y = Math.max(0, Math.min(pos.y, height - ICON_SIZE));
//         }

//         const icon = iconRefs.current[i];
//         if (icon) {
//           icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//         }
//       });

//       animationId = requestAnimationFrame(animate);
//     }

//     animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, [visibleCount]);

//   return (
//     <div ref={containerRef} className="relative w-full h-full overflow-hidden">
//       {ICONS.map(({ component: Icon, color }, i) => (
//         <div
//           key={i}
//           ref={(el) => { iconRefs.current[i] = el; }}
//           className={`absolute transition-opacity duration-40 ${
//             i < visibleCount ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             left: 0,
//             top: 0,
//             width: ICON_SIZE,
//             height: ICON_SIZE,
//             pointerEvents: "none",
//           }}>
//           <Icon size={ICON_SIZE} color={color} />
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import { ColdFusionIcon } from "./cold-fusion-icon";
import { NextAuthIcon } from "./next-auth-icon";
import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
  RiJavascriptLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsLine,
  RiBootstrapFill,
  RiVercelFill,
  RiNpmjsFill,
  RiGitlabFill,
} from "react-icons/ri";
import { TbBrandTypescript, TbFileTypeSql } from "react-icons/tb";
import {
  SiGit,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiMui,
  SiPython,
  SiHandlebarsdotjs,
  SiJquery,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSequelize,
  SiInsomnia,
  SiHeroku,
  SiMysql,
  SiHeadlessui,
  SiApollographql,
} from "react-icons/si";
import { HiOutlineCommandLine } from "react-icons/hi2";
const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;

const ICONS = [
  { component: SiApollographql, color: "#fff" },
  { component: NextAuthIcon, color: "#000000" },
  { component: ColdFusionIcon, color: "#7badff" },
  { component: RiNextjsLine, color: "#fff" },
  { component: RiReactjsLine, color: "#61dafb" },
  { component: RiTailwindCssFill, color: "#06b6d4" },
  { component: RiJavascriptLine, color: "#f7df1e" },
  { component: TbBrandTypescript, color: "#3178c6" },
  { component: RiHtml5Fill, color: "#e34f26" },
  { component: RiCss3Fill, color: "#1572b6" },
  { component: RiNodejsLine, color: "#8cc84b" },
  { component: SiHeadlessui, color: "#4f46e5" },
  { component: TbFileTypeSql, color: "#003b57" },
  { component: SiGit, color: "#f05032" },
  { component: SiGithub, color: "#fff" },
  { component: SiMongodb, color: "#47a248" },
  { component: SiExpress, color: "#fff" },
  { component: HiOutlineCommandLine, color: "#f7df1e" },
  { component: SiMui, color: "#007fff" },
  { component: SiPython, color: "#3776ab" },
  { component: SiHandlebarsdotjs, color: "#f7931e" },
  { component: SiJquery, color: "#0769ad" },
  { component: SiGoogletagmanager, color: "#fbbc05" },
  { component: SiGoogleanalytics, color: "#ea4335" },
  { component: SiGooglesearchconsole, color: "#4285f4" },
  { component: SiSequelize, color: "#52B0E8" },
  { component: RiBootstrapFill, color: "#7952b3" },
  { component: RiVercelFill, color: "#fff" },
  { component: RiNpmjsFill, color: "#cb3837" },
  { component: SiInsomnia, color: "#5851db" },
  { component: SiHeroku, color: "#430098" },
  { component: RiGitlabFill, color: "#e24329" },
  { component: SiMysql, color: "#4479ff" },
];

// const ICON_SIZE = 42;
const ICON_COUNT = ICONS.length;
const SPEED = 2;

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function PopcornIcons() {
  const [iconSize, setIconSize] = useState(42); // Default for SSR

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 1280) {
        setIconSize(52);
      } else if (window.innerWidth > 1024) {
        setIconSize(48);
      } else {
        setIconSize(42);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);

  // Store both current and target positions
  const positions = useRef(
    Array.from({ length: ICON_COUNT }, () => ({
      x: 0, y: 0, dx: 0, dy: 0, // current
      tx: 0, ty: 0, // target
      progress: 0, // 0=start, 1=arrived
    }))
  );

  // Store a randomized order for popping out
  const [popOrder] = useState(() => shuffle([...Array(ICON_COUNT).keys()]));

  // On mount, set all icons' targets to a grid, but start at center
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    const centerX = width / 2 - iconSize / 2;
    const centerY = height / 2 - iconSize / 2;

    const cols = Math.ceil(Math.sqrt(ICON_COUNT));
    const rows = Math.ceil(ICON_COUNT / cols);
    const xSpacing = (width - iconSize) / Math.max(cols - 1, 1);
    const ySpacing = (height - iconSize) / Math.max(rows - 1, 1);

    // Calculate grid positions and shuffle their assignment
    const gridPositions = Array.from({ length: ICON_COUNT }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        tx: col * xSpacing,
        ty: row * ySpacing,
      };
    });
    const shuffledGrid = shuffle(gridPositions);

    positions.current.forEach((pos, i) => {
      pos.x = centerX;
      pos.y = centerY;
      pos.tx = shuffledGrid[i].tx;
      pos.ty = shuffledGrid[i].ty;
      pos.progress = 0;
      pos.dx = 0;
      pos.dy = 0;
    });

    // Set initial icon positions visually
    positions.current.forEach((pos, i) => {
      const icon = iconRefs.current[i];
      if (icon) {
        icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    });
  }, []);

  // Pop in icons one at a time, in randomized order, more slowly
  useEffect(() => {
    if (visibleCount < ICON_COUNT) {
      const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 260); // slower pop
      return () => clearTimeout(timeout);
    }
  }, [visibleCount]);

  // Animate icons from center to their target positions, then bounce
  useEffect(() => {
    let animationId: number;

    function animate() {
      const container = containerRef.current;
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();

      positions.current.forEach((pos, i) => {
        // Only animate if this icon is visible (by pop order)
        if (popOrder.indexOf(i) >= visibleCount) return;

        // If not yet at target, animate outward
        if (pos.progress < 1) {
          pos.progress += 0.025; // slower pop-out
          if (pos.progress > 1) pos.progress = 1;
          pos.x = pos.x + (pos.tx - pos.x) * pos.progress;
          pos.y = pos.y + (pos.ty - pos.y) * pos.progress;
        } else {
          // After popping out, bounce as before
          if (!pos.dx && !pos.dy) {
            pos.dx = (Math.random() - 0.5) * SPEED * 2;
            pos.dy = (Math.random() - 0.5) * SPEED * 2;
          }
          pos.x += pos.dx;
          pos.y += pos.dy;
          if (pos.x < 0 || pos.x > width - iconSize) pos.dx *= -1;
          if (pos.y < 0 || pos.y > height - iconSize) pos.dy *= -1;
          pos.x = Math.max(0, Math.min(pos.x, width - iconSize));
          pos.y = Math.max(0, Math.min(pos.y, height - iconSize));
        }

        const icon = iconRefs.current[i];
        if (icon) {
          icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [visibleCount, popOrder]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {ICONS.map(({ component: Icon, color }, i) => (
        <div
          key={i}
          ref={(el) => {
            iconRefs.current[i] = el;
          }}
          className={`absolute transition-opacity duration-200 ${
            popOrder.indexOf(i) < visibleCount ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: 0,
            top: 0,
            width: iconSize,
            height: iconSize,
            pointerEvents: "none",
          }}
        >
          <Icon size={iconSize} color={color} style={{ filter: "drop-shadow(2px 2px 0 #000)" }}  />
        </div>
      ))}
    </div>
  );
}