import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { InfoBox, SafeBox } from "@/components/GuideElements";
import { Save, Trash2, Plus } from "lucide-react";

interface PersonalData {
  emergencyContacts: string;
  medicalConditions: string;
  bloodType: string;
  allergies: string;
  medications: string;
  additionalNotes: string;
}

const STORAGE_KEY = "wtwiw-personal-notes";

const defaultData: PersonalData = {
  emergencyContacts: "",
  medicalConditions: "",
  bloodType: "",
  allergies: "",
  medications: "",
  additionalNotes: "",
};

export default function Notes() {
  const [data, setData] = useState<PersonalData>(defaultData);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        // Invalid data, use defaults
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all personal notes?")) {
      setData(defaultData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleChange = (field: keyof PersonalData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout title="Personal Notes" subtitle="Stored locally on your device only">
      <div className="space-y-6">
        <SafeBox>
          <p className="font-medium">This data never leaves your phone.</p>
          <p className="text-sm">No internet required. No tracking. Just for you.</p>
        </SafeBox>

        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Emergency Contacts</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[100px]"
              placeholder="Name: Phone&#10;Name: Phone"
              value={data.emergencyContacts}
              onChange={(e) => handleChange("emergencyContacts", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Blood Type</label>
            <select
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground"
              value={data.bloodType}
              onChange={(e) => handleChange("bloodType", e.target.value)}
            >
              <option value="">Select blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">Medical Conditions</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[80px]"
              placeholder="Diabetes, heart condition, asthma..."
              value={data.medicalConditions}
              onChange={(e) => handleChange("medicalConditions", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Allergies</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[60px]"
              placeholder="Penicillin, peanuts..."
              value={data.allergies}
              onChange={(e) => handleChange("allergies", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Current Medications</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[60px]"
              placeholder="Medication name - dosage"
              value={data.medications}
              onChange={(e) => handleChange("medications", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Additional Notes</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[80px]"
              placeholder="Any other important information..."
              value={data.additionalNotes}
              onChange={(e) => handleChange("additionalNotes", e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            variant="default"
            size="lg"
            className="flex-1"
            onClick={handleSave}
          >
            <Save className="w-5 h-5 mr-2" />
            {saved ? "Saved!" : "Save Notes"}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleClear}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>

        <InfoBox>
          <p className="text-sm">
            Tip: This information could help others assist you if you're unconscious or unable to communicate.
          </p>
        </InfoBox>
      </div>
    </PageLayout>
  );
}
