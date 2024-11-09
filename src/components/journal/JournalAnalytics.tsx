import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { BarChart3 } from 'lucide-react';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface JournalEntry {
  id: string;
  food: string;
  date: string;
  reaction: string;
  category: string;
  notes: string;
}

interface JournalAnalyticsProps {
  entries: JournalEntry[];
}

const getReactionColor = (reaction: string) => {
  switch (reaction) {
    case 'good': return 'rgb(34, 197, 94)';
    case 'bad': return 'rgb(239, 68, 68)';
    default: return 'rgb(234, 179, 8)';
  }
};

const getReactionText = (reaction: string) => {
  switch (reaction) {
    case 'good': return 'Dobra';
    case 'bad': return 'Zła';
    default: return 'Neutralna';
  }
};

export const JournalAnalytics: React.FC<JournalAnalyticsProps> = ({ entries }) => {
  if (entries.length === 0) {
    return null;
  }

  // Reaction distribution data
  const reactionCounts = entries.reduce((acc, entry) => {
    acc[entry.reaction] = (acc[entry.reaction] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const reactionData = {
    labels: Object.keys(reactionCounts).map(getReactionText),
    datasets: [{
      data: Object.values(reactionCounts),
      backgroundColor: Object.keys(reactionCounts).map(getReactionColor),
    }]
  };

  // Category distribution data
  const categoryCounts = entries.reduce((acc, entry) => {
    acc[entry.category] = (acc[entry.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryData = {
    labels: Object.keys(categoryCounts),
    datasets: [{
      label: 'Liczba posiłków',
      data: Object.values(categoryCounts),
      backgroundColor: 'rgba(249, 115, 22, 0.5)',
      borderColor: 'rgb(249, 115, 22)',
      borderWidth: 1,
    }]
  };

  // Monthly trends data
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toLocaleDateString('pl-PL', { month: 'short', year: 'numeric' });
  }).reverse();

  const monthlyReactions = last6Months.map(month => {
    const monthEntries = entries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate.toLocaleDateString('pl-PL', { month: 'short', year: 'numeric' }) === month;
    });

    return {
      good: monthEntries.filter(e => e.reaction === 'good').length,
      neutral: monthEntries.filter(e => e.reaction === 'neutral').length,
      bad: monthEntries.filter(e => e.reaction === 'bad').length,
    };
  });

  const trendsData = {
    labels: last6Months,
    datasets: [
      {
        label: 'Dobre',
        data: monthlyReactions.map(m => m.good),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Neutralne',
        data: monthlyReactions.map(m => m.neutral),
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Złe',
        data: monthlyReactions.map(m => m.bad),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
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
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-orange-500" />
        <h2 className="text-xl font-semibold">Analiza karmienia</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="h-64">
          <h3 className="text-sm font-medium text-gray-700 mb-4 text-center">
            Rozkład reakcji
          </h3>
          <Pie data={reactionData} options={chartOptions} />
        </div>

        <div className="h-64">
          <h3 className="text-sm font-medium text-gray-700 mb-4 text-center">
            Kategorie pokarmów
          </h3>
          <Bar data={categoryData} options={chartOptions} />
        </div>

        <div className="h-64 md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-medium text-gray-700 mb-4 text-center">
            Trendy miesięczne
          </h3>
          <Line data={trendsData} options={chartOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {reactionCounts.good || 0}
          </div>
          <div className="text-sm text-green-800">Dobrych reakcji</div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {reactionCounts.neutral || 0}
          </div>
          <div className="text-sm text-yellow-800">Neutralnych reakcji</div>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-red-600 mb-1">
            {reactionCounts.bad || 0}
          </div>
          <div className="text-sm text-red-800">Złych reakcji</div>
        </div>
      </div>
    </div>
  );
};

export default JournalAnalytics;