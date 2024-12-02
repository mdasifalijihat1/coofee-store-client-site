import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2"; // Ensure SweetAlert2 is imported

const Users = () => {
  const loadedUser = useLoaderData(); // Preloaded user data
  const [users, setUsers] = useState(loadedUser); // Manage user data in state

  const fallbackAvatar = "https://via.placeholder.com/100?text=Avatar"; // Fallback image for profile pictures

  // Handle Delete User
  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setUsers(users.filter((user) => user._id !== id));
          await swalWithBootstrapButtons.fire(
            "Deleted!",
            "The user has been deleted.",
            "success"
          );
        } else {
          swalWithBootstrapButtons.fire(
            "Failed!",
            "Failed to delete the user.",
            "error"
          );
        }
      } catch (error) {
        swalWithBootstrapButtons.fire(
          "Error!",
          "Something went wrong. Please try again later.",
          "error"
        );
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        "Cancelled",
        "The user is safe :)",
        "error"
      );
    }
  };

  // Handle Edit User (Placeholder)
  const handleEdit = (id) => {
    alert(`Edit user functionality for ID: ${id}`);
    // Redirect to an edit page or open a modal here
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#333" }}>
        Users ({users.length})
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Profile Picture */}
            <div
              style={{
                backgroundColor: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "150px",
                overflow: "hidden",
              }}
            >
              <img
                src={user.profilePicture || fallbackAvatar}
                alt={`${user.name}'s profile`}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #ddd",
                }}
                onError={(e) => (e.target.src = fallbackAvatar)}
              />
            </div>

            {/* User Info */}
            <div style={{ padding: "16px" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                {user.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                <strong>Email:</strong> {user.email}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                <strong>ID:</strong> {user._id}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                {user.lastSignInTime}
              </p>

              {/* Action Buttons */}
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleEdit(user._id)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#FF4D4D",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
