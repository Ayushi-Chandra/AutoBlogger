import { TextField } from '@mui/material';
import { Formik } from 'formik'
import React from 'react'
import Swal from "sweetalert2";
import * as Yup from "yup";

const Signup = () => {
  const userForm={
    username:"",
    email:"",
    password:"",
  }
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      response.json().then(data => {
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
      
      Swal.fire({
        icon: "success",
        title: "Welcome",
        text: "You have done a wonderful job!",
      });
    })
    } else {
      console.log("error occured");
    }
  };

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhyf99P582eds1C6iKL-FvgML7EROLpeqBk1Gt8L0aXzSSimwMHha_ROuLRpmFBRNdzI&usqp=CAU")'
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <Formik initialValues={


                    userForm
                  }
                    onSubmit={userSubmit}
                  // validationSchema={SignupSchema}
                  >
                    {({ values, handleChange, handleSubmit}) => (
                      <form
                        onSubmit={handleSubmit}
                        className="mx-1 mx-md-4"
                      >

                        <div className="form-outline mb-4">
                          <TextField value={values.username}
                            onChange={handleChange}
                            id="username"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="User Name"
                            type="text"
                            />
                        </div>
                        <div className="form-outline mb-4">
                          <TextField value={values.email}
                            onChange={handleChange}
                            id="email"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Email"
                            type="text"
                            />

                        </div>
                        <div className="form-outline mb-4">
                          <TextField value={values.password}
                            onChange={handleChange}
                            id="password"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Password"
                            type="password"
                             />
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3cg"
                          />
                          <label className="form-check-label" htmlFor="form2Example3g">
                            I agree all statements in{" "}
                            <a href="TermsOfService" className="text-body">
                              <u>Terms of service</u>
                            </a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-success btn-block btn-lg gradient-custom-4"
                          >
                            Register
                          </button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">
                          Have already an account?{" "}
                          <a href="login" className="fw-bold text-body">
                            <u>Login here</u>
                          </a>
                        </p>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup