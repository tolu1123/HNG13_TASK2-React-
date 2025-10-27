
import { Badge } from "@/components/ui/badge";

const statusColors = {
  open: "#36b37e",
  "in-progress": "#ffab00",
  closed: "#6b778c",
};

export default function StatusBadge ({ status }: {
  status: "open" | "in-progress" | "closed"
}) {
  const color = statusColors[status] || "#000";

  return (
    <Badge
      style={{ backgroundColor: color, color: "#fff" }}
      className="text-xs font-semibold px-2 py-1 rounded-full capitalize"
    >
      {status}
    </Badge>
  );
};
