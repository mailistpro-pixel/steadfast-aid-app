import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { InfoBox, SafeBox } from "@/components/GuideElements";
import { Save, Trash2, Plus, ChevronLeft, Edit2 } from "lucide-react";

interface PersonalNote {
  id: string;
  title: string;
  emergencyContacts: string;
  medicalConditions: string;
  bloodType: string;
  allergies: string;
  medications: string;
  additionalNotes: string;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = "wtwiw-personal-notes-v2";

const createEmptyNote = (): PersonalNote => ({
  id: crypto.randomUUID(),
  title: "New Note",
  emergencyContacts: "",
  medicalConditions: "",
  bloodType: "",
  allergies: "",
  medications: "",
  additionalNotes: "",
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

export default function Notes() {
  const [notes, setNotes] = useState<PersonalNote[]>([]);
  const [activeNote, setActiveNote] = useState<PersonalNote | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setNotes(JSON.parse(stored));
      } catch {
        // Invalid data, use empty array
      }
    }
  }, []);

  const saveNotes = (updatedNotes: PersonalNote[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleCreateNew = () => {
    const newNote = createEmptyNote();
    setActiveNote(newNote);
  };

  const handleSave = () => {
    if (!activeNote) return;
    
    const updatedNote = { ...activeNote, updatedAt: Date.now() };
    const existingIndex = notes.findIndex(n => n.id === activeNote.id);
    
    let updatedNotes: PersonalNote[];
    if (existingIndex >= 0) {
      updatedNotes = [...notes];
      updatedNotes[existingIndex] = updatedNote;
    } else {
      updatedNotes = [...notes, updatedNote];
    }
    
    saveNotes(updatedNotes);
    setActiveNote(updatedNote);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = () => {
    if (!activeNote) return;
    if (window.confirm("Are you sure you want to delete this note?")) {
      const updatedNotes = notes.filter(n => n.id !== activeNote.id);
      saveNotes(updatedNotes);
      setActiveNote(null);
    }
  };

  const handleChange = (field: keyof PersonalNote, value: string) => {
    if (!activeNote) return;
    setActiveNote(prev => prev ? { ...prev, [field]: value } : null);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Note list view
  if (!activeNote) {
    return (
      <PageLayout title="Personal Notes" subtitle="Stored locally on your device only">
        <div className="space-y-6">
          <SafeBox>
            <p className="font-medium">This data never leaves your phone.</p>
            <p className="text-sm">No internet required. No tracking. Just for you.</p>
          </SafeBox>

          <Button
            variant="default"
            size="lg"
            className="w-full"
            onClick={handleCreateNew}
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Note
          </Button>

          {notes.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No notes yet.</p>
              <p className="text-sm mt-2">Create your first note to store emergency contacts, medical info, and more.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notes.sort((a, b) => b.updatedAt - a.updatedAt).map(note => (
                <button
                  key={note.id}
                  onClick={() => setActiveNote(note)}
                  className="w-full p-4 bg-muted border border-border rounded-lg text-left hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-foreground">{note.title}</h3>
                    <Edit2 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Updated: {formatDate(note.updatedAt)}
                  </p>
                  {note.bloodType && (
                    <span className="inline-block mt-2 px-2 py-1 bg-warning/20 text-warning text-xs rounded">
                      Blood: {note.bloodType}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          <InfoBox>
            <p className="text-sm">
              Tip: Create separate notes for each family member or for different emergency scenarios.
            </p>
          </InfoBox>
        </div>
      </PageLayout>
    );
  }

  // Note editor view
  return (
    <PageLayout title="Edit Note" subtitle="All changes saved locally">
      <div className="space-y-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveNote(null)}
          className="mb-2"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Notes
        </Button>

        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Note Title</label>
            <input
              type="text"
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
              placeholder="e.g., My Info, Dad's Info, Family Emergency"
              value={activeNote.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Emergency Contacts</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[100px]"
              placeholder="Name: Phone&#10;Name: Phone"
              value={activeNote.emergencyContacts}
              onChange={(e) => handleChange("emergencyContacts", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Blood Type</label>
            <select
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground"
              value={activeNote.bloodType}
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
              value={activeNote.medicalConditions}
              onChange={(e) => handleChange("medicalConditions", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Allergies</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[60px]"
              placeholder="Penicillin, peanuts..."
              value={activeNote.allergies}
              onChange={(e) => handleChange("allergies", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Current Medications</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[60px]"
              placeholder="Medication name - dosage"
              value={activeNote.medications}
              onChange={(e) => handleChange("medications", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Additional Notes</label>
            <textarea
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground min-h-[80px]"
              placeholder="Any other important information..."
              value={activeNote.additionalNotes}
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
            {saved ? "Saved!" : "Save Note"}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleDelete}
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
