import React from 'react';
import { Plus } from 'lucide-react';

interface JournalFormProps {
  newEntry: {
    food: string;
    date: string;
    reaction: string;
    category: string;
    notes: string;
  };
  onEntryChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  categories: string[];
}

const JournalForm: React.FC<JournalFormProps> = ({
  newEntry,
  onEntryChange,
  onSubmit,
  categories,
}) => {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pokarm
          </label>
          <input
            type="text"
            required
            value={newEntry.food}
            onChange={e => onEntryChange('food', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data
          </label>
          <input
            type="date"
            required
            value={newEntry.date}
            onChange={e => onEntryChange('date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kategoria
          </label>
          <select
            value={newEntry.category}
            onChange={e => onEntryChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reakcja
          </label>
          <select
            value={newEntry.reaction}
            onChange={e => onEntryChange('reaction', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="good">Dobra</option>
            <option value="neutral">Neutralna</option>
            <option value="bad">Zła</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notatki
          </label>
          <input
            type="text"
            value={newEntry.notes}
            onChange={e => onEntryChange('notes', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            placeholder="Opcjonalne uwagi..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full flex justify-center items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        <Plus className="w-5 h-5 mr-2" />
        Dodaj wpis
      </button>
    </form>
  );
};

export default JournalForm;