import React, { useRef } from 'react';
import { Download, Upload, AlertTriangle } from 'lucide-react';

interface ExportImportProps {
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExportImport: React.FC<ExportImportProps> = ({ onExport, onImport }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-yellow-50 rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3 mb-4">
        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-700">
          Dane dziennika są przechowywane lokalnie w przeglądarce. 
          Wyczyśczczenie danych przeglądarki spowoduje ich utratę. 
          Zalecamy regularne eksportowanie danych.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <button
          onClick={onExport}
          className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Eksportuj do CSV
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center px-4 py-2 bg-white text-orange-500 border-2 border-orange-500 rounded-md hover:bg-orange-50 transition-colors text-sm"
        >
          <Upload className="w-4 h-4 mr-2" />
          Importuj z CSV
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={onImport}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ExportImport;