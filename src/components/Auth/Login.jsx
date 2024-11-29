import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ handleLogin }) => {
  // two-way binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handling the form
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center text-gray-300">
      <div className="flex-col justify-evenly items-center gap-y-10 w-1/4">
        <h1 className="text-[3rem] text-red-800 font-black text-center mb-8 drop-shadow-[0_0_30px_rgba(255,38,38,1)] font-['Gilroy']">
          Log-In
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">📭</span>
            <input
              className="w-full px-4 py-2 pl-12 outline-none bg-transparent border-2 border-red-900 rounded-full placeholder:font-serif"
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">🔐</span>
            <input
              className="w-full px-4 py-2 pl-12 outline-none bg-transparent border-2 border-red-900 rounded-full placeholder:font-serif"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex gap-4 items-center justify-start p-[2px]">
            <input type="checkbox" name="" id="" />
            <h4 className="text-gray-500 cursor-default ">Remember Me</h4>
          </div>
          <button
            className="bg-red-900 px-4 py-2 rounded-xl border-2 border-red-700 text-xl text-white font-black text-center mb-8 drop-shadow-[0px_0px_20px_rgba(220,38,38,1)] font-['Gilroy'] mt-2"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
