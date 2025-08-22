// import from next
import { connection } from "next/server";

export const metadata = {
  title: "Kevin Long | About",
  description: "About page for Kevin Long, a full stack developer.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  await connection();
  return (
    <div className="flex flex-1 justify-center text-green-500 text-shadow-black-background-black">
      <div className="w-full max-w-7xl mt-12 lg:mt-18 3xl:mt-24">
        <h2 className="text-2xl lg:text-4xl font-bold text-center my-8">
          About Me
        </h2>
          <div className="flex justify-center w-full px-12">
            <p className="w-200">
              With a background in the performing arts and education, I bring
              the passion and creativity of an artist, along with the patient
              persistence of a teacher, to my work as a developer.
            </p>
          </div>
        </div>

    </div>
  );
}
