import React from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>

      <label>
        <p>
          password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={()=> setShowPassword((prev)=>!prev)}>
          {showPassword?(AiOutlineEyeInvisible):(AiOutlineEye)}
        </span>

        <Link to="#">
          <P>
            Forgot Password
          </P>
        </Link>
      </label>

      <button>
        Sign In
      </button>
    </form>
  );
};
