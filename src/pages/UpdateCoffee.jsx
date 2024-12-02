import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedCoffee = {
      name: event.target.name.value,
      chef: event.target.chef.value,
      price: event.target.price.value,
      photo: event.target.photo.value,
    };

    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // Show success alert using SweetAlert2
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#fbbf24", // Yellow color for confirm button
          });
        }
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update coffee. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Coffee: {coffee.name}
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Coffee Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Coffee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={coffee.name}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Chef Name */}
          <div>
            <label
              htmlFor="chef"
              className="block text-sm font-medium text-gray-700"
            >
              Chef Name
            </label>
            <input
              type="text"
              id="chef"
              name="chef"
              defaultValue={coffee.chef}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={coffee.price}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              defaultValue={coffee.photo}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
