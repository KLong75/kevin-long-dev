// import from next
import { connection } from "next/server";

export const metadata = {
  title: "Kevin Long | About",
  description:
    "About page for Kevin Long, a full stack developer.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  await connection();
  return (
    <div className="flex flex-1">
      <div className="w-full mt-12 lg:mt-18 3xl:mt-24">
        <h2 className="text-2xl lg:text-4xl font-bold text-center my-8 text-green-500 text-shadow-black-background-black">
          About Me
        </h2>
        <div className="w-full "></div>
      </div>
    </div>
  );
}
