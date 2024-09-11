
import React, { useContext, useState } from 'react';
import { UserContext } from './CreateLoginContext';

const LoginPage: React.FC = () => {
  const Context = useContext(UserContext);
if(!Context){
  throw new Error('Context Not Found')
}
const {isLogin,setIsLogin} = Context;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const existingUser = {
    existingEmail: 'hamza',
    existingPassword: 'qwerty',
  };

  const checkUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (existingUser.existingEmail === email && existingUser.existingPassword === password) {
      console.log('userMatched');
      alert("You Are LoggedIn")
     setEmail('')
setPassword('') 
setIsLogin(true)    
console.log(isLogin)
    } 
    else {
      setIsLogin(false)  
      console.log('userNotMatched');
      alert("IncorrectUserNamePassword")
    
    }
  };

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="bg-transparent  text-white  justify-center box-border h-full flex flex-col 
          text-base w-full py-4 
   sm:text-xl sm:p-8 sm:w-3/4
    md:text-2xl md:p-10 md:w-3/4
    lg:text-3xl lg:p-12 lg:w-8/12
    xl:text-3xl xl:p-14 xl:w-7/12
    2xl:text-3xl 2xl:p-16 2xl:w-6/12"
        >
          <h1>Welcome to Daraz! Please login.
        
            </h1>
          <form onSubmit={checkUser}
            className="w-full h-full my-5 p-12
    md:p-14
    lg:p-16"
          >
            {isLogin? 'true':'false'}
            <h1>Email*</h1>
            <input
            value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-gray-500 border-2 text-black my-3 border-black rounded-md w-full
h-11 p-2
md:h-12 
lg:h-16 
xl:h-16 
2xl:h-20"
              type="text"
              placeholder="Enter Email"
            />
            <h1 className="mt-2">Password*</h1>
            <input
            value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-gray-500 border-2 text-black my-3 border-black rounded-md w-full
h-11 p-2
md:h-12 
lg:h-16 
xl:h-16 
2xl:h-20"
              type="password"
              placeholder="Enter Password"
            />
            <input
              
              className="w-full mt-10 rounded-md bg-orange-700 hover:bg-orange-800
h-11 
md:h-12 
lg:h-16 
xl:h-16 
2xl:h-20"
              type="submit"
              value="LOGIN"
            />
          </form>
        
        </div>
      </div>
    </>
  );
};

export default LoginPage;
