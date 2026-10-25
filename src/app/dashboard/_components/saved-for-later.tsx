import MediaItemCard from "@/src/components/media-item-card";
import { Genre } from "@/src/types";

export default async function SavedForLater() {
  // HARDCODED DATA===================
  const savedItems: {
    id: string;
    name: string;
    releaseYear: number;
    genre: Genre;
    imgUrl: string | null;
    watchUrl?: string;
  }[] = [
    {
      id: "123456",
      name: "The ",
      releaseYear: 2024,
      genre: "drama",
      imgUrl: null,
      watchUrl: "https://yummyanime.tv/index-6",
    },
    {
      id: "123457",
      name: "The Quiet Hour",
      releaseYear: 2024,
      genre: "drama",
      imgUrl:
        "https://images.pexels.com/photos/39886343/pexels-photo-39886343.jpeg",
      watchUrl: "https://yummyanime.tv/index-6",
    },
    {
      id: "123458",
      name: "The Quiet Hour",
      releaseYear: 2024,
      genre: "drama",
      imgUrl: null,
    },
    {
      id: "123459",
      name: "The Quiet Hour",
      releaseYear: 2024,
      genre: "drama",
      imgUrl: null,
    },
    {
      id: "123450",
      name: "The Quiet Hour",
      releaseYear: 2024,
      genre: "drama",
      imgUrl: null,
    },
  ];
  // HARDCODED DATA===================

  return (
    <>
      <div className="mb-4">
        <h3 className="mb-1 font-serif text-4xl">Saved for later</h3>
        <span className="text-muted-foreground text-xs">
          5 films waiting for the right night
        </span>
      </div>

      {/* Wrapper */}
      <div className="flex gap-x-5">
        {savedItems.map((item, i) => (
          <MediaItemCard key={i} {...item} className="w-[calc(20%-16px)]" />
        ))}
      </div>
    </>
  );
}
