import React, { useState } from 'react'


function Login() {
    const [formData, setFormData] =useState({
        fullname:"",
        email:"",
        password:""
    })

    const [formErrors, setFormErrors] =useState({})

    const handleChange = (e) => {
        const { name, value} =e.target
        setFormData({...formData, [name]: value})
    };

    const validateForm = () =>{
        const errors ={}
        if(!formData.fullname){
            errors.fullname="Fullname is required"
        } else if (formData.fullname.length > 15){
            errors.fullname="Fullname cannot be more than 15 characters"
        }

        if(!formData.email){
            errors.email="Email is required"
        } else if(!formData.email.includes("@")){
            errors.email = "Invalid Email"
        }

        if(!formData.password){
            errors.password = "Password is required"
        } else if(formData.password.length < 5 || formData.password.length > 5){
            errors.password= "Password should not be less than or more than 5 characters";
        }
        setFormErrors(errors);
        return errors;
    };
    
    const onSubmit =(e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        const errorKeyLength =Object.keys(validationErrors).length;
        if(errorKeyLength > 0){
            return;
        }

        console.log(formData);
        // Submitting to backend through API
    };

    
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign in to your account
          </h2>

          <form className="space-y-4" onSubmit={onSubmit}>
                {/* Fullname */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Full Name
              </label>
              <input
                type="fullname"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Atom Boi" 
                value={formData.fullname}
                onChange={handleChange}
              />
              {formErrors.fullname&& (
                  <p className='text-red-600'> {formErrors.fullname} </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
              />
                {formErrors.email&& (
                  <p className='text-red-600'> {formErrors.email} </p>
              )}
            </div>

            

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={formData.email}
                onChange={handleChange}
              />
                {formErrors.password&& (
                  <p className='text-red-600'> {formErrors.password} </p>
              )}
            </div>

            {/* Submit */}
            <div>
              <button
              // onClick={changeState}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

