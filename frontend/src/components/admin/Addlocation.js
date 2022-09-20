import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Addlocation = () => {

  const navigate = useNavigate();
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/location/add", {
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
          navigate('/listlocations');
        })
      })
    } else {
      console.log("error occured");
    }
  };
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "white", }}>



        <div className="card text-black">
          <h1 className="text-center fw-bold mx-3 mb-0 text-muted">ADD LOCATION</h1>
          <br />
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://www.teahub.io/photos/full/269-2694176_city-building-wallpaper.jpg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

              <Formik
                initialValues={{ state: "", city: "", pincode: "" }}
                onSubmit={userSubmit}>
                {({ values, handleChange, handleSubmit }) => (


                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                      <div className="col-md-6 mb-4">
                        <select className="select">
                          <option value={1} disabled="">
                            State
                          </option>
                          <option value={2}>Uttar Pradesh</option>
                          <option value={3}>UttaraKhand</option>
                          <option value={4}>West Bengal</option>

                        </select>
                      </div>

                      <div className="col-md-6 mb-4">
                        <select className="select">
                          <option value={1} disabled="">
                            City
                          </option>
                          <option value={2}>Lucknow</option>
                          <option value={3}>Noida</option>
                          <option value={4}>Ayodhaya</option>

                        </select>
                      </div>
                    </FormControl>

                    <TextField
                      value={values.pincode}
                      onChange={handleChange}
                      id="pincode"
                      sx={{ mt: 5 }}
                      fullWidth
                      label="Pincode"
                      type="Number"
                      className="form-control"
                    />

                    <TextField
                      value={values.pricepersqft}
                      onChange={handleChange}
                      id="pricepersqft"
                      sx={{ mt: 5 }}
                      fullWidth
                      label="Price per square feet"
                      type="Number"
                      className="form-control"

                    />


                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ margin: 20, padding: 20 }}>
                      Save
                    </button>

                  </form>
                )}
              </Formik>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Addlocation