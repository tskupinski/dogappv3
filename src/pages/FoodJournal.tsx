import React, { useState, useEffect } from 'react';
import { AlertCircle, Utensils, Scale } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import JournalEntry from '../components/journal/JournalEntry';
import JournalForm from '../components/journal/JournalForm';
import JournalFilters from '../components/journal/JournalFilters';
import JournalAnalytics from '../components/journal/JournalAnalytics';
import ExportImport from '../components/journal/ExportImport';
import WeightTracker from '../components/journal/WeightTracker';
import JournalTabs from '../components/journal/JournalTabs';

interface JournalEntry {
  id: string;
  food: string;
  date: string;
  reaction: string;
  category: string;
  notes: string;
}

const categories = [
  'Mięso',
  'Warzywa',
  'Owoce',
  'Nabiał',
  'Przekąski',
  'Inne'
];

const tabs = [
  { id: 'food', label: 'Dziennik karmienia', icon: Utensils },
  { id: 'weight', label: 'Śledzenie wagi', icon: Scale },
];

const FoodJournal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('food');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [filterReaction, setFilterReaction] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  
  const [newEntry, setNewEntry] = useState<Omit<JournalEntry, 'id'>>({
    food: '',
    date: new Date().toISOString().split('T')[0],
    reaction: 'good',
    category: 'Inne',
    notes: ''
  });

  useEffect(() => {
    const savedEntries = localStorage.getItem('foodJournal');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntries = (updatedEntries: JournalEntry[]) => {
    localStorage.setItem('foodJournal', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: JournalEntry = {
      id: Date.now().toString(),
      ...newEntry
    };
    saveEntries([entry, ...entries]);
    setNewEntry({
      food: '',
      date: new Date().toISOString().split('T')[0],
      reaction: 'good',
      category: 'Inne',
      notes: ''
    });
    toast.success('Wpis został dodany');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Czy na pewno chcesz usunąć ten wpis?')) {
      const updatedEntries = entries.filter(entry => entry.id !== id);
      saveEntries(updatedEntries);
      toast.success('Wpis został usunięty');
    }
  };

  const handleEntryChange = (field: string, value: string) => {
    setNewEntry(prev => ({ ...prev, [field]: value }));
  };

  const handleExport = () => {
    const csvRows = [
      ['Data', 'Pokarm', 'Kategoria', 'Reakcja', 'Notatki'],
      ...entries.map(entry => [
        entry.date,
        entry.food,
        entry.category,
        entry.reaction === 'good' ? 'Dobra' : entry.reaction === 'bad' ? 'Zła' : 'Neutralna',
        entry.notes
      ])
    ];

    const csvContent = csvRows
      .map(row => 
        row.map(cell => 
          `"${(cell || '').toString().replace(/"/g, '""')}"`
        ).join(',')
      )
      .join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dziennik-karmienia-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Dane zostały wyeksportowane');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const csvText = event.target?.result as string;
          const lines = csvText.split('\n').map(line => 
            line.split(',').map(cell => 
              cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"')
            )
          );

          const importedEntries: JournalEntry[] = lines.slice(1)
            .filter(line => line.length >= 4)
            .map(([date, food, category, reactionText, notes]) => ({
              id: Date.now().toString() + Math.random(),
              date,
              food,
              category,
              reaction: reactionText === 'Dobra' ? 'good' : 
                       reactionText === 'Zła' ? 'bad' : 'neutral',
              notes: notes || ''
            }));

          if (importedEntries.length > 0) {
            saveEntries([...importedEntries, ...entries]);
            toast.success('Dane zostały zaimportowane pomyślnie!');
          } else {
            throw new Error('Brak danych do importu');
          }
        } catch (error) {
          toast.error('Wystąpił błąd podczas importowania danych. Sprawdź, czy plik CSV jest prawidłowy.');
        }
      };
      reader.readAsText(file, 'UTF-8');
    }
  };

  const filteredEntries = entries.filter(entry => {
    const matchesCategory = !filterCategory || entry.category === filterCategory;
    const matchesReaction = !filterReaction || entry.reaction === filterReaction;
    const entryDate = new Date(entry.date);
    const matchesMonth = 
      entryDate.getMonth() === selectedMonth.getMonth() &&
      entryDate.getFullYear() === selectedMonth.getFullYear();
    return matchesCategory && matchesReaction && matchesMonth;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster position="top-right" />
      
      <div className="bg-orange-50 rounded-lg p-4 mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-orange-700">
          Dziennik żywieniowy pomoże Ci śledzić reakcje Twojego psa na różne pokarmy.
          Pamiętaj, że to narzędzie służy tylko do celów informacyjnych i nie zastępuje
          profesjonalnej porady weterynaryjnej.
        </p>
      </div>

      <JournalTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'weight' ? (
        <WeightTracker />
      ) : (
        <>
          <ExportImport onExport={handleExport} onImport={handleImport} />

          <JournalAnalytics entries={entries} />

          <JournalForm
            newEntry={newEntry}
            onEntryChange={handleEntryChange}
            onSubmit={handleSubmit}
            categories={categories}
          />

          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <JournalFilters
              selectedMonth={selectedMonth}
              onMonthChange={setSelectedMonth}
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
              filterCategory={filterCategory}
              onCategoryChange={setFilterCategory}
              filterReaction={filterReaction}
              onReactionChange={setFilterReaction}
              categories={categories}
            />

            <div className="space-y-4">
              {filteredEntries.map(entry => (
                <JournalEntry
                  key={entry.id}
                  {...entry}
                  onDelete={handleDelete}
                />
              ))}

              {filteredEntries.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Brak wpisów spełniających kryteria wyszukiwania.
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FoodJournal;