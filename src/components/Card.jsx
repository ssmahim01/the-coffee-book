const Card = ({coffee}) => {
    const {id, name, image, category, rating, popularity, origin, type} = coffee || {};

    return (
        <div>
           {name}
        </div>
    );
};

export default Card;