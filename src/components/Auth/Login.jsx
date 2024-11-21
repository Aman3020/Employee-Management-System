import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    let formIsValid = true;
    let emailError = '';
    let passwordError = '';

    // Email validation
    if (!email) {
      emailError = 'Email is required';
      formIsValid = false;
    } else if (!emailRegex.test(email)) {
      emailError = 'Invalid email format';
      formIsValid = false;
    }

    // Password validation
    if (!password) {
      passwordError = 'Password is required';
      formIsValid = false;
    } else if (password.length < 3) {
      passwordError = 'Password must be at least 3 characters';
      formIsValid = false;
    }

    setErrors({ email: emailError, password: passwordError });

    return formIsValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      handleLogin(email, password);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="border-2 border-emerald-600 rounded-xl p-10 bg-white shadow-lg w-96">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <h2 className="text-3xl font-semibold text-emerald-600">Login</h2>
          
          {/* Email Input */}
          <div className="w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-600 transition-all"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="w-full">
            <input
            
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full outline-none bg-transparent border-2 text-black border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-600 transition-all"
              type="password"
              placeholder="Enter password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            className="w-full mt-4 bg-emerald-600 text-white font-semibold text-lg py-2 px-6 rounded-full hover:bg-emerald-700 transition-all"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
