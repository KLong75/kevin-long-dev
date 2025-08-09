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
import { 
  TbBrandTypescript, 
  TbFileTypeSql, 
} from "react-icons/tb";
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
  SiApollographql
} from "react-icons/si";
import { HiOutlineCommandLine } from "react-icons/hi2";

const ICONS = [
  { component: SiApollographql, color: "#fff" },
  { component: NextAuthIcon, color: "#000000" },
  { component: ColdFusionIcon, color: "#7badff" },
  { component: RiNextjsLine, color: "#000000" },
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
  { component: SiGithub, color: "#000000" },
  { component: SiMongodb, color: "#47a248" },
  { component: SiExpress, color: "#000000" },
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
  { component: RiVercelFill, color: "#000000" },
  { component: RiNpmjsFill, color: "#cb3837" },
  { component: SiInsomnia, color: "#5851db" },
  { component: SiHeroku, color: "#430098" },
  { component: RiGitlabFill, color: "#e24329" },
  { component: SiMysql, color: "#4479ff" },
];

const ICON_SIZE = 48;
const ICON_COUNT = ICONS.length;
const SPEED = 2;

export default function PopcornIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);

  // Spread icons equally throughout the container on mount
  const positions = useRef(
    Array.from({ length: ICON_COUNT }, () => ({
      x: 0,
      y: 0,
      dx: (Math.random() - 0.5) * SPEED * 2,
      dy: (Math.random() - 0.5) * SPEED * 2,
    }))
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    // Calculate grid for even distribution
    const cols = Math.ceil(Math.sqrt(ICON_COUNT));
    const rows = Math.ceil(ICON_COUNT / cols);
    const xSpacing = (width - ICON_SIZE) / Math.max(cols - 1, 1);
    const ySpacing = (height - ICON_SIZE) / Math.max(rows - 1, 1);

    positions.current.forEach((pos, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      pos.x = col * xSpacing;
      pos.y = row * ySpacing;
    });

    // Set initial icon positions visually
    positions.current.forEach((pos, i) => {
      const icon = iconRefs.current[i];
      if (icon) {
        icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    });
  }, []);

  // Pop in icons one at a time
  useEffect(() => {
    if (visibleCount < ICON_COUNT) {
      const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 120);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount]);

  useEffect(() => {
    let animationId: number;

    function animate() {
      const container = containerRef.current;
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();

      positions.current.forEach((pos, i) => {
        if (i >= visibleCount) return; // Only animate visible icons
        pos.x += pos.dx;
        pos.y += pos.dy;

        // Bounce off walls
        if (pos.x < 0 || pos.x > width - ICON_SIZE) pos.dx *= -1;
        if (pos.y < 0 || pos.y > height - ICON_SIZE) pos.dy *= -1;

        // Clamp positions
        pos.x = Math.max(0, Math.min(pos.x, width - ICON_SIZE));
        pos.y = Math.max(0, Math.min(pos.y, height - ICON_SIZE));

        const icon = iconRefs.current[i];
        if (icon) {
          icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [visibleCount]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {ICONS.map(({ component: Icon, color }, i) => (
        <div
          key={i}
          ref={(el) => {
            iconRefs.current[i] = el;
          }}
          className={`absolute transition-opacity duration-300 ${
            i < visibleCount ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: 0,
            top: 0,
            width: ICON_SIZE,
            height: ICON_SIZE,
            pointerEvents: "none",
          }}>
          <Icon size={ICON_SIZE} color={color} />
        </div>
      ))}
    </div>
  );
}
