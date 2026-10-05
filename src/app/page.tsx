import Image from "next/image";
import { Button } from "../components/ui/button";

export default async function Home() {
  return (
    <div className="text-5xl min-h-screen flex flex-col justify-center items-center gap-y-2">
      Hello
      <Image
        src="/logo.svg"
        alt="logo"
        aria-label="logo"
        width={100}
        height={100}
        className="w-10"
      />
      <Button size="default" variant="default">
        Click me
      </Button>
    </div>
  );
}
