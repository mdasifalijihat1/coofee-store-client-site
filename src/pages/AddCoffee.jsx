import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value; // Capture the price field
    const newCoffee = { name, chef, supplier, taste, category, details, photo, price };
    console.log(newCoffee);

    // Send data to the server
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="max-w-3xl w-full bg-[#F4F3F0] shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-gray-600 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="grid grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="name" className="flex text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Americano Coffee"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Chef Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="chef" className="flex text-sm font-medium text-gray-700">
              Chef
            </label>
            <input
              id="chef"
              name="chef"
              type="text"
              placeholder="Mr. Matin Paul"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Supplier Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="supplier" className="flex text-sm font-medium text-gray-700">
              Supplier
            </label>
            <input
              id="supplier"
              name="supplier"
              type="text"
              placeholder="Cappu Authorizer"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Taste Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="taste" className="flex text-sm font-medium text-gray-700">
              Taste
            </label>
            <input
              id="taste"
              name="taste"
              type="text"
              placeholder="Sweet and hot"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Category Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="category" className="flex text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Americano"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Details Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="details" className="flex text-sm font-medium text-gray-700">
              Details
            </label>
            <input
              id="details"
              name="details"
              type="text"
              placeholder="Espresso with hot water"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Price Field */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="price" className="flex text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="5.99"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Photo URL Field */}
          <div className="col-span-2">
            <label htmlFor="photo" className="flex text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              placeholder="https://i.ibb.co/PgqMPrg/11.png"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-brown-500 focus:border-brown-500 sm:text-sm p-2"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white hover:bg-brown-700 text-black font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
            >
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
