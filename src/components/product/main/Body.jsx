import ProductCard from '@/components/product/main/ProductCard';
import { ArrowBigUpDash } from 'lucide-react';
import useHttp from '@/hooks/useHttp';
import Shimmer from '@/components/product/main/Shimmer';
import Error from '@/components/product/main/Error';
const Body = () => {
  const { isLoading, error, data } = useHttp({
    url: `${import.meta.env.VITE_API_URL}/meals`,
    initialValue: [],
  });
  if (error) {
    return (
      <div className='flex flex-col justify-center items-center w-full'>
        <Error error={error} />
      </div>
    );
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
            className='up-button'
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
