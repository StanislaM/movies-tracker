import Error from "@/src/components/error";
import { Card, CardContent } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";
import { getSession } from "@/src/features/auth/session";
import { convertMinutesToHours } from "@/src/lib/utils";
import { db } from "@/src/prisma/db";
import { Clock, Grid2x2, Play } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

type StatCardPops = {
  stat: string;
  title: string;
  icon: React.ReactNode;
};

const StatCard = async ({ icon, stat, title }: StatCardPops) => {
  return (
    <Card className="grow px-1 py-5">
      <CardContent>
        <div className="flex items-center gap-x-5">
          <span className="bg-accent flex items-center justify-center rounded-full p-3">
            {icon}
          </span>
          <div className="flex flex-col gap-y-1">
            <span className="font-serif text-2xl">{stat}</span>
            <h6 className="text-muted-foreground text-xs">{title}</h6>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PersonalStatsSkeleton = async () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Skeleton className="h-20 grow rounded-2xl" />
      <Skeleton className="h-20 grow rounded-2xl" />
      <Skeleton className="h-20 grow rounded-2xl" />
    </div>
  );
};

async function PersonalStatsContent() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  let groups = null;

  try {
    // Get media items grouped by status
    groups = await db.orm.public.MediaItem.where({ userId: session.userId })
      .groupBy("status")
      .aggregate((agg) => ({
        count: agg.count(),
        duration: agg.sum("duration"),
      }));
  } catch (err) {
    console.error(err);
    return <Error />;
  }

  // Stats calculation
  const stats = groups.reduce(
    (acc, group) => ({
      itemsCount: acc.itemsCount + group.count,
      totalDuration:
        acc.totalDuration +
        (group.status === "completed" ? group.duration || 0 : 0),
      watchedCount:
        acc.watchedCount + (group.status === "completed" ? group.count : 0),
    }),
    {
      itemsCount: 0,
      totalDuration: 0,
      watchedCount: 0,
    },
  );

  const iconColor = "var(--primary)";

  const convertedDuration = convertMinutesToHours(stats.totalDuration);

  return (
    <div className="flex flex-wrap gap-5">
      <StatCard
        title="Media items"
        stat={`${stats.itemsCount}`}
        icon={<Grid2x2 color={iconColor} />}
      />
      <StatCard
        title="Total views"
        stat={`${stats.watchedCount}`}
        icon={<Play color={iconColor} />}
      />
      <StatCard
        title="Time well spent"
        stat={`${convertedDuration.hours !== 0 ? convertedDuration.hours + "h" : convertedDuration.hours === 0 && convertedDuration.minutes === 0 ? "0h" : ""}${convertedDuration.minutes !== 0 ? convertedDuration.minutes + "m" : ""}`}
        icon={<Clock color={iconColor} />}
      />
    </div>
  );
}

export default async function PersonalStats() {
  return (
    <Suspense fallback={<PersonalStatsSkeleton />}>
      <PersonalStatsContent />
    </Suspense>
  );
}
