import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";

const Login= () => {
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
    <div>
      <section className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://t4.ftcdn.net/jpg/02/00/90/53/360_F_200905394_2u1hKNTSawkcR6N1X0aX0PiSBR1tvUMn.jpg")'
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
              
              <input
                                  value={values.email}
                                  onChange={handleChange}
                                  type="email"
                                  id="email"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="typeEmailX-2">
                Email
              </label>
              </div>
              
            
            <div className="form-outline mb-4">
              
              
              <input
                                  value={values.password}
                                  onChange={handleChange}
                                  type="password"
                                  id="password"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="typePasswordX-2">
                Password
              </label>

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