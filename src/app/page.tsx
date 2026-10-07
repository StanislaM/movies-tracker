import { ChevronRight } from "lucide-react";
import Logo from "../components/logo";
import { Button } from "../components/ui/button";

const WelcomeCard = ({
  number,
  subtitle,
  title,
}: {
  number: number;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="bg-background hover:bg-secondary flex w-55 flex-col rounded-lg border p-4 shadow-2xl transition">
      <span className="text-primary mb-5 text-xs font-bold tracking-widest">
        0{number}
      </span>
      <h5 className="mb-2 text-sm">{title}</h5>
      <h6 className="text-muted-foreground text-xs">{subtitle}</h6>
    </div>
  );
};

const welcomeCards = [
  {
    title: "Save for later",
    subtitle: "Never lose a recommendation.",
  },
  {
    title: "Pick up anytime",
    subtitle: "Track exactly where you left off.",
  },
  {
    title: "Make it yours",
    subtitle: "Build lists for every mood.",
  },
];

export default async function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[url(/bg-welcome.webp)] bg-position-[20%] sm:bg-left">
      <div className="container mx-auto flex grow flex-col px-6 sm:px-0">
        <header className="isolate flex items-center justify-between py-10">
          <Logo size="xl" />
          <Button
            size="lg"
            className="shadow-accent px-4 font-semibold shadow-2xl"
          >
            Sign Up
          </Button>
        </header>

        <section className="flex grow flex-col items-start justify-center pb-15">
          <span className="text-primary before:bg-primary relative mb-2 flex items-center gap-x-2 text-xs font-bold tracking-widest uppercase before:block before:h-0.5 before:w-8">
            Your personal film companion
          </span>
          <h1 className="mb-5 max-w-100 font-serif text-5xl sm:max-w-185 sm:text-6xl md:text-8xl">
            Remember every story your love.
          </h1>
          <p className="text-muted-foreground mb-8 max-w-145">
            Keep track of what you&apos;re watching, save films for later, and
            build a library that feels entirely yours.
          </p>
          <div className="mb-16 flex w-full flex-col items-center gap-x-4 gap-y-2 sm:flex-row">
            <Button className="group relative gap-x-3 px-5 py-6 text-lg">
              Start tracking
              <ChevronRight className="group-hover:text-secondary absolute top-0 right-6 size-9 h-full opacity-0 transition duration-300 group-hover:opacity-100" />
              <ChevronRight className="group-hover:text-secondary size-6 transition delay-75 duration-300 group-hover:scale-150" />
              <ChevronRight className="group-hover:text-secondary absolute top-0 right-1 size-9 h-full opacity-0 transition delay-75 duration-300 group-hover:opacity-100" />
            </Button>
            <span className="text-muted-foreground text-xs">
              Free, private, and made for movie nights.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            {welcomeCards.map((card, i) => (
              <WelcomeCard
                key={i}
                number={i + 1}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
