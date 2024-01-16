import ProductCard from '@/components/product/ProductCard';
import { ArrowBigUpDash } from 'lucide-react';
import useHttp from '@/hooks/useHttp';
import Shimmer from '@/components/product/Shimmer';
import Error from '@/components/product/Error';
const Body = () => {
  const { isLoading, error, data } = useHttp({
    url: `${import.meta.env.VITE_API_URL}meals`,
    initialValue: [],
  });
  if (error) {
    return <Error error={error} />;
  }
  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className='body'>
          <ul className='body-grid'>
            {data.map((item) => (
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
      )}
    </>
  );
};

export default Body;
