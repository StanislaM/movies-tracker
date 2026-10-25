import { Card, CardContent } from "@/src/components/ui/card";
import { Clock, Grid2x2, Play } from "lucide-react";

type StatCardPops = {
  stat: string;
  title: string;
  icon: React.ReactNode;
};

const StatCard = async ({ icon, stat, title }: StatCardPops) => {
  return (
    <Card className="w-full px-1 py-5">
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

export default async function PersonalStats() {
  // HARDCODED DATA==============
  const stats = {
    watched: 12,
    timeSpent: 26.3,
    collectionsCount: 3,
  };
  const iconColor = "var(--primary)";

  return (
    <div className="flex gap-x-5">
      <StatCard
        title="Total views"
        stat={`${stats.watched}`}
        icon={<Clock color={iconColor} />}
      />
      <StatCard
        title="Time well spent"
        stat={`${stats.timeSpent}h`}
        icon={<Play color={iconColor} />}
      />
      <StatCard
        title="Collections"
        stat={`${stats.collectionsCount}`}
        icon={<Grid2x2 color={iconColor} />}
      />
    </div>
  );
}
