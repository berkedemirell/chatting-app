import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="mt-24 flex items-center justify-center">
        <p className="text-center text-2xl font-bold text-red-900 sms:text-xl sms:w-52">User Not Found(404). <Link to='/' className="underline">Please try to login again.</Link></p>
      </div>
    </div>
  );
};

export default ErrorPage;
