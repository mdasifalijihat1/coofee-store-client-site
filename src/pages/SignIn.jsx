import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const { singInUser } = useContext(AuthContext); // Moved useContext inside the component

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value; // Accessing the form data
    const password = e.target.password.value;
    console.log("Sign in form data:", { email, password });

    singInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update last login time 
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = {email, lastSignInTime};

       fetch(`http://localhost:5000/users`, {
        method: 'PATCH',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(loginInfo)
       })
       .then(res => res.json())
       .then(data => {
        console.log('sing in fnfo update in db', data)
       })


      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card w-96 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSignIn}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full mb-4">
              Login
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center text-sm">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm mt-2">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
