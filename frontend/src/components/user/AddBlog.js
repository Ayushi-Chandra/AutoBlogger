import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import app_config from "../../config";

const AddBlog = () => {
  const navigate = useNavigate();
  const { videoid } = useParams();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;
  const [selFile, setSelFile] = useState("");
  const [blogData, setBlogData] = useState("");

  const fetchVideoData = async () => {
    const response = await fetch(url + "/video/getbyid/" + videoid);
    if (response.status === 200) {
      const data = await response.json();
      setBlogData(data.transcription);
    }
  }

  useEffect(() => {
    fetchVideoData();
  }, [])
  

  const userSubmit = async (formdata) => {
    formdata.thumbnail = selFile;
    console.log(formdata);

    const response = await fetch(url + "/blog/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting javascript object to json
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      response.json().then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));

        Swal.fire({
          icon: "success",
          title: "Well Done👍",
          text: "You have done a wonderful job!",
        }).then(() => {
          navigate("/user/manageblog");
        });
      });
    } else {
      console.log("error occured");
    }
  };
  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("uploaded");
      }
    });
  };
  return (
    <div>
      
      <section
        className=" bg-image"
        // style={{
        //   backgroundImage:
        //     'url("https://wallpaperaccess.com/full/4893706.jpg")',
        // }}
      >
        <section className="header-top addblog-header-bg">
      <h1 className="header-text">Create New Blog</h1>
      </section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "2rem" }}
            >
              <div className="card-body p-5 text-center">
                <h1 className="mb-5">Upload Blog</h1>

                <Formik
                  initialValues={{
                    title: "",
                    description: "",

                    data: "",
                    createdAt: Date,
                  }}
                  onSubmit={userSubmit}
                  // validationSchema={SignupSchema}
                >
                  {({ values, handleChange, handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                      <div className="form-outline mb-4">
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

                      <div className="form-outline mb-4">
                        <TextField
                          value={values.description}
                          onChange={handleChange}
                          id="description"
                          sx={{ mt: 5 }}
                          fullWidth
                          label="DESCRIPTION"
                          type="text"
                          className="form-control"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextField
                          onChange={uploadFile}
                          id="file"
                          sx={{ mt: 5 }}
                          fullWidth
                          label="Thumbnail"
                          type="file"
                          className="form-control"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <div className="container">
                          <MDEditor value={blogData} onChange={setBlogData} />
                        </div>
                      </div>

                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        UPLOAD
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AddBlog;
