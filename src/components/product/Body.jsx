import ProductCard from '@/components/product/ProductCard';
import useMeals from '@/hooks/useMeals';
import { ArrowBigUpDash } from 'lucide-react';

const Body = ({ items = [] }) => {
  const { meals } = useMeals();

  return (
    <div className='body'>
      <ul className='body-grid'>
        {meals.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
      <button
        className='fixed bottom-4 right-4 bg-zinc-900 text-white rounded-full p-2 shadow-md hover:bg-zinc-800 transition duration-300 ease-in-out shadow-slate-50'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <ArrowBigUpDash size={32} />
      </button>
    </div>
  );
};

export default Body;
