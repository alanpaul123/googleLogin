import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithGoogle } from "../../FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);

      toast.success("Logged in with Google successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="wrapper">
      <form
        action="
"
        onSubmit={formik.handleSubmit}
      >
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="email"
            required
            {...formik.getFieldProps("email")}
          />
          <i className="fa-solid fa-user icon"></i>

          {formik.touched.email && formik.errors.email ? (
            <div className="error" style={{ fontSize: "12px", color: "red" }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            {...formik.getFieldProps("password")}
          />
          <i className="fa-solid fa-lock icon"></i>
          {formik.touched.password && formik.errors.password ? (
            <div className="error" style={{ fontSize: "12px", color: "red" }}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit">Login</button>
        <p className="p">OR</p>
        <button onClick={handleGoogleLogin} type="submit">
          Sign In with Google
        </button>

        <div className="register-link">
          <p>
            Don't have an account?<a href="#">Register</a>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
