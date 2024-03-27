import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoGoogleplus } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../../redux/reducers/Authentication";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/helper";


function SignInForm() {
  let route = useNavigate()
  const dispatch = useDispatch();
  // const [state, setState] = React.useState({
  //   email: "",
  //   password: ""
  // });
  // console.log(state, "stateeeeeeeee");

  // const handleChange = evt => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // };
  const Schema = yup.object().shape({
    email: yup.string().email().required("Please Enter Email!"),
    password: yup.string().min(6).max(10).required("Please Enter Password!"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const onSubmit = (data) => {
    console.log(data);
    const finaldata =  {
      ...data,
      active: true
      
    }
    
    // Clear the form fields after submission
    dispatch(handleLogin(finaldata))
    route(routes.SEARCH)
    reset();
    
    // setState();
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="sign-in-text">Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <TiSocialFacebook />
          </a>
          <a href="#" className="social">
            <IoLogoGoogleplus />
          </a>
          <a href="#" className="social">
            <LiaLinkedinIn />
          </a>
        </div>
        <span>or use your account</span>
        <input 
        {...register("email")} 
        placeholder="Email"  
        className="input" 
        />
        {errors.email && (
        <p className="error-message">{errors.email.message}</p>
        )}
        <input {...register("password")} placeholder="Password" type="password"  className="input" />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
        <a href="#">Forgot your password?</a>
        <button type="submit" className="sign-in-button" >Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
