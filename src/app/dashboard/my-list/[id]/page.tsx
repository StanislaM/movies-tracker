import { getMedia } from "@/src/features/media/media-item";

type MediaItemPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MediaItemPage({ params }: MediaItemPageProps) {
  const { id } = await params;

  const res = await getMedia(id);

  if (!res.isOk || !res.data) {
    return <div>Something went wrong</div>;
  }

  const mediaItem = res.data;

  return <div>{mediaItem.title}</div>;
}
