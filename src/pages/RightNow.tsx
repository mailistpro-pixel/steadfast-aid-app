import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { GuideStep, WarningBox, SafeBox } from "@/components/GuideElements";
import { 
  Bomb, 
  Plane, 
  Target, 
  Home, 
  TreeDeciduous, 
  Building2, 
  Flame,
  ChevronRight 
} from "lucide-react";

type EmergencyType = 
  | "bombing" 
  | "airstrike" 
  | "gunfire" 
  | "trapped-indoor" 
  | "caught-outdoor" 
  | "collapse" 
  | "fire";

interface EmergencyOption {
  id: EmergencyType;
  icon: typeof Bomb;
  label: string;
  description: string;
}

const emergencyOptions: EmergencyOption[] = [
  { id: "bombing", icon: Bomb, label: "Bombing / Shelling", description: "Explosions nearby" },
  { id: "airstrike", icon: Plane, label: "Airstrikes / Drones", description: "Aircraft or drones overhead" },
  { id: "gunfire", icon: Target, label: "Gunfire Nearby", description: "Hearing gunshots" },
  { id: "trapped-indoor", icon: Home, label: "Trapped Indoors", description: "Cannot leave building" },
  { id: "caught-outdoor", icon: TreeDeciduous, label: "Caught Outdoors", description: "No shelter available" },
  { id: "collapse", icon: Building2, label: "Building Collapse", description: "Structure damaged" },
  { id: "fire", icon: Flame, label: "Fire from Explosions", description: "Fire spreading nearby" },
];

const emergencyGuides: Record<EmergencyType, React.ReactNode> = {
  "bombing": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">You can survive this. Stay calm. Follow these steps.</p>
      </SafeBox>
      
      <GuideStep step={1} critical>
        <p className="font-semibold">Get low immediately.</p>
        <p className="text-muted-foreground">Drop to the ground or floor.</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Move away from windows and glass.</p>
        <p className="text-muted-foreground">Glass shatters in explosions. Interior walls are safer.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Cover your head and neck.</p>
        <p className="text-muted-foreground">Use arms, bag, or cushion. Protect vital areas.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">Open your mouth slightly.</p>
        <p className="text-muted-foreground">Reduces pressure damage to eardrums.</p>
      </GuideStep>
      
      <GuideStep step={5}>
        <p className="font-semibold">Wait for silence before moving.</p>
        <p className="text-muted-foreground">Multiple explosions may follow. Wait at least 60 seconds after the last sound.</p>
      </GuideStep>
      
      <GuideStep step={6}>
        <p className="font-semibold">Check yourself for injuries.</p>
        <p className="text-muted-foreground">Adrenaline masks pain. Look for bleeding.</p>
      </GuideStep>
      
      <WarningBox>
        <p className="font-medium">Do NOT run outside immediately.</p>
        <p className="text-sm">Secondary strikes often target people fleeing.</p>
      </WarningBox>
    </div>
  ),
  
  "airstrike": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">Aircraft sounds give you warning time. Use it wisely.</p>
      </SafeBox>
      
      <GuideStep step={1} critical>
        <p className="font-semibold">If you hear aircraft or drones, seek shelter immediately.</p>
        <p className="text-muted-foreground">Any building is better than open ground.</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Go to the lowest floor possible.</p>
        <p className="text-muted-foreground">Basements, ground floors, stairwells.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Stay away from outer walls.</p>
        <p className="text-muted-foreground">Center of building is safest.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">If outdoors with no shelter, lie flat in a ditch or depression.</p>
        <p className="text-muted-foreground">Cover your head. Make yourself as small as possible.</p>
      </GuideStep>
      
      <GuideStep step={5}>
        <p className="font-semibold">Stay still until aircraft sounds fade completely.</p>
        <p className="text-muted-foreground">Movement attracts attention.</p>
      </GuideStep>
      
      <WarningBox>
        <p className="font-medium">Drones can be very quiet.</p>
        <p className="text-sm">If you hear a high-pitched hum, take cover immediately.</p>
      </WarningBox>
    </div>
  ),
  
  "gunfire": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">Distance matters. Sound travels. Gunfire may be farther than it seems.</p>
      </SafeBox>
      
      <GuideStep step={1} critical>
        <p className="font-semibold">Get down and stay down.</p>
        <p className="text-muted-foreground">Reduce your profile immediately.</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Identify the direction of the sound.</p>
        <p className="text-muted-foreground">Move away from the source if you can.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Find hard cover, not just concealment.</p>
        <p className="text-muted-foreground">Concrete, brick, engine blocks stop bullets. Wood and furniture do not.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">If indoors, stay low and away from windows.</p>
        <p className="text-muted-foreground">Lie on the floor in interior rooms.</p>
      </GuideStep>
      
      <GuideStep step={5}>
        <p className="font-semibold">Do not run unless you have clear safe direction.</p>
        <p className="text-muted-foreground">Running attracts attention and you may run toward danger.</p>
      </GuideStep>
      
      <WarningBox>
        <p className="font-medium">Never look out windows to see what's happening.</p>
        <p className="text-sm">Your curiosity is not worth your life.</p>
      </WarningBox>
    </div>
  ),
  
  "trapped-indoor": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">Being inside is often safer. Use this time to prepare.</p>
      </SafeBox>
      
      <GuideStep step={1}>
        <p className="font-semibold">Stay calm. Assess your situation.</p>
        <p className="text-muted-foreground">Check all exits. Are they truly blocked or just dangerous to use now?</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Gather water and food in one location.</p>
        <p className="text-muted-foreground">Fill containers with water in case supply is cut.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Identify the safest room.</p>
        <p className="text-muted-foreground">Interior room, lowest floor, away from windows.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">Prepare emergency supplies.</p>
        <p className="text-muted-foreground">Documents, phone, charger, first aid, flashlight if available.</p>
      </GuideStep>
      
      <GuideStep step={5}>
        <p className="font-semibold">Wait for a quiet period to reassess.</p>
        <p className="text-muted-foreground">Most dangerous to move during active fighting.</p>
      </GuideStep>
    </div>
  ),
  
  "caught-outdoor": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">Your goal is to get to any cover as quickly and safely as possible.</p>
      </SafeBox>
      
      <GuideStep step={1} critical>
        <p className="font-semibold">Drop to the ground immediately.</p>
        <p className="text-muted-foreground">You are most visible when upright.</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Look for the nearest solid cover.</p>
        <p className="text-muted-foreground">Walls, vehicles, ditches, large trees.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Move low and fast during quiet moments.</p>
        <p className="text-muted-foreground">Crawl if necessary. Speed matters less than staying low.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">If no cover, lie flat and stay still.</p>
        <p className="text-muted-foreground">Protect your head with your arms.</p>
      </GuideStep>
      
      <WarningBox>
        <p className="font-medium">Avoid obvious targets.</p>
        <p className="text-sm">Military vehicles, checkpoints, government buildings attract fire.</p>
      </WarningBox>
    </div>
  ),
  
  "collapse": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">If you are reading this, you have survived the initial collapse. That is the hardest part.</p>
      </SafeBox>
      
      <GuideStep step={1} critical>
        <p className="font-semibold">Stay still. Assess your body.</p>
        <p className="text-muted-foreground">Check if you can move each limb. Do not panic.</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Cover your nose and mouth.</p>
        <p className="text-muted-foreground">Use cloth to filter dust. Breathe slowly.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Do NOT light matches or lighters.</p>
        <p className="text-muted-foreground">Gas leaks are common. Use phone screen for light.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">If trapped, tap on pipes or walls.</p>
        <p className="text-muted-foreground">Regular pattern: three taps, pause, three taps. This signals for help.</p>
      </GuideStep>
      
      <GuideStep step={5}>
        <p className="font-semibold">Conserve energy. Wait for rescue.</p>
        <p className="text-muted-foreground">Shouting wastes air and energy. Only shout when you hear rescuers nearby.</p>
      </GuideStep>
      
      <WarningBox>
        <p className="font-medium">If you can move freely, exit carefully.</p>
        <p className="text-sm">Test each step. More collapse may follow.</p>
      </WarningBox>
    </div>
  ),
  
  "fire": (
    <div className="space-y-4">
      <SafeBox>
        <p className="font-medium">Fire is survivable. Smoke is the bigger danger. Stay low.</p>
      </SafeBox>
      
      <GuideStep step={1} critical>
        <p className="font-semibold">Get as low as possible.</p>
        <p className="text-muted-foreground">Smoke rises. Crawl if necessary. Cleaner air is near the floor.</p>
      </GuideStep>
      
      <GuideStep step={2}>
        <p className="font-semibold">Cover your nose and mouth with wet cloth.</p>
        <p className="text-muted-foreground">Any liquid helps filter smoke. Water, even urine in emergency.</p>
      </GuideStep>
      
      <GuideStep step={3}>
        <p className="font-semibold">Feel doors before opening.</p>
        <p className="text-muted-foreground">Hot door means fire on other side. Find another route.</p>
      </GuideStep>
      
      <GuideStep step={4}>
        <p className="font-semibold">Move away from fire, toward exits.</p>
        <p className="text-muted-foreground">If exit is blocked, go to a room with window. Close door behind you.</p>
      </GuideStep>
      
      <GuideStep step={5}>
        <p className="font-semibold">If clothes catch fire: STOP, DROP, ROLL.</p>
        <p className="text-muted-foreground">Cover face with hands while rolling.</p>
      </GuideStep>
      
      <WarningBox>
        <p className="font-medium">Never use elevators during fire.</p>
        <p className="text-sm">Power may fail. Shafts can fill with smoke.</p>
      </WarningBox>
    </div>
  ),
};

export default function RightNow() {
  const [selectedEmergency, setSelectedEmergency] = useState<EmergencyType | null>(null);

  if (selectedEmergency) {
    const selected = emergencyOptions.find(opt => opt.id === selectedEmergency);
    const Icon = selected?.icon || Bomb;
    
    return (
      <PageLayout 
        title={selected?.label || "Emergency"} 
        subtitle="Follow these steps"
        urgent
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="p-3 rounded-lg bg-primary/20">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-primary">{selected?.label}</p>
              <p className="text-sm text-muted-foreground">{selected?.description}</p>
            </div>
          </div>
          
          {emergencyGuides[selectedEmergency]}
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full mt-6"
            onClick={() => setSelectedEmergency(null)}
          >
            ← Back to Emergency Selection
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title="RIGHT NOW" 
      subtitle="What is happening?"
      urgent
    >
      <div className="space-y-3">
        <SafeBox>
          <p className="font-medium">Select your situation for immediate guidance.</p>
        </SafeBox>
        
        {emergencyOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Button
              key={option.id}
              variant="urgent"
              size="full"
              className="w-full"
              onClick={() => setSelectedEmergency(option.id)}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold">{option.label}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Button>
          );
        })}
      </div>
    </PageLayout>
  );
}
