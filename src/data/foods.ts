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
];