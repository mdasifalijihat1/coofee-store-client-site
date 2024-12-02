import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard'; // Ensure you import the updated CoffeeCard component

const Home = () => {
    const loadCoffee = useLoaderData();

    return (
        <div>
            {/* Home Banner */}
            <div className="bg-blue-500 text-white p-8 text-center">
                <h1 className="text-3xl font-bold">Welcome to the Coffee Shop</h1>
                <p className="mt-2 text-lg">Explore our variety of coffee options.</p>
            </div>

            {/* Coffee Count */}
            <div className="text-center my-6">
                <h3 className="text-2xl">Total Coffees: {loadCoffee.length}</h3>
            </div>

            {/* Coffee Cards with AOS Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {loadCoffee.map((coffee) => (
                    <div 
                        key={coffee.id} 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                    >
                        <CoffeeCard coffee={coffee} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
