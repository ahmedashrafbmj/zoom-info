import React,{useState} from 'react'
import SignInForm from './SignIn';
import './style.css'
// import "./styles.css";
const Login = () => {
    // const [type, setType] = useState("signIn");
  // const handleOnClick = text => {
  //   if (text !== type) {
  //     setType(text);
  //     return;
  //   }
  // };
  // const containerClass =
  //   "container " + (type === "signUp" ? "right-panel-active" : "");
    return(
        <div className="App">
        {/* <h2>Sign in Form</h2> */}
        <div className='login_content'>
          {/* <SignUpForm /> */}
          <SignInForm />
              </div>
            </div>        
    );


};
export default Login