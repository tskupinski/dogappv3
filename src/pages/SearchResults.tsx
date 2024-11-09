import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { foods } from '../data/foods';
import SearchBar from '../components/SearchBar';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = foods.filter(food => 
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Powrót do strony głównej
      </Link>

      <div className="mb-8">
        <SearchBar />
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        {results.length > 0 
          ? `Znaleziono ${results.length} ${results.length === 1 ? 'wynik' : 'wyników'} dla "${query}"`
          : `Brak wyników dla "${query}"`}
      </h1>

      {results.length === 0 ? (
        <div className="bg-orange-50 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            Nie znaleziono żadnych produktów spełniających kryteria wyszukiwania.
            <br />
            Spróbuj wyszukać coś innego lub sprawdź pisownię.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map(food => (
            <Link
              key={food.id}
              to={`/food/${food.slug}`}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">{food.name}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">{food.overview}</p>
              </div>
              {food.isSafe ? (
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;