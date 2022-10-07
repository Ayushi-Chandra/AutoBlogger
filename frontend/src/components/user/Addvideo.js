import React, { useState } from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { TextField } from "@mui/material";
import app_config from '../../config';

const Addvideo = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const url = app_config.api_url;
  const [selFile, setSelFile] = useState("")
  const userSubmit = async (formdata) => {
    formdata.file = selFile;
    console.log(formdata);

    const response = await fetch(url + "/video/add", {
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
  const uploadFile = (e) => {
    const file = e.target.files[0]
    setSelFile(file.name)
    const fd = new FormData()
    fd.append("myfile", file)
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("uploaded")
      }
    })
  }
  return (
    <div className='vh-100'>
      <section className=" bg-image"
        style={{
          backgroundImage:
            'url("https://wallpaperaccess.com/full/4893706.jpg")'

        }}>
        <div className="container py-5 h-100">

          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <h1 className="mb-5">Upload Video</h1>




              <Formik
                initialValues={{
                  title: "",

                  uploadedBy: currentUser._id,
                  file: "",
                  createdAt: Date,
                }}
                onSubmit={userSubmit}
              // validationSchema={SignupSchema}
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="row mb-4"

                  >
                    <div className="form-control">
                      <div className='col-md-4'>
                        <TextField
                          value={values.title}
                          onChange={handleChange}
                          id="title"
                          sx={{ mt: 5 }}
                          fullWidth
                          label="TITLE"
                          type="text"
                          className="form-control"
                        />
                      </div>

                      <div className='col-md-4'>
                        <TextField
                          onChange={uploadFile}
                          id="file"
                          sx={{ mt: 5 }}
                          fullWidth
                          label="UPLOAD FILE"
                          type="file"
                        />
                      </div>



                      <div className='col-md-4'>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                          UPLOAD
                        </button>
                      </div>
                    </div>

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

export default Addvideo