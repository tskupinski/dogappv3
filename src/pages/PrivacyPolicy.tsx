import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Powrót do strony głównej
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Polityka Prywatności</h1>

      <div className="prose prose-orange max-w-none">
        <h2>1. Informacje ogólne</h2>
        <p>
          Niniejsza polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy 
          Twoje dane osobowe podczas korzystania z naszej strony internetowej.
        </p>

        <h2>2. Jakie dane zbieramy</h2>
        <p>
          Zbieramy tylko podstawowe dane analityczne o ruchu na stronie, wykorzystując pliki cookie:
        </p>
        <ul>
          <li>Informacje o sposobie korzystania ze strony</li>
          <li>Adres IP</li>
          <li>Typ przeglądarki</li>
          <li>Czas spędzony na stronie</li>
        </ul>

        <h2>3. Pliki Cookie</h2>
        <p>
          Używamy niezbędnych plików cookie do:
        </p>
        <ul>
          <li>Zapamiętywania Twoich preferencji dotyczących plików cookie</li>
          <li>Analizy ruchu na stronie w celu jej ulepszania</li>
        </ul>

        <h2>4. Jak wykorzystujemy dane</h2>
        <p>
          Zebrane dane wykorzystujemy wyłącznie do:
        </p>
        <ul>
          <li>Poprawy funkcjonowania strony</li>
          <li>Analizy sposobu korzystania z naszych usług</li>
          <li>Zapewnienia bezpieczeństwa</li>
        </ul>

        <h2>5. Twoje prawa</h2>
        <p>
          Zgodnie z RODO, masz prawo do:
        </p>
        <ul>
          <li>Dostępu do swoich danych</li>
          <li>Sprzeciwu wobec przetwarzania</li>
          <li>Usunięcia danych</li>
          <li>Ograniczenia przetwarzania</li>
        </ul>

        <h2>6. Kontakt</h2>
        <p>
          W sprawach związanych z ochroną danych osobowych możesz się z nami skontaktować 
          poprzez adres email: privacy@copiesmoze.pl
        </p>

        <h2>7. Zmiany w polityce prywatności</h2>
        <p>
          Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. 
          Wszystkie zmiany będą publikowane na tej stronie.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;