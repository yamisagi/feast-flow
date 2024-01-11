export const getMeals = async (setMeals) => {
  try {
    const response = await fetch('http://localhost:3000/meals');
    const data = await response.json();
    console.log(data);
    setMeals(data);
  } catch (error) {
    console.log(error);
  }
};
