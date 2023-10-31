import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const AddFriend = () => {

  const {allUsers, setAllUsers} = useContext(UserContext)
  const [error, setError] = useState('')
  const [friendInputs, setFriendInputs] = useState({
    id:allUsers.length + 1,
    username: '',
    password: 'default',
    image: 'https://images3.alphacoders.com/273/thumbbig-273289.webp',
    isOnline: false,
    chatMessages: []
  })

  const handleChange = (e) => {
    setFriendInputs({...friendInputs, [e.target.name]: e.target.value})
  }

  const check = allUsers.map((us) => us.username === friendInputs.username).includes(true)

  const handleAddFriend = (e) => {
    e.preventDefault();
    if(friendInputs.username.length === 0) {
      setError('Can`t be empty.')
    } else if(check) {
      setError('User already exists in your list.')
    } else {
      setAllUsers([...allUsers, friendInputs])
      setError('User has successfully added.')
    }
  }

  return (
    <div className="w-screen h-fit flex justify-center font-mono">
      <div className="flex flex-col bg-slate-300 p-4 mt-16 rounded-lg w-1/2">
        <div className="text-center border-b border-slate-500 p-2 flex flex-row items-center">
          <Link to="/messages" className="text-5xl text-red-900 ml-1 font-bold">
            &larr;
          </Link>
          <p className="text-2xl font-bold ml-auto mr-auto text-green-950 sms:text-lg">
            Add a New Friend
          </p>
        </div>
        <div className="mt-2">
          <form className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-start relative">
              <label className="font-bold xss:text-xs">friend`s username:</label>
              <input type="text" placeholder="username" name="username" className="p-1 rounded-md xss:w-36" onChange={handleChange}/>
              <div className="absolute -bottom-4 xss:-left-3">
                <p className={`text-xs uppercase w-64 font-bold ${error.split(' ').includes('successfully') ? 'text-green-900' : 'text-red-900'}`}>{error}</p>
              </div>
            </div>
            <button className="bg-green-900 p-1 pl-4 pr-4 text-slate-50 rounded-md font-bold mt-2" onClick={handleAddFriend}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
