import { PageLayout } from "@/components/PageLayout";
import { GuideStep, InfoBox, WarningBox } from "@/components/GuideElements";
import { 
  Battery, 
  Smartphone, 
  Lightbulb, 
  Thermometer, 
  Droplets, 
  UtensilsCrossed,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface CollapsibleSectionProps {
  icon: typeof Battery;
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

export default function Survival() {
  return (
    <PageLayout title="Survival Without Electricity" subtitle="Days or weeks without power">
      <div className="space-y-4">
        <InfoBox>
          <p>Power may be gone for days or weeks. These guides help you survive and stay safe.</p>
        </InfoBox>

        <CollapsibleSection icon={Battery} title="Extreme Battery Saving" defaultOpen>
          <div className="space-y-3">
            <GuideStep step={1}>
              <p className="font-semibold">Enable airplane mode immediately.</p>
              <p className="text-muted-foreground">Searching for signal drains battery fastest.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Reduce screen brightness to minimum readable level.</p>
              <p className="text-muted-foreground">Screen is the biggest power consumer.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Turn off all notifications.</p>
              <p className="text-muted-foreground">Each notification wakes the screen.</p>
            </GuideStep>
            
            <GuideStep step={4}>
              <p className="font-semibold">Delete or disable all unnecessary apps.</p>
              <p className="text-muted-foreground">Social media, games, anything not survival-related.</p>
            </GuideStep>
            
            <GuideStep step={5}>
              <p className="font-semibold">Use phone only when necessary.</p>
              <p className="text-muted-foreground">Set specific times to check. Otherwise, keep it off.</p>
            </GuideStep>

            <WarningBox>
              <p className="font-medium">Priority order for battery use:</p>
              <ol className="text-sm mt-2 space-y-1">
                <li>1. Emergency calls (if signal exists)</li>
                <li>2. Reading survival information</li>
                <li>3. Brief flashlight use</li>
                <li>4. Checking time</li>
              </ol>
            </WarningBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Smartphone} title="Phone as Survival Tool">
          <div className="space-y-3">
            <GuideStep>
              <p className="font-semibold">Flashlight</p>
              <p className="text-muted-foreground">Use sparingly. Screen on minimum brightness uses less than flashlight.</p>
            </GuideStep>
            
            <GuideStep>
              <p className="font-semibold">Mirror for signaling</p>
              <p className="text-muted-foreground">Phone screen can reflect sunlight to signal rescuers.</p>
            </GuideStep>
            
            <GuideStep>
              <p className="font-semibold">Compass (if app works offline)</p>
              <p className="text-muted-foreground">Some phones have built-in compass that works without internet.</p>
            </GuideStep>
            
            <GuideStep>
              <p className="font-semibold">Camera for documentation</p>
              <p className="text-muted-foreground">Record injuries, damage, location markers. May be important later.</p>
            </GuideStep>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Lightbulb} title="Light Without Electricity">
          <div className="space-y-3">
            <GuideStep>
              <p className="font-semibold">Candles</p>
              <p className="text-muted-foreground">Most efficient. Keep away from flammable materials.</p>
            </GuideStep>
            
            <GuideStep>
              <p className="font-semibold">Oil lamps</p>
              <p className="text-muted-foreground">Any cooking oil in container with cotton wick works.</p>
            </GuideStep>
            
            <GuideStep>
              <p className="font-semibold">Reflectors</p>
              <p className="text-muted-foreground">Mirrors, foil behind candles multiply light.</p>
            </GuideStep>

            <WarningBox>
              <p className="font-medium">Fire safety</p>
              <p className="text-sm">Never leave flames unattended. Keep water nearby.</p>
            </WarningBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Thermometer} title="Heat and Cold Survival">
          <div className="space-y-3">
            <p className="font-semibold text-foreground">If cold:</p>
            <GuideStep>
              <p className="text-muted-foreground">Layer clothing. Multiple thin layers trap heat better than one thick layer.</p>
            </GuideStep>
            <GuideStep>
              <p className="text-muted-foreground">Stay in smallest room. Close doors to unused areas. Body heat warms small spaces.</p>
            </GuideStep>
            <GuideStep>
              <p className="text-muted-foreground">Share body heat with others. Huddling together is effective.</p>
            </GuideStep>

            <p className="font-semibold text-foreground mt-4">If hot:</p>
            <GuideStep>
              <p className="text-muted-foreground">Stay in shade. Wet cloth on neck and wrists cools blood.</p>
            </GuideStep>
            <GuideStep>
              <p className="text-muted-foreground">Rest during hottest hours. Be active at dawn and dusk.</p>
            </GuideStep>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Droplets} title="Water Storage & Purification">
          <div className="space-y-3">
            <GuideStep step={1}>
              <p className="font-semibold">Fill every container immediately.</p>
              <p className="text-muted-foreground">Bathtubs, pots, bottles. Water service may stop.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Purification: Boiling is safest.</p>
              <p className="text-muted-foreground">Rolling boil for 1 minute kills most pathogens.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">If can't boil: use bleach.</p>
              <p className="text-muted-foreground">2 drops unscented bleach per liter. Wait 30 minutes.</p>
            </GuideStep>
            
            <WarningBox>
              <p className="font-medium">Never drink:</p>
              <p className="text-sm">Flood water, water with chemical smell, water with color or particles.</p>
            </WarningBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={UtensilsCrossed} title="Food Rationing">
          <div className="space-y-3">
            <GuideStep step={1}>
              <p className="font-semibold">Inventory all food immediately.</p>
              <p className="text-muted-foreground">Know exactly what you have.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Eat perishables first.</p>
              <p className="text-muted-foreground">Refrigerated food spoils quickly without power.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Ration for unknown duration.</p>
              <p className="text-muted-foreground">Assume it will be longer than you think. Cut portions by half initially.</p>
            </GuideStep>
            
            <GuideStep step={4}>
              <p className="font-semibold">Prioritize calories over taste.</p>
              <p className="text-muted-foreground">Oils, nuts, grains have most energy per volume.</p>
            </GuideStep>
          </div>
        </CollapsibleSection>
      </div>
    </PageLayout>
  );
}
