import React, { useState } from 'react';
import { LineChart, Scale, Trash2 } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { toast } from 'sonner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WeightEntry {
  id: string;
  date: string;
  weight: number;
  notes: string;
}

const WeightTracker: React.FC = () => {
  const [entries, setEntries] = useState<WeightEntry[]>(() => {
    const saved = localStorage.getItem('weightEntries');
    return saved ? JSON.parse(saved) : [];
  });

  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    weight: '',
    notes: ''
  });

  const saveEntries = (updatedEntries: WeightEntry[]) => {
    localStorage.setItem('weightEntries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.weight) return;

    const entry: WeightEntry = {
      id: Date.now().toString(),
      date: newEntry.date,
      weight: parseFloat(newEntry.weight),
      notes: newEntry.notes
    };

    saveEntries([...entries, entry].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ));

    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      weight: '',
      notes: ''
    });

    toast.success('Pomiar wagi został dodany');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Czy na pewno chcesz usunąć ten pomiar?')) {
      saveEntries(entries.filter(entry => entry.id !== id));
      toast.success('Pomiar został usunięty');
    }
  };

  const chartData = {
    labels: entries.map(entry => 
      new Date(entry.date).toLocaleDateString('pl-PL', { 
        day: 'numeric',
        month: 'short'
      })
    ),
    datasets: [
      {
        label: 'Waga (kg)',
        data: entries.map(entry => entry.weight),
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y} kg`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value: number) => `${value} kg`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Scale className="w-5 h-5 text-orange-500" />
        <h2 className="text-xl font-semibold">Śledzenie wagi</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data
          </label>
          <input
            type="date"
            required
            value={newEntry.date}
            onChange={e => setNewEntry(prev => ({ ...prev, date: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Waga (kg)
          </label>
          <input
            type="number"
            required
            step="0.1"
            min="0"
            max="100"
            value={newEntry.weight}
            onChange={e => setNewEntry(prev => ({ ...prev, weight: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notatki
          </label>
          <input
            type="text"
            value={newEntry.notes}
            onChange={e => setNewEntry(prev => ({ ...prev, notes: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            placeholder="Opcjonalne uwagi..."
          />
        </div>

        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <LineChart className="w-5 h-5 mr-2" />
            Dodaj pomiar
          </button>
        </div>
      </form>

      {entries.length > 0 ? (
        <>
          <div className="h-64 mb-6">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="space-y-2">
            {[...entries].reverse().map(entry => (
              <div
                key={entry.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{entry.weight} kg</span>
                    <span className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleDateString('pl-PL')}
                    </span>
                  </div>
                  {entry.notes && (
                    <p className="text-sm text-gray-600 mt-1">{entry.notes}</p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Usuń pomiar"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12 text-gray-500">
          Brak pomiarów wagi. Dodaj pierwszy pomiar powyżej.
        </div>
      )}
    </div>
  );
};

export default WeightTracker;