import { useState } from "react";
import axios from "axios";

function App() {
  const [food, setFood] = useState("");
  const [data, setData] = useState(null);
  const [foods, setFoods] = useState([]);

  const searchFood = async () => {
    try {
      const response = await axios.get(
        `https://apifruits-back.onrender.com/food/${food}`
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getFoods = async () => {

  try {

    const response = await axios.get(
      "https://apifruits-back.onrender.com/foods"
    );

    setFoods(response.data);

  } catch (error) {

    console.error(error);

  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      

      <h1 className="text-4xl font-bold mb-6">
        Nutri QR
      </h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Ingresa un alimento"
          className="border p-3 rounded-lg w-80"
          onChange={(e) => setFood(e.target.value)}
        />

        <button
          onClick={searchFood}
          className="bg-green-500 text-white px-5 py-3 rounded-lg"
        >
          Buscar
        </button>

        <button
  onClick={getFoods}
  className="bg-blue-500 text-white px-5 py-3 rounded-lg"
>
  Mostrar lista
</button>
      </div>
      

      {data && (
  <div className="bg-white mt-10 p-6 rounded-xl shadow-lg w-96">

    <h2 className="text-2xl text-black font-bold mb-4">
      {data.name}
    </h2>

    <div className="space-y-2">

      <p>🔥 Calorías: {data.calories} kcal</p>

      <p>🥩 Proteínas: {data.protein} g</p>

      <p>🧈 Grasas: {data.fat} g</p>

      <p>🍞 Carbohidratos: {data.carbs} g</p>

      <p>🌾 Fibra: {data.fiber} g</p>

      <p>🍬 Azúcar: {data.sugar} g</p>

      <p>🩸 Hierro: {data.iron} mg</p>

      <p>🦴 Calcio: {data.calcium} mg</p>

      <p>🍊 Vitamina C: {data.vitaminC} mg</p>

    </div>
  </div>
)}

{foods.length > 0 && (

  <div className="bg-white mt-10 p-6 rounded-xl shadow-lg w-96">

    <h2 className="text-2xl font-bold mb-4">
      Lista de alimentos
    </h2>

    <ul className="space-y-2">

      {foods.map((food) => (

        <li
          key={food.id}
          className="border p-2 rounded cursor-pointer hover:bg-gray-100"
          onClick={async () => {

  setFood(food.name);

  try {

    const response = await axios.get(
      `https://apifruits-back.onrender.com/food/${food.name}`
    );

    setData(response.data);

  } catch (error) {

    console.error(error);

  }

}}
        >
          {food.name}
        </li>

      ))}

    </ul>

  </div>

)}
    </div>
  );
}

export default App;