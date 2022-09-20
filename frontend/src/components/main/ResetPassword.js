import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";
import { TextField } from '@mui/material';

const ResetPassword = () => {
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
          console.log("success");
          Swal.fire({
            icon: "success",
            title: "Well Done👍",
            text: "You have done a wonderful job!",
          });
        } else {
          console.log("error occured");
        }
      };

  return (
    <section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://www.wallpaperup.com/uploads/wallpapers/2014/11/25/527124/489bde2e4f5b51830ebd462ff3b75dc4.jpg")'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
               Reset Password
              </h2>
              <Formik initialValues={{
               
               email:"",
               newpassword:"",
               confirmpassword:"",
               
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
                            value={values.email}
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
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="New password"
                            type="password"
                            className="form-control"
                          />
                </div>
                <div className="form-outline mb-4">
                <TextField
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Confirm password"
                            type="password"
                            className="form-control"
                          />
                </div>
                
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Send
                  </button>
                </div>
                
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

export default ResetPassword;