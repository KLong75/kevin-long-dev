import { technicalSkills } from "@/lib/technical-skills";

export default function TechTriangleTextDisplay() {
  // Group skills into arrays of 4 or 5
  const groupSize = 5;
  const skillGroups: string[][] = [];
  for (let i = 0; i < technicalSkills.length; i += groupSize) {
    skillGroups.push(
      technicalSkills
        .slice(i, i + groupSize)
        .map((skill) => skill.name)
    );
  }

  // Opacity values for fading effect
  const baseOpacity = 1;
  const fadeStep = 0.13; // Adjust for faster/slower fade
  const minOpacity = 0.15;

  return (
    <div className="w-full flex flex-col items-center text-green-500 font-mono text-base md:text-lg select-none">
      {skillGroups.map((group, idx) => {
        // Calculate opacity for this line
        const opacity = Math.max(baseOpacity - idx * fadeStep, minOpacity);
        return (
          <div
            key={idx}
            style={{ opacity }}
            className="mb-1 whitespace-nowrap"
          >
            {group.join(" | ")}
          </div>
        );
      })}
    </div>
  );
}