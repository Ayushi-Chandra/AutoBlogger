import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";

const ContactUs = () => {
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
      'url("https://img.freepik.com/premium-photo/concept-contact-us-blank-wooden-cubes-square-dice-with-symbol-email-telephone-address-placed-wood-background_44868-1254.jpg?w=2000")'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
               ContactUs
              </h2>
              <Formik initialValues={{
               name:"",
               email:"",
               subject:"",
               message:"",
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
                                  value={values.name}
                                  onChange={handleChange}
                                  type="text"
                                  id="name"
                                  className="form-control"
                                />
                  <label className="form-label" htmlFor="form3Example1cg">
                     Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                <input
                                  value={values.email}
                                  onChange={handleChange}
                                  type="email"
                                  id="email"
                                  className="form-control"
                                />
                  <label className="form-label" htmlFor="form3Example3cg">
                     Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                <input
                                  value={values.subject}
                                  onChange={handleChange}
                                  type="subject"
                                  id="subject"
                                  className="form-control"
                                />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Subject
                  </label>
                </div>
                <div className="form-outline mb-4">
                <input
                                  value={values.message}
                                  onChange={handleChange}
                                  type="message"
                                  id="message"
                                  className="form-control"
                                />
                  
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Message
                  </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                   Send me copy{" "}
                    
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

export default ContactUs