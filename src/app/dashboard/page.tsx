import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import Greetings from "./_components/greetings";
import ContinueWatching from "./_components/continue-watching";
import { AgeRating, MediaItemType } from "@/src/types";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // HARDCODED DATA==============
  const continueWatchingItem = {
    id: "123456",
    releaseYear: 2026,
    type: "movie" as MediaItemType,
    duration: 67,
    ageRating: "PG" as AgeRating,
    name: "A Still Place",
    description:
      "A photographer returns to the remote lake of her childhood, where silence holds more than memory.",
    imgUrl:
      "https://images.pexels.com/photos/16268987/pexels-photo-16268987.jpeg",
    watchUrl: "https://yummyanime.tv/index-6",
  };
  // HARDCODED DATA==============

  return (
    <>
      {/* Greetings */}
      <section className="px-12 pt-12">
        <Greetings name={session.name} />
      </section>

      {/* Continue watching */}
      <section className="px-12 pt-9">
        <ContinueWatching {...continueWatchingItem} />
      </section>
    </>
  );
}
