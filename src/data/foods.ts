export interface FoodItem {
  id: string;
  name: string;
  slug: string;
  isSafe: boolean;
  image: string;
  overview: string;
  risks?: string;
  benefits?: string;
  vetChecked: boolean;
}

export const foods: FoodItem[] = [
  {
    id: '26',
    name: 'Kasza jaglana',
    slug: 'kasza-jaglana',
    isSafe: true,
    image: '', // Empty image URL to test placeholder
    overview: 'Tak! Kasza jaglana jest bezpieczna i zdrowa dla psów.',
    benefits: 'Bogata w białko, witaminy z grupy B i minerały. Łatwo strawna i bezglutenowa. Może wspierać układ odpornościowy.',
    risks: 'Podawaj w umiarkowanych ilościach i zawsze ugotowaną. Wprowadzaj stopniowo do diety.',
    vetChecked: true
  },
  {
    id: '1',
    name: 'Winogrono',
    slug: 'winogrono',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie. Psy nie powinny jeść winogron. Dokładna przyczyna toksyczności winogron nadal nie jest jednoznaczna. Gdy pies spożyje winogrona, może to prowadzić do ostrego uszkodzenia nerek, przewlekłej choroby nerek lub niewydolności nerek, jeśli nie zostanie podjęte leczenie.',
    risks: 'Spożycie winogron może prowadzić do powikłań u psów, takich jak uszkodzenie nerek, przewlekła choroba nerek lub niewydolność nerek, jeśli nie zostanie podjęte leczenie. Niedawne badanie ASPCA wykazało, że może istnieć związek między kwasem winowym a toksycznością u psów, jednak nie jest to jeszcze ostatecznie potwierdzone.',
    vetChecked: true
  },
  // ... rest of the foods array remains unchanged
  //
  {
    id: '27',
    name: 'Kurczak gotowany',
    slug: 'kurczak-gotowany',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowany kurczak jest bezpieczny i zdrowy dla psów.',
    benefits: 'Doskonałe źródło chudego białka. Łatwo strawny. Wspiera budowę mięśni.',
    risks: 'Usuń wszystkie kości. Podawaj bez przypraw i dodatków. Upewnij się, że jest dobrze ugotowany.',
    vetChecked: true
  },
  {
    id: '28',
    name: 'Kurczak surowy',
    slug: 'kurczak-surowy',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1584947897558-4e06f5024c8d?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Surowy kurczak może zawierać niebezpieczne bakterie.',
    risks: 'Może zawierać salmonellę i inne bakterie. Ryzyko zadławienia kośćmi. Możliwe zatrucie pokarmowe.',
    vetChecked: true
  },
  {
    id: '29',
    name: 'Wołowina gotowana',
    slug: 'wolowina-gotowana',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowana wołowina jest bezpieczna i odżywcza dla psów.',
    benefits: 'Bogate źródło białka i żelaza. Zawiera witaminy z grupy B i cynk.',
    risks: 'Podawaj bez tłuszczu i przypraw. Unikaj mięsa przetworzonego.',
    vetChecked: true
  },
  {
    id: '30',
    name: 'Wołowina surowa',
    slug: 'wolowina-surowa',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1592686092916-672fa9e86866?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Surowa wołowina może zawierać pasożyty i bakterie.',
    risks: 'Ryzyko zarażenia bakteriami E.coli i pasożytami. Możliwe problemy trawienne.',
    vetChecked: true
  },
  {
    id: '31',
    name: 'Jajko gotowane',
    slug: 'jajko-gotowane',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowane jajka są bezpieczne i bardzo odżywcze dla psów.',
    benefits: 'Bogate w białko i kwasy tłuszczowe omega-3. Zawiera witaminy A, D i E.',
    risks: 'Podawaj bez skorupki. Unikaj nadmiaru ze względu na wysoką kaloryczność.',
    vetChecked: true
  },
  {
    id: '32',
    name: 'Jajko surowe',
    slug: 'jajko-surowe',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Surowe jajka mogą zawierać salmonellę.',
    risks: 'Ryzyko salmonelli. Białko surowego jajka może utrudniać wchłanianie biotyny.',
    vetChecked: true
  },
  {
    id: '33',
    name: 'Łosoś gotowany',
    slug: 'losos-gotowany',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowany łosoś jest zdrowy dla psów.',
    benefits: 'Bogaty w kwasy omega-3, białko i witaminę D. Wspiera zdrowie skóry i sierści.',
    risks: 'Usuń wszystkie ości. Podawaj bez przypraw i soli.',
    vetChecked: true
  },
  {
    id: '34',
    name: 'Łosoś surowy',
    slug: 'losos-surowy',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Surowy łosoś może zawierać pasożyty.',
    risks: 'Może zawierać bakterie i pasożyty. Ryzyko zatrucia pokarmowego.',
    vetChecked: true
  },
  {
    id: '35',
    name: 'Brokuły gotowane',
    slug: 'brokuly-gotowane',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowane brokuły są zdrowe dla psów.',
    benefits: 'Bogate w witaminę C, błonnik i przeciwutleniacze. Wspierają układ odpornościowy.',
    risks: 'Podawaj w małych ilościach. Mogą powodować wzdęcia.',
    vetChecked: true
  },
  {
    id: '36',
    name: 'Ser żółty',
    slug: 'ser-zolty',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Ser żółty może być podawany psom w małych ilościach.',
    benefits: 'Zawiera białko i wapń. Może być używany jako przysmak treningowy.',
    risks: 'Wysoka zawartość tłuszczu i soli. Niektóre psy mogą być nietolerancyjne na laktozę.',
    vetChecked: true
  },
  {
    id: '37',
    name: 'Masło orzechowe',
    slug: 'maslo-orzechowe',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1502181587693-ab17b41c1644?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Naturalne masło orzechowe jest bezpieczne dla psów.',
    benefits: 'Bogate w białko i zdrowe tłuszcze. Dobre źródło witaminy E.',
    risks: 'Upewnij się, że nie zawiera ksylitolu. Podawaj w małych ilościach ze względu na wysoką kaloryczność.',
    vetChecked: true
  },
  {
    id: '38',
    name: 'Czekolada mleczna',
    slug: 'czekolada-mleczna',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Czekolada jest toksyczna dla psów.',
    risks: 'Zawiera teobrominę, która jest toksyczna dla psów. Może powodować przyspieszone bicie serca, wymioty i w skrajnych przypadkach śmierć.',
    vetChecked: true
  },
  {
    id: '39',
    name: 'Chleb',
    slug: 'chleb',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Zwykły chleb jest bezpieczny dla psów w małych ilościach.',
    benefits: 'Może być źródłem węglowodanów.',
    risks: 'Niska wartość odżywcza. Unikaj chleba z rodzynkami lub orzechami.',
    vetChecked: true
  },
  {
    id: '40',
    name: 'Mleko',
    slug: 'mleko',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Większość dorosłych psów nie trawi dobrze mleka.',
    risks: 'Może powodować biegunkę i problemy żołądkowe. Większość psów jest nietolerancyjna na laktozę.',
    vetChecked: true
  },
  {
    id: '41',
    name: 'Kalafior gotowany',
    slug: 'kalafior-gotowany',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowany kalafior jest bezpieczny i zdrowy dla psów.',
    benefits: 'Niskokaloryczny. Bogaty w witaminę C i przeciwutleniacze.',
    risks: 'Może powodować wzdęcia. Podawaj w małych ilościach.',
    vetChecked: true
  },
  {
    id: '42',
    name: 'Bataty gotowane',
    slug: 'bataty-gotowane',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowane bataty są zdrowe dla psów.',
    benefits: 'Bogate w beta-karoten i błonnik. Dobre źródło witamin.',
    risks: 'Podawaj bez skórki i przypraw. Wprowadzaj stopniowo do diety.',
    vetChecked: true
  },
  {
    id: '43',
    name: 'Szynka',
    slug: 'szynka',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Szynka i inne wędliny nie są zalecane dla psów.',
    risks: 'Wysoka zawartość soli i konserwantów. Może prowadzić do problemów z nerkami i otyłości.',
    vetChecked: true
  },
  {
    id: '44',
    name: 'Mango',
    slug: 'mango',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Mango jest bezpieczne dla psów.',
    benefits: 'Bogate w witaminy A i C. Zawiera błonnik i przeciwutleniacze.',
    risks: 'Usuń pestkę i skórkę. Podawaj w małych ilościach ze względu na zawartość cukru.',
    vetChecked: true
  },
  {
    id: '45',
    name: 'Awokado',
    slug: 'awokado',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Awokado może być szkodliwe dla psów.',
    risks: 'Zawiera persynę, która może być toksyczna. Pestka stanowi ryzyko zadławienia.',
    vetChecked: true
  },
  {
    id: '46',
    name: 'Groch gotowany',
    slug: 'groch-gotowany',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowany groch jest bezpieczny dla psów.',
    benefits: 'Dobre źródło białka roślinnego i błonnika. Zawiera witaminy z grupy B.',
    risks: 'Może powodować wzdęcia. Wprowadzaj stopniowo do diety.',
    vetChecked: true
  },
  {
    id: '47',
    name: 'Kiwi',
    slug: 'kiwi',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Kiwi jest bezpieczne dla psów.',
    benefits: 'Bogate w witaminę C i błonnik. Zawiera enzymy wspomagające trawienie.',
    risks: 'Obierz ze skórki. Podawaj w małych ilościach.',
    vetChecked: true
  },
  {
    id: '48',
    name: 'Orzechy makadamia',
    slug: 'orzechy-makadamia',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Orzechy makadamia są toksyczne dla psów.',
    risks: 'Mogą powodować osłabienie, wymioty i problemy neurologiczne.',
    vetChecked: true
  },
  {
    id: '49',
    name: 'Dynia gotowana',
    slug: 'dynia-gotowana',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowana dynia jest zdrowa dla psów.',
    benefits: 'Bogata w błonnik i beta-karoten. Pomaga przy problemach trawiennych.',
    risks: 'Podawaj bez pestek i skórki. Nie dodawaj przypraw.',
    vetChecked: true
  },
  {
    id: '50',
    name: 'Czosnek',
    slug: 'czosnek',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Czosnek jest toksyczny dla psów.',
    risks: 'Może powodować anemię i uszkodzenie czerwonych krwinek. Nawet małe ilości są niebezpieczne.',
    vetChecked: true
  },
  {
    id: '51',
    name: 'Indyk gotowany',
    slug: 'indyk-gotowany',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowany indyk jest bezpieczny i zdrowy dla psów.',
    benefits: 'Chude źródło białka. Łatwo strawny. Dobry dla psów z wrażliwym żołądkiem.',
    risks: 'Usuń kości i skórę. Podawaj bez przypraw i dodatków.',
    vetChecked: true
  },
  {
    id: '52',
    name: 'Tuńczyk',
    slug: 'tunczyk',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1582013108017-d815d7378bb0?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Tuńczyk może być podawany psom w małych ilościach.',
    benefits: 'Bogate źródło białka i kwasów omega-3.',
    risks: 'Podawaj rzadko ze względu na zawartość rtęci. Wybieraj tuńczyka w wodzie, nie w oleju.',
    vetChecked: true
  },
  {
    id: '53',
    name: 'Szparagi gotowane',
    slug: 'szparagi-gotowane',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1515589425561-4d3401c37c89?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowane szparagi są bezpieczne dla psów.',
    benefits: 'Bogate w witaminy K, B1, B2, C i E. Zawierają przeciwutleniacze.',
    risks: 'Mogą powodować lekkie problemy żołądkowe u niektórych psów.',
    vetChecked: true
  },
  {
    id: '54',
    name: 'Ksylitol',
    slug: 'ksylitol',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1581384721878-62d042baec8f?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Ksylitol jest bardzo toksyczny dla psów.',
    risks: 'Może powodować gwałtowny spadek cukru we krwi, niewydolność wątroby, a nawet śmierć.',
    vetChecked: true
  },
  {
    id: '55',
    name: 'Quinoa gotowana',
    slug: 'quinoa-gotowana',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1595905487673-45f7b3d36d01?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowana quinoa jest bezpieczna dla psów.',
    benefits: 'Bogate źródło białka roślinnego i aminokwasów. Zawiera żelazo i błonnik.',
    risks: 'Wprowadzaj stopniowo do diety. Podawaj bez przypraw.',
    vetChecked: true
  },
  {
    id: '56',
    name: 'Wieprzowina surowa',
    slug: 'wieprzowina-surowa',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Surowa wieprzowina może być niebezpieczna dla psów.',
    risks: 'Może zawierać pasożyty i bakterie. Ryzyko choroby Aujeszkyego.',
    vetChecked: true
  },
  {
    id: '57',
    name: 'Wieprzowina gotowana',
    slug: 'wieprzowina-gotowana',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1624174503860-478619028ab3?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowana wieprzowina jest bezpieczna dla psów.',
    benefits: 'Źródło białka i witamin z grupy B.',
    risks: 'Usuń tłuszcz i kości. Podawaj bez przypraw i w umiarkowanych ilościach.',
    vetChecked: true
  },
  {
    id: '58',
    name: 'Morele',
    slug: 'morele',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1501746877-14782b958e5f?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Morele są bezpieczne dla psów bez pestek.',
    benefits: 'Bogate w beta-karoten i błonnik. Zawierają witaminy A i C.',
    risks: 'Usuń pestkę, która zawiera cyjanek. Podawaj w małych ilościach.',
    vetChecked: true
  },
  {
    id: '59',
    name: 'Śliwki',
    slug: 'sliwki',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1603408209093-cd3c9af497d5?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Śliwki mogą być szkodliwe dla psów.',
    risks: 'Pestki zawierają cyjanek. Mogą powodować problemy żołądkowe i zatwardzenie.',
    vetChecked: true
  },
  {
    id: '60',
    name: 'Seler',
    slug: 'seler',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Seler jest bezpieczny i zdrowy dla psów.',
    benefits: 'Niskokaloryczny. Zawiera witaminy A, C i K. Pomaga w świeżym oddechu.',
    risks: 'Pokrój na małe kawałki, aby uniknąć zadławienia.',
    vetChecked: true
  },
  {
    id: '61',
    name: 'Oliwki',
    slug: 'oliwki',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1593034509785-5b17ba49f683?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Oliwki są bezpieczne dla psów w małych ilościach.',
    benefits: 'Zawierają zdrowe tłuszcze i przeciwutleniacze.',
    risks: 'Usuń pestkę. Unikaj oliwek marynowanych i solonych.',
    vetChecked: true
  },
  {
    id: '62',
    name: 'Pistacje',
    slug: 'pistacje',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Pistacje nie są zalecane dla psów.',
    risks: 'Wysokie ryzyko zadławienia. Mogą zawierać pleśnie. Wysoka zawartość tłuszczu.',
    vetChecked: true
  },
  {
    id: '63',
    name: 'Fasola gotowana',
    slug: 'fasola-gotowana',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowana fasola jest bezpieczna dla psów.',
    benefits: 'Bogate źródło białka roślinnego i błonnika. Zawiera witaminy z grupy B.',
    risks: 'Nigdy nie podawaj surowej. Może powodować wzdęcia.',
    vetChecked: true
  },
  {
    id: '64',
    name: 'Fasola surowa',
    slug: 'fasola-surowa',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Surowa fasola jest toksyczna dla psów.',
    risks: 'Zawiera naturalne toksyny. Może powodować silne zatrucie pokarmowe.',
    vetChecked: true
  },
  {
    id: '65',
    name: 'Borówki',
    slug: 'borowki',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Borówki są bezpieczne i bardzo zdrowe dla psów.',
    benefits: 'Bogate w przeciwutleniacze i witaminę C. Wspierają funkcje poznawcze.',
    vetChecked: true
  },
  {
    id: '66',
    name: 'Jeżyny',
    slug: 'jezyny',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1615218370629-da07db3571a4?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Jeżyny są bezpieczne dla psów.',
    benefits: 'Zawierają przeciwutleniacze i witaminy. Wspierają układ odpornościowy.',
    risks: 'Podawaj w małych ilościach ze względu na zawartość cukru.',
    vetChecked: true
  },
  {
    id: '67',
    name: 'Imbir',
    slug: 'imbir',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1573414405995-1e663fc314e4?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Imbir w małych ilościach jest bezpieczny dla psów.',
    benefits: 'Może łagodzić nudności i wspierać trawienie.',
    risks: 'Podawaj bardzo małe ilości. Może drażnić żołądek w większych dawkach.',
    vetChecked: true
  },
  {
    id: '68',
    name: 'Kurkuma',
    slug: 'kurkuma',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Kurkuma w małych ilościach jest bezpieczna dla psów.',
    benefits: 'Właściwości przeciwzapalne. Wspiera układ odpornościowy.',
    risks: 'Podawaj małe ilości. Może barwić sierść.',
    vetChecked: true
  },
  {
    id: '69',
    name: 'Pieprz',
    slug: 'pieprz',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Pieprz nie jest zalecany dla psów.',
    risks: 'Może podrażniać układ pokarmowy. Powoduje dyskomfort i problemy trawienne.',
    vetChecked: true
  },
  {
    id: '70',
    name: 'Sól',
    slug: 'sol',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1518110925495-7f3fc2875f5e?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Nadmiar soli jest szkodliwy dla psów.',
    risks: 'Może prowadzić do odwodnienia i problemów z nerkami. Ryzyko zatrucia sodem.',
    vetChecked: true
  },
  {
    id: '71',
    name: 'Cukier',
    slug: 'cukier',
    isSafe: false,
    image: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&q=80&w=600',
    overview: 'Nie! Cukier nie jest zalecany dla psów.',
    risks: 'Może prowadzić do otyłości, problemów z zębami i cukrzycy.',
    vetChecked: true
  },
  {
    id: '72',
    name: 'Kokos',
    slug: 'kokos',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1581418983065-214cb5e42018?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Kokos jest bezpieczny dla psów w małych ilościach.',
    benefits: 'Zawiera zdrowe tłuszcze i przeciwutleniacze.',
    risks: 'Podawaj małe ilości. Może powodować problemy żołądkowe w większych ilościach.',
    vetChecked: true
  },
  {
    id: '73',
    name: 'Siemię lniane',
    slug: 'siemie-lniane',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1615485925763-86786288908a?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Siemię lniane jest bezpieczne i zdrowe dla psów.',
    benefits: 'Bogate w kwasy omega-3. Wspiera zdrowie skóry i sierści.',
    risks: 'Podawaj zmielone. Wprowadzaj stopniowo do diety.',
    vetChecked: true
  },
  {
    id: '74',
    name: 'Nasiona chia',
    slug: 'nasiona-chia',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1541425217130-f85a40e6868c?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Nasiona chia są bezpieczne dla psów.',
    benefits: 'Bogate w omega-3, białko i błonnik.',
    risks: 'Namocz przed podaniem. Wprowadzaj stopniowo do diety.',
    vetChecked: true
  },
  {
    id: '75',
    name: 'Komosa ryżowa gotowana',
    slug: 'komosa-ryzowa-gotowana',
    isSafe: true,
    image: 'https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?auto=format&fit=crop&q=80&w=600',
    overview: 'Tak! Gotowana komosa ryżowa jest bezpieczna dla psów.',
    benefits: 'Bezglutenowe źródło białka i węglowodanów. Zawiera żelazo i magnez.',
    risks: 'Podawaj bez przypraw. Wprowadzaj stopniowo do diety.',
    vetChecked: true
  }
];
