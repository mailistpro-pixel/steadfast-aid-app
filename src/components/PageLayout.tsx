import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  children: React.ReactNode;
  urgent?: boolean;
}

export function PageLayout({ 
  title, 
  subtitle, 
  showBack = true, 
  children,
  urgent = false 
}: PageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-bar">
        <div className="container flex items-center gap-3">
          {showBack && (
            <Button 
              variant="back" 
              size="icon" 
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}
          <div className="flex-1 min-w-0">
            <h1 className={urgent ? "text-primary" : "text-foreground"}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-6 pb-24">
        {children}
      </main>
    </div>
  );
}
