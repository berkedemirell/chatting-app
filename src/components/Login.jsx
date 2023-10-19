import { useContext, useState } from "react";
import UserContext from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { setUser, allUsers } = useContext(UserContext);
  const [isUsersDropped, setIsUsersDropped] = useState(false);

  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value });
  };

  const selected = allUsers.filter((u) => u.password === userInputs.password);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (userInputs.password.length === 0) |
      (userInputs.username.length === 0)
    ) {
      setError({ isError: true, message: "Fill all inputs" });
    } else if (
      (selected[0]?.username !== userInputs.username) |
      (selected[0]?.password !== userInputs.password)
    ) {
      setError({ isError: true, message: "wrong username or password" });
    } else {
      selected[0].isOnline = true;
      setUser(selected[0]);
      navigate("/messages");
    }
  };

  const isDropppped = (e) => {
    e.preventDefault();
    setIsUsersDropped((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center font-mono">
      <div className="relative">
        <button onClick={isDropppped} className="font-bold underline">
          User List
        </button>
        {isUsersDropped && (
          <div className="absolute left-24 bg-indigo-700 w-deneme rounded-md p-1 pl-2 z-10">
            {allUsers.map((obj) => {
              return (
                <div key={obj.id} className="font-bold text-slate-50">
                  <span>
                    {obj.id}. Username: {obj.username} /{" "}
                  </span>
                  <span>Password: {obj.password}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <form className="flex flex-col items-center gap-4 border border-slate-950 p-10 rounded-md bg-slate-950 text-slate-50 relative">
        <div className="flex flex-col">
          <label className="text-xs uppercase pl-1">username:</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            className="bg-slate-300 p-1 rounded-md text-slate-950"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs uppercase pl-1">password:</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            className="bg-slate-300 p-1 rounded-md text-slate-950"
            onChange={handleChange}
            required
          />
        </div>
        <div className="absolute bottom-24 text-center">
          {error?.isError && (
            <span className="text-xs uppercase text-red-500">
              {error?.message}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-slate-300 font-bold text-slate-950 p-1 pl-6 pr-6 uppercase text-lg rounded-md hover:"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
