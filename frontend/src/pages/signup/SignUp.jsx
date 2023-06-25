import { Link } from 'react-router-dom';
import {useRef, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import Navbar from '../../pages/home/home';
import FormInput from "../../Components/forminput/FormInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<link href='https://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet'></link>


const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    aadharCard: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Enter first name followed by last name",
      label: "Full Name",
      pattern: "^[A-Za-z]{2,} [A-Za-z]{1,}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid Email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "tel",
      placeholder: "Mobile Number",
      errorMessage: "Enter a valid mobile number!",
      label: "Mobile Number",
      pattern: `^[0-9]{10}$`,
      required: true,
    },
    {
        id: 4,
        name: "aadharCard",
        type: "file",
        placeholder: "Aadhar Card",
        label: "AadharCard",
        required: true,
      },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(values.aadharCard.split("\\"))
    const aadhar = values.aadharCard.split("\\")
    
    console.log(aadhar)
    
      const user = {
          name : values.name,
          email : values.email,
          mobile : values.mobile,
          aadharCard : aadhar[aadhar.length - 1],
          password : values.password
      }
      console.log(user);
      const headers = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      await fetch('http://localhost:3030/addUser', headers)
      .then(res => {
        resStatus = res.status
        return res.json()
      })
      .then(res => {
        switch (resStatus) {
          // case 201:
          //   console.log('success')
          //   break
          // case 400:
          //   if (res.code === 'ValidationFailed') {
          //     console.log(res.fieldMessages)
          //   } else {
          //     console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
          //   }
          //   break
          case 500:
            console.log('Email id exist!')
            alert("Email id already exist ;( Use different Email id!")
            break
          default:
            alert("Account created successfully ;)");
            navigate('/');
        }
      })
      .catch(err => {
        console.error(err)
      })


      //.then(e => e.json()).then(e => console.log(e));
      // alert("Successfully Inserted !!!");
      
    // console.log(user);

    //   if(fetch('http://localhost:3030/addUser', headers).then(e => e.json()).then(e => console.log(e))){
    //     alert("Successfully Inserted !!!");
    //     // navigate('/Home');
    //   }
    //   else{
    //     alert("");
    //   }
      
    // if (values.email === "abc@gmail.com" && values.mobile === "9876543210"){
    //   console.log('You clicked submit.');
    //   navigate('/Home')
    // }
    
      
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let resStatus = 0
  return (
    <div className="main">
        <h1 id="h11">Nestophia</h1>
        <div className="app">
        <form onSubmit={handleSubmit}>
            
            <h1 id="h12">Sign Up</h1>
            {inputs.map((input) => (
            <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
            />
            ))}
            <button type="submit">Sign Up</button><br/>
            <Link className="a1" to="/">Already have an account? Sign In</Link>
        </form>
        </div>
        
    </div>
  );
};

export default SignUp;
