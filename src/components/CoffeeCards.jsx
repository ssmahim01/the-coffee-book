import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
    const coffees = useLoaderData();
    // console.log(coffees);
    const {category} = useParams();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCards;