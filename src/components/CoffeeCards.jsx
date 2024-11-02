import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );

      setCoffees(filteredByCategory);
    } else {
      setCoffees(data);
    }
  }, [data, category]);

  return (
   <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>

    <button onClick={() => navigate('/coffees')} className="btn btn-warning text-white font-bold">View All</button>
   </>
  );
};

export default CoffeeCards;
