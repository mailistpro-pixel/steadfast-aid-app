import { PageLayout } from "@/components/PageLayout";
import { InfoBox, SafeBox } from "@/components/GuideElements";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-3 bg-card active:bg-muted text-left"
      >
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

export default function Signals() {
  return (
    <PageLayout title="Emergency Signals" subtitle="Communicate without words">
      <div className="space-y-4">
        <InfoBox>
          <p>When voice or electronic communication fails, these signals can save your life.</p>
        </InfoBox>

        <CollapsibleSection title="SOS Signals" defaultOpen>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold text-primary text-xl text-center mb-2">• • • — — — • • •</p>
              <p className="text-center text-muted-foreground">SOS in Morse Code</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Using Light (flashlight or screen):</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li>• 3 short flashes</li>
                <li>• 3 long flashes</li>
                <li>• 3 short flashes</li>
                <li>• Pause and repeat</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Using Sound (tapping, whistle, voice):</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li>• 3 quick sounds</li>
                <li>• 3 longer sounds</li>
                <li>• 3 quick sounds</li>
                <li>• Pause and repeat</li>
              </ul>
            </div>

            <SafeBox>
              <p className="text-sm">Any pattern of 3 repeated signals is internationally recognized as a call for help.</p>
            </SafeBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Hand Signals">
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold mb-2">Universal "Help" Signal:</p>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Open palm facing outward</li>
                <li>2. Tuck thumb into palm</li>
                <li>3. Close fingers over thumb (making a fist)</li>
              </ol>
              <p className="text-sm mt-2">This signal is recognized internationally as a silent call for help.</p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold mb-2">Need Medical Help:</p>
              <p className="text-muted-foreground">Cross your arms in an X over your chest.</p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold mb-2">I'm Okay / Don't Need Help:</p>
              <p className="text-muted-foreground">Form a circle with thumb and forefinger. Other fingers up.</p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold mb-2">Stop / Danger Ahead:</p>
              <p className="text-muted-foreground">Flat palm facing outward, arm extended.</p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Night Signaling with Phone">
          <div className="space-y-4">
            <InfoBox>
              <p className="font-medium">At night, your phone screen is visible from far away.</p>
            </InfoBox>

            <div className="space-y-3">
              <p className="font-semibold">To signal rescuers:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li>• Set screen to maximum brightness</li>
                <li>• Open a white/blank screen (notes app works)</li>
                <li>• Wave slowly in large arcs</li>
                <li>• Flash on/off in SOS pattern if possible</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-semibold">To avoid detection:</p>
              <ul className="space-y-2 ml-4 text-muted-foreground">
                <li>• Minimum brightness only</li>
                <li>• Shield screen with hand or clothing</li>
                <li>• Keep phone inside garment when not in use</li>
                <li>• Red filter reduces visibility (some phones have this)</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Ground Signals for Aircraft">
          <div className="space-y-4">
            <InfoBox>
              <p>If you need rescue from the air, create large visible symbols.</p>
            </InfoBox>

            <div className="space-y-3">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-4xl text-center text-primary mb-2">V</p>
                <p className="text-center text-muted-foreground">"Require Assistance"</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-4xl text-center text-primary mb-2">X</p>
                <p className="text-center text-muted-foreground">"Require Medical Help"</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-4xl text-center text-primary mb-2">I</p>
                <p className="text-center text-muted-foreground">"Require Supplies"</p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-4xl text-center text-primary mb-2">→</p>
                <p className="text-center text-muted-foreground">"Travelling This Direction"</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              Make symbols at least 3 meters (10 feet) across using rocks, clothing, branches, or anything contrasting with ground.
            </p>
          </div>
        </CollapsibleSection>
      </div>
    </PageLayout>
  );
}
