"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const words = [
    { text: "Book" },
    { text: "sessions" },
    { text: "with" },
    { text: "top" },
    { text: "coders.", className: "text-blue-500 dark:text-blue-800" },
  ];
  const placeholders = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Jack"
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Search Query: " + searchQuery);
  };

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar hidden={false} />

      <section className="mx-auto my-auto flex flex-col items-center max-w-6xl px-4 py-32 sm:py-40 text-center z-50">
        <div className="mb-6">
          <TypewriterEffectSmooth words={words} />
        </div>

        <p className="text-slate-600 dark:text-slate-900 mb-6 max-w-2xl mx-auto text-lg sm:text-xl">
          Connect with top coding influencers for personalized 1-on-1 sessions to level up your skills and get expert guidance.
        </p>

        <div className="w-full max-w-lg">
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>

        <button className="z-50 w-fit mt-6 sm:mt-8 mx-auto justify-center relative inline-flex h-12 sm:h-14 overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-white bg-[conic-gradient(from_120deg,#647DEE,#7F53AC,#E94057,#F27121,#647DEE)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 sm:px-8 py-1 text-sm sm:text-base font-medium text-slate-900 backdrop-blur-3xl">
            Book a Session Now
          </span>
        </button>
      </section>

      <BackgroundBeams className="mt-16 sm:mt-28 w-full md:max-w-7xl md:rounded-2xl bg-conic-180 dark:from-indigo-950 from-indigo-600 dark:via-indigo-400 via-indigo-100 to-indigo-600 dark:to-indigo-950" />
    </section>
  );
}
