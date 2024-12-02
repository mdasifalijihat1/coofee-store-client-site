import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllCoffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                setCoffees(coffees.filter((coffee) => coffee._id !== _id));
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your coffee has been deleted.",
                  "success"
                );
              } else {
                Swal.fire("Error!", "Failed to delete the coffee.", "error");
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your coffee is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        ☕ Sip & Savor --- Our Popular Products --- ({coffees.length})
      </h1>
      <button className="block mx-auto mb-8 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow">
        Add Coffee ➕
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4"
          >
            <div className="w-1/3">
              <img
                src={coffee.photo}
                alt={coffee.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h3 className="text-xl font-bold text-gray-800">
                Name: {coffee.name}
              </h3>
              <p className="text-gray-700">Chef: {coffee.chef}</p>
              <p className="text-gray-700">Price: {coffee.price}</p>
              <div className="mt-4 flex space-x-2">
                {/* <Link to={`/updatecoffee/${_id}`}
                  className="py-1 px-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-md shadow"
                >
                  ✏️ Edit
                </Link> */}
                <Link
                  to={`/updatecoffee/${coffee._id}`}
                  className="py-1 px-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-md shadow"
                >
                  ✏️ Edit
                </Link>

                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="py-1 px-3 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-md shadow"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
