import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    return (
        <Link 
            to={`/allcoffee`}  // You can change this to a more specific route if needed
            className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <div className="overflow-hidden rounded-md">
                <img 
                    src={coffee.photo} 
                    alt={coffee.name} 
                    className="w-full h-48 object-cover"  // Adjust image height here
                />
            </div>

            <h4 className="mt-4 text-xl font-semibold">{coffee.name}</h4>
            <p className="mt-2 text-gray-600">{coffee.chef}</p>

            {/* Display the coffee price */}
            <p className="mt-2 text-lg font-semibold text-gray-900">
                ${coffee.price} {/* Assuming price is a number */}
            </p>
        </Link>
    );
};

export default CoffeeCard;
