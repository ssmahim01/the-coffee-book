import { Link } from "react-router-dom";

const Card = ({coffee}) => {
    const {id, name, image, category, rating, popularity, origin, type} = coffee || {};

    return (
        <div className="flex flex-col relative shadow-lg">
           <Link to={`/category/${id}`} className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"></Link>

           <figure className="w-full h-52 overflow-hidden">
            <img className="rounded-2xl" src={image} alt={name} />
           </figure>

           <div className="space-y-2 p-3">
            <h1 className="text-xl font-medium">Name: {name}</h1>
            <div className="text-gray-600 space-y-2">
            <p>Category: {category}</p>
            <p>Type: {type}</p>
            <p>Origin: {origin}</p>
            <p>Rating: {rating}</p>
            <p>Popularity: {popularity}</p>
            </div>
           </div>
        </div>
    );
};

export default Card;