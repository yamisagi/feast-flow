import { getMeals } from '@/services/fetchMeals';
import { useEffect, useState } from 'react';

const useMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals(setMeals);
  }, []);

  return { meals };
};
export default useMeals;
