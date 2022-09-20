import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { TextField} from "@mui/material";



const Login = () => {
  
  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata), //converting javascript object to json
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
          title: "Well Done👍",
          text: "You have done a wonderful job!",
        }).then(() => {
          navigate('/user/managevideo');
        })
      })
    } else {
      console.log("error occured");
    }
  };


  return (
    <div>
      <section className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://wallpaperaccess.com/full/4893706.jpg")'
        }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <h1 className="mb-5">Login</h1>

                  <Formik
                    initialValues={{
                      password: "",
                      email: "",
                    }}
                    onSubmit={userSubmit}
                  // validationSchema={SignupSchema}
                  >
                    {({ values, handleChange, handleSubmit, errors }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="mx-1 mx-md-4"
                      >
                        <div className="form-outline mb-4">
                        <TextField
                            value={values.lastname}
                            onChange={handleChange}
                            id="email"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Email"
                            type="text"
                            className="form-control"
                          />

                          
                          
                        </div>


                        <div className="form-outline mb-4">
                        <TextField
                            value={values.lastname}
                            onChange={handleChange}
                            id="password"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Password"
                            type="password"
                            className="form-control"
                          />


                          

                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-start mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="form1Example3"
                          />
                          <label className="form-check-label" htmlFor="form1Example3">
                            {" "}
                            Remember password{" "}
                          </label>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                          Login
                        </button>
                        <hr className="my-4" />
                        <button
                          className="btn btn-lg btn-block btn-primary"
                          style={{ backgroundColor: "#dd4b39" }}
                          type="submit"
                        >
                          <i className="fab fa-google me-2" /> Sign in with google
                        </button>
                        <button
                          className="btn btn-lg btn-block btn-primary mb-2"
                          style={{ backgroundColor: "#3b5998" }}
                          type="submit"
                        >
                          <i className="fab fa-facebook-f me-2" />
                          Sign in with facebook
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login