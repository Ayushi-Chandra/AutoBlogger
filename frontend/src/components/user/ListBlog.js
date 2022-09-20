import React, { useState } from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { TextField } from "@mui/material";

const ListBlog = () => {
  const navigate = useNavigate();
    const [selFile, setSelFile] = useState("")
    const userSubmit = async (formdata) => {
      console.log(formdata);
  
      const response = await fetch("http://localhost:5000/video/add", {
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
            navigate('/managevideo');
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
        fetch("http://localhost:5000/addblog", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("uploaded")
          }
        })
      }
  return (
    <div>ListBlog</div>
  )
}

export default ListBlog