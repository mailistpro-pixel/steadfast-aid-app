import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  Battery, 
  Heart, 
  Map, 
  Brain, 
  BookOpen,
  FileText,
  Radio,
  Shield
} from "lucide-react";
import { SectionCard } from "@/components/SectionCard";
import { Disclaimer } from "@/components/GuideElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 pt-8 pb-6">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              When The World Is War
            </h1>
          </div>
          <p className="text-muted-foreground">
            Survival guidance when everything else is gone.
          </p>
        </div>
      </header>

      {/* Main Navigation */}
      <main className="container pb-8 space-y-4">
        {/* RIGHT NOW - Emergency Section - Most Prominent */}
        <SectionCard
          to="/right-now"
          icon={AlertTriangle}
          title="RIGHT NOW"
          description="Immediate guidance during active danger. Bombing, gunfire, airstrikes."
          urgent
        />

        {/* Other Sections */}
        <SectionCard
          to="/survival"
          icon={Battery}
          title="Survival Without Electricity"
          description="Power saving, light, heat, water, food rationing."
        />

        <SectionCard
          to="/medical"
          icon={Heart}
          title="Medical & First Aid"
          description="War injury treatment. Bleeding, burns, shock, fractures."
        />

        <SectionCard
          to="/evacuation"
          icon={Map}
          title="Evacuation & Movement"
          description="Safe movement in conflict zones. Checkpoints, visibility."
        />

        <SectionCard
          to="/psychological"
          icon={Brain}
          title="Psychological Survival"
          description="Panic control, calming children, trauma awareness."
        />

        <SectionCard
          to="/simulation"
          icon={BookOpen}
          title="Survival Simulation"
          description="Text-based scenarios. Learn by making choices."
        />

        {/* Extra Features */}
        <div className="pt-4 border-t border-border">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Tools
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <Link 
              to="/notes"
              className="section-card flex flex-col items-center justify-center text-center p-4"
            >
              <FileText className="w-6 h-6 text-secondary mb-2" />
              <span className="font-medium">Personal Notes</span>
              <span className="text-xs text-muted-foreground mt-1">
                Contacts, medical info
              </span>
            </Link>

            <Link 
              to="/signals"
              className="section-card flex flex-col items-center justify-center text-center p-4"
            >
              <Radio className="w-6 h-6 text-secondary mb-2" />
              <span className="font-medium">Emergency Signals</span>
              <span className="text-xs text-muted-foreground mt-1">
                SOS, hand signals
              </span>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6">
          <Disclaimer />
        </div>
      </main>
    </div>
  );
};

export default Index;
