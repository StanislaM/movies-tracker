"use client";

import { Ghost } from "lucide-react";

export default function NoItems() {
  return (
    <div className="text-muted-foreground flex items-center gap-x-1 font-serif text-2xl">
      No items <Ghost />
    </div>
  );
}
