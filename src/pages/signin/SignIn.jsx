import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../Components/forminput/FormInput";
import { useNavigate } from "react-router-dom";
import "../../pages/signup/SignUp.css";
import "./SignIn.css";

<link href='https://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet'></link>
const App = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid Email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.email == "admin@gmail.com" && values.password == "admin@123"){
      navigate('/AdminHome')
    }
    else{
      const user = {
        email : values.email,
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
      fetch('http://localhost:3030/login', headers).then(e => e.json()).then(e => {
        
        console.log(e)
        
        if(Object.keys(e)[0] == '2'){
          console.log('Incorrect Password ;(')
          alert('Incorrect Password ;(')
        }
        else if(Object.keys(e)[0] == '3'){
          console.log('Incorrect username and password ;(')
          alert('Incorrect username and password ;(')
        }
        else if(Object.keys(e)[0] == "name"){

          console.log('Logged in successfully ;)')

          console.log(e.name + "\n" + e.mobile)
          
          const userDetails = {name : e.name.replace(/["']/g, ''), mobile : e.mobile.replace(/["']/g, ''), user_id : e.user_id }
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
          console.log(userDetails)
          alert('Logged in successfully ;)')
          navigate('/Home')
        }
      });
    }

    // if (values.email === "abc@gmail.com" && values.password === "abcd@123"){
    //   console.log('You clicked submit.');
    //   navigate('/Home')
    // }
    // else{
    //   alert("Invalid Email or Password")
    // }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
        <h1 id="h13">Nestophia</h1>
        <div className="app">
          <form className="form1" onSubmit={handleSubmit}>
              
              <h1 id="h12">Sign In</h1>
              {inputs.map((input) => (
              <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
              />
              ))}
              <button>Sign In</button><br/>
              <Link style={{marginLeft:"1%"}} className = "a1" to="/SignUp">Don't have an account? Create new one</Link>
          </form>
        </div>
    </div>
  );
};

export default App;
