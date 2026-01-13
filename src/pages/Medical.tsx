import { PageLayout } from "@/components/PageLayout";
import { GuideStep, InfoBox, WarningBox, Disclaimer } from "@/components/GuideElements";
import { 
  Droplet, 
  HeartPulse, 
  Flame as FlameIcon, 
  Bone, 
  ShieldAlert,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface CollapsibleSectionProps {
  icon: typeof Droplet;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  critical?: boolean;
}

function CollapsibleSection({ icon: Icon, title, children, defaultOpen = false, critical = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-xl overflow-hidden ${critical ? 'border-warning' : 'border-border'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center gap-3 text-left ${critical ? 'bg-warning/10' : 'bg-card'} active:bg-muted`}
      >
        <div className={`p-2 rounded-lg ${critical ? 'bg-warning/20' : 'bg-muted'}`}>
          <Icon className={`w-5 h-5 ${critical ? 'text-warning' : 'text-secondary'}`} />
        </div>
        <span className={`flex-1 font-semibold ${critical ? 'text-warning' : ''}`}>{title}</span>
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

export default function Medical() {
  return (
    <PageLayout title="Medical & First Aid" subtitle="War-specific injury treatment">
      <div className="space-y-4">
        <Disclaimer>
          This is basic guidance for when professional help is unavailable. 
          Seek real medical care as soon as possible.
        </Disclaimer>

        <CollapsibleSection icon={Droplet} title="Severe Bleeding Control" defaultOpen critical>
          <div className="space-y-3">
            <WarningBox>
              <p className="font-medium">Severe bleeding can kill in minutes.</p>
              <p className="text-sm">Act immediately. Do not wait.</p>
            </WarningBox>

            <GuideStep step={1} critical>
              <p className="font-semibold">Apply direct pressure.</p>
              <p className="text-muted-foreground">Use any clean cloth. Press hard directly on wound.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Do NOT remove the cloth.</p>
              <p className="text-muted-foreground">If blood soaks through, add more cloth on top. Keep pressing.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Elevate if possible.</p>
              <p className="text-muted-foreground">Raise the bleeding area above heart level.</p>
            </GuideStep>
            
            <GuideStep step={4}>
              <p className="font-semibold">For limbs: Consider tourniquet as last resort.</p>
              <p className="text-muted-foreground">Belt or cloth 2-3 inches above wound. Twist tight until bleeding stops. Note the time applied.</p>
            </GuideStep>

            <InfoBox>
              <p className="font-medium">Tourniquet warning:</p>
              <p className="text-sm">Only for life-threatening limb bleeding when pressure fails. May cause limb damage but saves life.</p>
            </InfoBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={HeartPulse} title="Shock Recognition">
          <div className="space-y-3">
            <InfoBox>
              <p className="font-medium">Shock kills even after the injury is treated.</p>
              <p className="text-sm">Recognize the signs. Act quickly.</p>
            </InfoBox>

            <p className="font-semibold text-foreground">Signs of shock:</p>
            <ul className="space-y-2 ml-4">
              <li className="text-muted-foreground">• Pale, cold, clammy skin</li>
              <li className="text-muted-foreground">• Rapid, weak pulse</li>
              <li className="text-muted-foreground">• Rapid, shallow breathing</li>
              <li className="text-muted-foreground">• Confusion or anxiety</li>
              <li className="text-muted-foreground">• Weakness, dizziness</li>
              <li className="text-muted-foreground">• Thirst</li>
            </ul>

            <p className="font-semibold text-foreground mt-4">Treatment:</p>
            <GuideStep step={1}>
              <p className="text-muted-foreground">Lay person flat on their back.</p>
            </GuideStep>
            <GuideStep step={2}>
              <p className="text-muted-foreground">Elevate legs 8-12 inches (unless leg/spine injury).</p>
            </GuideStep>
            <GuideStep step={3}>
              <p className="text-muted-foreground">Keep warm with blankets or clothing.</p>
            </GuideStep>
            <GuideStep step={4}>
              <p className="text-muted-foreground">Do NOT give food or drink.</p>
            </GuideStep>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={FlameIcon} title="Burn Treatment">
          <div className="space-y-3">
            <GuideStep step={1}>
              <p className="font-semibold">Cool the burn immediately.</p>
              <p className="text-muted-foreground">Cool (not cold) running water for 10-20 minutes.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Remove jewelry and tight clothing near burn.</p>
              <p className="text-muted-foreground">Swelling will make removal harder later.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Cover loosely with clean cloth.</p>
              <p className="text-muted-foreground">Do not wrap tightly. Do not pop blisters.</p>
            </GuideStep>

            <WarningBox>
              <p className="font-medium">Never apply:</p>
              <p className="text-sm">Ice, butter, toothpaste, or any home remedies. They cause more damage.</p>
            </WarningBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Bone} title="Broken Bones">
          <div className="space-y-3">
            <GuideStep step={1}>
              <p className="font-semibold">Immobilize the injury.</p>
              <p className="text-muted-foreground">Don't try to straighten. Keep it still.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Create a splint.</p>
              <p className="text-muted-foreground">Use sticks, boards, rolled newspapers. Pad with cloth. Secure above and below break.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Check circulation.</p>
              <p className="text-muted-foreground">Press fingernail/toenail. Color should return in 2 seconds. If not, splint is too tight.</p>
            </GuideStep>

            <WarningBox>
              <p className="font-medium">If bone is visible:</p>
              <p className="text-sm">Cover with clean damp cloth. Do NOT push back in. Immobilize and seek help urgently.</p>
            </WarningBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={ShieldAlert} title="Infection Prevention">
          <div className="space-y-3">
            <InfoBox>
              <p>In war conditions, infection is a major killer. Clean wounds are survival wounds.</p>
            </InfoBox>

            <GuideStep step={1}>
              <p className="font-semibold">Clean wounds with cleanest water available.</p>
              <p className="text-muted-foreground">Boiled and cooled water is best. Flush thoroughly.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Remove visible debris carefully.</p>
              <p className="text-muted-foreground">Use clean tweezers or cloth. Don't dig deep.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Keep wounds covered but not airtight.</p>
              <p className="text-muted-foreground">Change dressings daily if possible.</p>
            </GuideStep>

            <p className="font-semibold text-warning mt-4">Signs of infection (seek help immediately):</p>
            <ul className="space-y-2 ml-4">
              <li className="text-muted-foreground">• Increasing pain after 24 hours</li>
              <li className="text-muted-foreground">• Red streaks spreading from wound</li>
              <li className="text-muted-foreground">• Pus or foul smell</li>
              <li className="text-muted-foreground">• Fever</li>
              <li className="text-muted-foreground">• Swelling that increases</li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </PageLayout>
  );
}
