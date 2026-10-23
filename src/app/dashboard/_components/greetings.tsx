"use client";

import { useDate } from "@/src/hooks/use-date";
import { convertToPartOfDay } from "@/src/lib/utils";

type GreetingsProps = {
  name: string;
};

export default function Greetings({ name }: GreetingsProps) {
  const currentDate = useDate();

  return (
    <div>
      {currentDate && (
        <span className="text-primary mb-2 block text-xs font-semibold tracking-widest uppercase">
          {currentDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
      )}
      <h2 className="font-serif text-6xl">
        Good {convertToPartOfDay(currentDate.getHours())}, {name.split(" ")[0]}
      </h2>
    </div>
  );
}
