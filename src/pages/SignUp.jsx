import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault();
        
        const name =e.target.name.value;
        const email =e.target.email.value;
        const password = e.target.password.value;
        console.log('sign up form', email, password, name)
        createUser(email, password)
        .then(result => {
            console.log(result.user);

            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name, email, createdAt}

            // save new user info to the databases
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers:{
                'content-type' : 'application/json'
              },
              body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log('user create new data db', data)
              if(data.insertedId){
                console.log('user created in data ')
              }
            })
        })
        .catch(error => {
            console.log('error', error)
        })
    }


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card w-96 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSignUp} >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
            </div>
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
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
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
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
            </div>
            <button className="btn btn-primary w-full mb-4">Sign Up</button>
          </form>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
