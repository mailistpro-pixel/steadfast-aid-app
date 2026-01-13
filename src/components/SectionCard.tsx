import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SectionCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  urgent?: boolean;
}

export function SectionCard({ 
  to, 
  icon: Icon, 
  title, 
  description, 
  urgent = false 
}: SectionCardProps) {
  return (
    <Button
      variant={urgent ? "urgent" : "section"}
      size="full"
      asChild
    >
      <Link to={to} className="flex items-start gap-4 w-full">
        <div className={`p-3 rounded-lg ${urgent ? 'bg-primary/20' : 'bg-muted'}`}>
          <Icon className={`w-6 h-6 ${urgent ? 'text-primary' : 'text-foreground'}`} />
        </div>
        <div className="flex-1 text-left">
          <h2 className={`font-semibold ${urgent ? 'text-primary text-xl' : 'text-lg'}`}>
            {title}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {description}
          </p>
        </div>
      </Link>
    </Button>
  );
}
