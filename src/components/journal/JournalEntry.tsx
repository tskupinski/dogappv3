import React from 'react';
import { Trash2 } from 'lucide-react';

interface JournalEntryProps {
  id: string;
  food: string;
  date: string;
  reaction: string;
  category: string;
  notes: string;
  onDelete: (id: string) => void;
}

const getReactionEmoji = (reaction: string) => {
  switch (reaction) {
    case 'good': return '😊';
    case 'bad': return '😟';
    default: return '😐';
  }
};

const getReactionColor = (reaction: string) => {
  switch (reaction) {
    case 'good': return 'text-green-500';
    case 'bad': return 'text-red-500';
    default: return 'text-yellow-500';
  }
};

const JournalEntry: React.FC<JournalEntryProps> = ({
  id,
  food,
  date,
  reaction,
  category,
  notes,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between border border-gray-100">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{food}</h3>
          <span className={`text-sm ${getReactionColor(reaction)}`}>
            {getReactionEmoji(reaction)}
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString('pl-PL')}
        </p>
        {notes && (
          <p className="text-sm text-gray-600 mt-1">{notes}</p>
        )}
      </div>
      <button
        onClick={() => onDelete(id)}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Usuń wpis"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default JournalEntry;