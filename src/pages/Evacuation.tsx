import { PageLayout } from "@/components/PageLayout";
import { GuideStep, InfoBox, WarningBox, SafeBox } from "@/components/GuideElements";
import { 
  AlertOctagon, 
  MapPin, 
  Backpack, 
  Shield,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface CollapsibleSectionProps {
  icon: typeof AlertOctagon;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ icon: Icon, title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-3 bg-card active:bg-muted text-left"
      >
        <div className="p-2 rounded-lg bg-muted">
          <Icon className="w-5 h-5 text-secondary" />
        </div>
        <span className="flex-1 font-semibold">{title}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-2 border-t border-border bg-background">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Evacuation() {
  return (
    <PageLayout title="Evacuation & Movement" subtitle="Safety in conflict zones">
      <div className="space-y-4">
        <WarningBox>
          <p className="font-medium">This guide is for civilian safety only.</p>
          <p className="text-sm">No military tactics. No weapons advice.</p>
        </WarningBox>

        <CollapsibleSection icon={AlertOctagon} title="When NOT to Flee" defaultOpen>
          <div className="space-y-3">
            <InfoBox>
              <p className="font-medium">Sometimes staying is safer than moving.</p>
            </InfoBox>

            <p className="font-semibold text-warning">Do NOT attempt to flee when:</p>
            <ul className="space-y-2 ml-4 mt-2">
              <li className="text-muted-foreground">• Active fighting is happening on your route</li>
              <li className="text-muted-foreground">• Aircraft or drones are overhead</li>
              <li className="text-muted-foreground">• You don't know which areas are controlled by whom</li>
              <li className="text-muted-foreground">• It's dark and you don't know the area</li>
              <li className="text-muted-foreground">• You have seriously injured people who can't move</li>
            </ul>

            <SafeBox>
              <p className="font-medium">Wait for:</p>
              <p className="text-sm">A quiet period of at least 2 hours, daylight, and confirmed safe routes if possible.</p>
            </SafeBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={MapPin} title="Moving Safely in Cities">
          <div className="space-y-3">
            <GuideStep step={1}>
              <p className="font-semibold">Move during quiet periods.</p>
              <p className="text-muted-foreground">Early morning often has less activity. Listen before moving.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Stay close to walls.</p>
              <p className="text-muted-foreground">Never walk in the middle of streets. Walls provide cover.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Avoid open spaces.</p>
              <p className="text-muted-foreground">Plazas, parks, wide intersections are dangerous. Cross quickly if necessary.</p>
            </GuideStep>
            
            <GuideStep step={4}>
              <p className="font-semibold">Look before each corner.</p>
              <p className="text-muted-foreground">Peer around carefully. Never rush around blind corners.</p>
            </GuideStep>
            
            <GuideStep step={5}>
              <p className="font-semibold">Move in small groups, spread out.</p>
              <p className="text-muted-foreground">Clusters attract attention. Keep 5-10 meters between people.</p>
            </GuideStep>

            <WarningBox>
              <p className="font-medium">Avoid these locations:</p>
              <p className="text-sm">Military bases, government buildings, communication towers, bridges, power stations.</p>
            </WarningBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Backpack} title="What to Carry When Evacuating">
          <div className="space-y-3">
            <p className="font-semibold text-foreground">Essential (carry always):</p>
            <ul className="space-y-1 ml-4 mb-4">
              <li className="text-muted-foreground">• Identity documents</li>
              <li className="text-muted-foreground">• Phone and charger</li>
              <li className="text-muted-foreground">• Water (at least 1 liter)</li>
              <li className="text-muted-foreground">• Cash (small denominations)</li>
              <li className="text-muted-foreground">• Essential medications</li>
              <li className="text-muted-foreground">• List of emergency contacts</li>
            </ul>

            <p className="font-semibold text-foreground">If possible:</p>
            <ul className="space-y-1 ml-4 mb-4">
              <li className="text-muted-foreground">• Food (energy bars, dried fruit)</li>
              <li className="text-muted-foreground">• First aid supplies</li>
              <li className="text-muted-foreground">• Flashlight</li>
              <li className="text-muted-foreground">• Extra clothing layer</li>
              <li className="text-muted-foreground">• Plastic bags (waterproofing)</li>
            </ul>

            <InfoBox>
              <p className="font-medium">Pack light enough to run.</p>
              <p className="text-sm">If you can't run with your bag, you're carrying too much.</p>
            </InfoBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Shield} title="Crossing Checkpoints">
          <div className="space-y-3">
            <WarningBox>
              <p className="font-medium">Checkpoints are dangerous.</p>
              <p className="text-sm">Approach with extreme caution.</p>
            </WarningBox>

            <GuideStep step={1}>
              <p className="font-semibold">Slow down well in advance.</p>
              <p className="text-muted-foreground">Sudden approaches appear threatening.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Keep hands visible at all times.</p>
              <p className="text-muted-foreground">Windows down. Hands on steering wheel or raised if walking.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Follow all instructions immediately.</p>
              <p className="text-muted-foreground">Do not argue. Do not make sudden movements.</p>
            </GuideStep>
            
            <GuideStep step={4}>
              <p className="font-semibold">Speak calmly and clearly.</p>
              <p className="text-muted-foreground">State you are a civilian. Answer questions simply.</p>
            </GuideStep>
            
            <GuideStep step={5}>
              <p className="font-semibold">Have documents ready but wait to be asked.</p>
              <p className="text-muted-foreground">Reaching into pockets unexpectedly is dangerous.</p>
            </GuideStep>

            <SafeBox>
              <p className="font-medium">You are a civilian. You have done nothing wrong.</p>
              <p className="text-sm">Stay calm. Cooperate. Most checkpoints are routine.</p>
            </SafeBox>
          </div>
        </CollapsibleSection>
      </div>
    </PageLayout>
  );
}
