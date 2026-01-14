import react from "react";
import { Badge } from "../ui/badge";

export default function MainBadge({ heading }) {
  return (
    <>
      <Badge
        variant="outline"
        className="font-ui text-[15px] bg-null  text-accent border border-accent font-medium gap-2 px-5 py-1 rounded-full uppercase mb-4 "
      >
        {heading}
      </Badge>
    </>
  );
}
