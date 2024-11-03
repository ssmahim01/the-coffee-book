import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSortList = sortType => {
        if(sortType === 'rating'){
            const sortedRatingList = [...data].sort((a, b) => b.rating - a.rating);
            setCoffees(sortedRatingList);
        }else if(sortType === 'popularity'){
            const sortedPopularityList = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sortedPopularityList);
        }
    }

  return (
    <>
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
        <div>
            <h1 className="lg:text-3xl text-2xl font-semibold">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
        </div>
        <div className="space-x-5 flex md:py-0 py-4">
            <button onClick={() => handleSortList('popularity')} className="btn btn-warning text-white lg:font-bold">Sort By Popularity</button>
            <button onClick={() => handleSortList('rating')} className="btn btn-warning text-white lg:font-bold">Sort By Rating</button>
        </div>
    </div>

    <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
    </>
  );
};

export default Coffees;