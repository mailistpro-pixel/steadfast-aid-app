import { PageLayout } from "@/components/PageLayout";
import { GuideStep, InfoBox, SafeBox } from "@/components/GuideElements";
import { 
  Wind, 
  Anchor, 
  Baby, 
  Brain, 
  Heart,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface CollapsibleSectionProps {
  icon: typeof Wind;
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

export default function Psychological() {
  return (
    <PageLayout title="Psychological Survival" subtitle="Your mind needs care too">
      <div className="space-y-4">
        <SafeBox>
          <p className="font-medium">Fear is normal. Panic is manageable. You can do this.</p>
        </SafeBox>

        <CollapsibleSection icon={Wind} title="Panic Control Breathing" defaultOpen>
          <div className="space-y-3">
            <InfoBox>
              <p className="font-medium">This takes 30 seconds. It works.</p>
              <p className="text-sm">Your body can't stay panicked while breathing slowly.</p>
            </InfoBox>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="font-semibold text-center mb-4">Follow this pattern:</p>
              
              <GuideStep step={1}>
                <p className="font-semibold text-primary">Breathe IN through nose - 4 seconds</p>
              </GuideStep>
              
              <GuideStep step={2}>
                <p className="font-semibold text-secondary">HOLD - 4 seconds</p>
              </GuideStep>
              
              <GuideStep step={3}>
                <p className="font-semibold text-safe">Breathe OUT through mouth - 6 seconds</p>
              </GuideStep>
              
              <GuideStep step={4}>
                <p className="font-semibold">Repeat 3-5 times</p>
              </GuideStep>
            </div>

            <p className="text-muted-foreground text-center">
              Counting gives your mind something to focus on besides fear.
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Anchor} title="Grounding Techniques">
          <div className="space-y-3">
            <InfoBox>
              <p className="font-medium">When fear takes over, anchor yourself to the present.</p>
            </InfoBox>

            <p className="font-semibold text-foreground">The 5-4-3-2-1 Method:</p>
            
            <div className="space-y-3 mt-2">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">5 things you can SEE</p>
                <p className="text-sm text-muted-foreground">Name them out loud or in your head.</p>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">4 things you can TOUCH</p>
                <p className="text-sm text-muted-foreground">Feel their texture. Cold? Warm? Rough?</p>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">3 things you can HEAR</p>
                <p className="text-sm text-muted-foreground">Even silence has sounds.</p>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">2 things you can SMELL</p>
                <p className="text-sm text-muted-foreground">Or imagine smelling.</p>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">1 thing you can TASTE</p>
                <p className="text-sm text-muted-foreground">Even if just water.</p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Baby} title="Helping Children Calm Down">
          <div className="space-y-3">
            <SafeBox>
              <p className="font-medium">Children take cues from adults.</p>
              <p className="text-sm">Your calm is their calm.</p>
            </SafeBox>

            <GuideStep step={1}>
              <p className="font-semibold">Get on their level physically.</p>
              <p className="text-muted-foreground">Kneel or sit. Eye contact.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">Hold them if they want.</p>
              <p className="text-muted-foreground">Physical contact is reassuring. Don't force it.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Speak slowly and simply.</p>
              <p className="text-muted-foreground">"We are safe right now. I am here with you."</p>
            </GuideStep>
            
            <GuideStep step={4}>
              <p className="font-semibold">Give simple tasks.</p>
              <p className="text-muted-foreground">"Hold this bag for me." Purpose reduces panic.</p>
            </GuideStep>
            
            <GuideStep step={5}>
              <p className="font-semibold">Validate their feelings.</p>
              <p className="text-muted-foreground">"It's okay to be scared. I get scared too sometimes."</p>
            </GuideStep>

            <InfoBox>
              <p className="font-medium">Don't promise what you can't control.</p>
              <p className="text-sm">Instead of "nothing bad will happen," say "I will stay with you."</p>
            </InfoBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Brain} title="Decision-Making Under Fear">
          <div className="space-y-3">
            <InfoBox>
              <p className="font-medium">Fear makes decisions feel impossible.</p>
              <p className="text-sm">Use a simple framework.</p>
            </InfoBox>

            <p className="font-semibold text-foreground">Ask these 3 questions:</p>
            
            <GuideStep step={1}>
              <p className="font-semibold">What is the immediate danger right now?</p>
              <p className="text-muted-foreground">Not tomorrow. Not maybe. Right now.</p>
            </GuideStep>
            
            <GuideStep step={2}>
              <p className="font-semibold">What is the safest option available?</p>
              <p className="text-muted-foreground">Not perfect. Not ideal. Just safer than now.</p>
            </GuideStep>
            
            <GuideStep step={3}>
              <p className="font-semibold">Can I act on it right now?</p>
              <p className="text-muted-foreground">If yes, do it. If no, wait until you can.</p>
            </GuideStep>

            <SafeBox>
              <p className="font-medium">Any decision is better than freezing.</p>
              <p className="text-sm">You can adjust later. Moving is surviving.</p>
            </SafeBox>
          </div>
        </CollapsibleSection>

        <CollapsibleSection icon={Heart} title="Trauma Awareness">
          <div className="space-y-3">
            <InfoBox>
              <p className="font-medium">What you're experiencing may affect you later.</p>
              <p className="text-sm">This is normal. You are not broken.</p>
            </InfoBox>

            <p className="font-semibold text-foreground">Common reactions (all normal):</p>
            <ul className="space-y-2 ml-4 mt-2">
              <li className="text-muted-foreground">• Flashbacks or intrusive memories</li>
              <li className="text-muted-foreground">• Difficulty sleeping or nightmares</li>
              <li className="text-muted-foreground">• Feeling numb or disconnected</li>
              <li className="text-muted-foreground">• Sudden anger or irritability</li>
              <li className="text-muted-foreground">• Difficulty concentrating</li>
              <li className="text-muted-foreground">• Hypervigilance (always on alert)</li>
            </ul>

            <SafeBox>
              <p className="font-medium mt-4">These reactions are your mind processing danger.</p>
              <p className="text-sm">They usually decrease over time. When safe, seek support if they continue.</p>
            </SafeBox>
          </div>
        </CollapsibleSection>
      </div>
    </PageLayout>
  );
}
