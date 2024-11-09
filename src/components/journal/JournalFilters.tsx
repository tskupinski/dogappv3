import React from 'react';
import { Filter } from 'lucide-react';

interface JournalFiltersProps {
  selectedMonth: Date;
  onMonthChange: (date: Date) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  filterCategory: string;
  onCategoryChange: (category: string) => void;
  filterReaction: string;
  onReactionChange: (reaction: string) => void;
  categories: string[];
}

const JournalFilters: React.FC<JournalFiltersProps> = ({
  selectedMonth,
  onMonthChange,
  showFilters,
  onToggleFilters,
  filterCategory,
  onCategoryChange,
  filterReaction,
  onReactionChange,
  categories,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Historia karmienia</h2>
        <button
          onClick={onToggleFilters}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500"
        >
          <Filter className="w-4 h-4" />
          Filtry
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Miesiąc
            </label>
            <input
              type="month"
              value={`${selectedMonth.getFullYear()}-${String(selectedMonth.getMonth() + 1).padStart(2, '0')}`}
              onChange={e => onMonthChange(new Date(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategoria
            </label>
            <select
              value={filterCategory}
              onChange={e => onCategoryChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Wszystkie</option>
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
              value={filterReaction}
              onChange={e => onReactionChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Wszystkie</option>
              <option value="good">Dobra</option>
              <option value="neutral">Neutralna</option>
              <option value="bad">Zła</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalFilters;