"use client";

import { FaceSlightlyFrowning } from "lucide-react";

export default function Error() {
  return (
    <div className="text-muted-foreground flex items-center gap-x-1 font-serif text-2xl">
      Something went wrong <FaceSlightlyFrowning />
    </div>
  );
}
