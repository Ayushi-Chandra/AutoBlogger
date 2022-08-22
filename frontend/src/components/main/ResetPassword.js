import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";

const ResetPassword = () => {
    const userSubmit = async (formdata) => {
        console.log(formdata);
    
        const response = await fetch("http://localhost:5000/user/add", {
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
      'url("https://adamtheautomator.com/wp-content/uploads/2021/02/How-to-Reset-a-Windows-10-Password-with-a-Command-Prompt.jpg")'
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
                <input
                                  value={values.email}
                                  onChange={handleChange}
                                  type="email"
                                  id="email"
                                  className="form-control"
                                />
                  <label className="form-label" >
                     Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                <input
                                  value={values.subject}
                                  onChange={handleChange}
                                  type="password"
                                  id="newpassword"
                                  className="form-control"
                                />
                  <label className="form-label" htmlFor="form3Example4cg">
                    New Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                <input
                                  value={values.message}
                                  onChange={handleChange}
                                  type="password"
                                  id="confirmpassword"
                                  className="form-control"
                                />
                  
                  <label className="form-label" htmlFor="form3Example4cdg">
                  Confirm Password
                  </label>
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