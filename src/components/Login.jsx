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

  const selected = allUsers.filter((u) => u.username === userInputs.username);

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

  const handleSelectFromUserList = (e) => {
    e.preventDefault();
    setUserInputs({
      username: e.target.id,
      password: e.target.className.split(' ')[0]
    });
    setIsUsersDropped(false)
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center font-mono">
      <div className="relative">
        <button onClick={isDropppped} className="font-bold underline text-slate-100">
          User List
        </button>
        {isUsersDropped && (
          <div className="absolute flex flex-col items-start gap-2 justify-start left-24 bg-slate-950 w-deneme mmd:w-fit rounded-md p-1 pl-2 z-10 mmd:-left-24">
            {allUsers.map((obj) => {
              return (
                <div key={obj.id} className="mmd:w-fit">
                  <button 
                    id={obj.username}
                    className={`${obj.password} font-bold text-slate-950 p-1 mmd:text-xs text-start bg-slate-50 rounded-md`}
                    onClick={handleSelectFromUserList}
                  >
                    {obj.id}. Username: {obj.username} / Password:{" "}
                    {obj.password}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <form className="flex flex-col items-center gap-4 p-10 rounded-md bg-slate-950 text-slate-50 relative">
        <div className="flex flex-col">
          <label className="text-xs uppercase pl-1">username:</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={userInputs.username}
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
            value={userInputs.password}
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
