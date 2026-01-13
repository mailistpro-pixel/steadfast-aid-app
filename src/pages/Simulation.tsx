import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { InfoBox, SafeBox, WarningBox } from "@/components/GuideElements";
import { RotateCcw } from "lucide-react";

interface Choice {
  text: string;
  nextSceneId: string;
}

interface Scene {
  id: string;
  title: string;
  content: React.ReactNode;
  choices: Choice[];
  isEnding?: boolean;
}

const scenarios: Record<string, Scene[]> = {
  "city-bombing": [
    {
      id: "start",
      title: "City Under Bombing",
      content: (
        <div className="space-y-4">
          <p>You are at home. It's 3 PM. Suddenly, you hear distant explosions. They're getting closer.</p>
          <p>Your phone has 45% battery. You're alone. The explosions are now within a few kilometers.</p>
          <p className="font-semibold">What do you do first?</p>
        </div>
      ),
      choices: [
        { text: "Run outside to see what's happening", nextSceneId: "outside-look" },
        { text: "Move to an interior room away from windows", nextSceneId: "interior-safe" },
        { text: "Start packing to evacuate immediately", nextSceneId: "packing-now" },
      ],
    },
    {
      id: "outside-look",
      title: "Outside",
      content: (
        <div className="space-y-4">
          <WarningBox>
            <p>You step outside. An explosion hits 200 meters away. Glass and debris fly through the air.</p>
          </WarningBox>
          <p>You're exposed. Your ears are ringing. You need to get back inside immediately.</p>
          <p className="font-semibold">Lesson: Never go outside during active bombing to "see what's happening." Windows and open spaces are the most dangerous places.</p>
        </div>
      ),
      choices: [
        { text: "Rush back inside", nextSceneId: "interior-safe" },
      ],
    },
    {
      id: "interior-safe",
      title: "Interior Room",
      content: (
        <div className="space-y-4">
          <SafeBox>
            <p>Good decision. You're in an interior room, away from windows.</p>
          </SafeBox>
          <p>The explosions continue for 20 minutes, then stop. You wait another 30 minutes in silence.</p>
          <p>Your phone is now at 40%. You hear neighbors moving outside.</p>
          <p className="font-semibold">What do you do?</p>
        </div>
      ),
      choices: [
        { text: "Leave immediately while it's quiet", nextSceneId: "leave-early" },
        { text: "Stay put and assess the situation first", nextSceneId: "assess-first" },
        { text: "Use phone to call family", nextSceneId: "call-family" },
      ],
    },
    {
      id: "packing-now",
      title: "Packing During Attack",
      content: (
        <div className="space-y-4">
          <WarningBox>
            <p>You're moving around the house gathering things when an explosion hits nearby.</p>
          </WarningBox>
          <p>Glass from the window shatters inward. You're lucky—you weren't near it.</p>
          <p className="font-semibold">Lesson: During active attacks, shelter first. Pack only when it's quiet.</p>
        </div>
      ),
      choices: [
        { text: "Stop packing and move to interior room", nextSceneId: "interior-safe" },
      ],
    },
    {
      id: "leave-early",
      title: "Leaving Quickly",
      content: (
        <div className="space-y-4">
          <p>You step outside. Others are doing the same. The streets seem clear.</p>
          <p>After walking 10 minutes, a second wave of strikes begins. You're caught in the open.</p>
          <WarningBox>
            <p>Lesson: "Double-tap" strikes are common. They target people who emerge after the first attack. Wait at least 1-2 hours after attacks stop if possible.</p>
          </WarningBox>
        </div>
      ),
      choices: [
        { text: "Find immediate shelter in nearest building", nextSceneId: "ending-shelter-found" },
      ],
    },
    {
      id: "assess-first",
      title: "Assessing the Situation",
      content: (
        <div className="space-y-4">
          <SafeBox>
            <p>You wait, listen, and conserve your energy and phone battery.</p>
          </SafeBox>
          <p>After 2 hours of quiet, you carefully gather essential items: documents, water, phone, medications.</p>
          <p>You check with neighbors through the wall. They're planning to stay one more night.</p>
          <p className="font-semibold">Lesson: Patience saves lives. Assess before acting.</p>
        </div>
      ),
      choices: [
        { text: "Continue to ending", nextSceneId: "ending-safe" },
      ],
    },
    {
      id: "call-family",
      title: "Calling Family",
      content: (
        <div className="space-y-4">
          <InfoBox>
            <p>You call your family. The network is overwhelmed. After 15 minutes of trying, you reach them briefly.</p>
          </InfoBox>
          <p>Your phone is now at 30%. Network towers may be damaged soon.</p>
          <p className="font-semibold">Lesson: Brief calls are okay, but long calls drain battery. Consider text messages which use less power and may get through even on weak networks.</p>
        </div>
      ),
      choices: [
        { text: "Put phone in airplane mode and wait", nextSceneId: "assess-first" },
      ],
    },
    {
      id: "ending-shelter-found",
      title: "Learning Moment",
      content: (
        <div className="space-y-4">
          <p>You survived by finding shelter just in time. You're shaken but alive.</p>
          <SafeBox>
            <p className="font-medium">What you learned:</p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Wait for extended quiet before moving</li>
              <li>• "Double-tap" attacks target those who emerge</li>
              <li>• Always know where shelter is along any route</li>
            </ul>
          </SafeBox>
        </div>
      ),
      choices: [],
      isEnding: true,
    },
    {
      id: "ending-safe",
      title: "Well Done",
      content: (
        <div className="space-y-4">
          <SafeBox>
            <p>You made careful decisions. You're safe, prepared, and thinking clearly.</p>
          </SafeBox>
          <p className="font-medium">What you did right:</p>
          <ul className="space-y-1 ml-4">
            <li className="text-muted-foreground">• Sought interior shelter immediately</li>
            <li className="text-muted-foreground">• Waited for extended quiet</li>
            <li className="text-muted-foreground">• Conserved phone battery</li>
            <li className="text-muted-foreground">• Assessed before acting</li>
          </ul>
        </div>
      ),
      choices: [],
      isEnding: true,
    },
  ],
};

export default function Simulation() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState<string>("start");

  const currentScenario = selectedScenario ? scenarios[selectedScenario] : null;
  const currentScene = currentScenario?.find(s => s.id === currentSceneId);

  const handleChoice = (nextSceneId: string) => {
    setCurrentSceneId(nextSceneId);
  };

  const handleRestart = () => {
    setCurrentSceneId("start");
  };

  const handleBack = () => {
    setSelectedScenario(null);
    setCurrentSceneId("start");
  };

  if (!selectedScenario) {
    return (
      <PageLayout title="Survival Simulation" subtitle="Learn by making choices">
        <div className="space-y-4">
          <InfoBox>
            <p>Text-based scenarios to practice decision-making. No scores. No winning. Only learning.</p>
          </InfoBox>

          <p className="text-muted-foreground">Choose a scenario:</p>

          <Button
            variant="section"
            size="full"
            className="w-full"
            onClick={() => setSelectedScenario("city-bombing")}
          >
            <div className="text-left">
              <p className="font-semibold">City Under Bombing</p>
              <p className="text-sm text-muted-foreground">You're at home when strikes begin nearby.</p>
            </div>
          </Button>

          <div className="p-4 border border-border rounded-lg text-center text-muted-foreground">
            <p className="text-sm">More scenarios coming soon:</p>
            <p className="text-sm mt-2">• Rural Conflict</p>
            <p className="text-sm">• Forced Evacuation</p>
            <p className="text-sm">• Power Outage Survival</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title={currentScene?.title || "Simulation"} 
      subtitle="Make your choice"
    >
      <div className="space-y-6">
        {currentScene?.content}

        {currentScene?.choices && currentScene.choices.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-border">
            {currentScene.choices.map((choice, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="w-full text-left justify-start h-auto py-4"
                onClick={() => handleChoice(choice.nextSceneId)}
              >
                {choice.text}
              </Button>
            ))}
          </div>
        )}

        {currentScene?.isEnding && (
          <div className="space-y-3 pt-4">
            <Button
              variant="default"
              size="lg"
              className="w-full"
              onClick={handleRestart}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleBack}
            >
              Choose Different Scenario
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
