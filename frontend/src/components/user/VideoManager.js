import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import Loading from "../main/Loading";
import "./VideoManager.css";
import { motion } from "framer-motion";

const VideoManager = () => {
  const url = app_config.backend_url;
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  const [selBlog, setSelBlog] = useState(null);

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/video/getbyuserid/" + currentUser._id);
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      setUserArray(data);
      console.log(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const convertVideotoBlog = async (id, index) => {
    setSelBlog(index);
    // setTimeout(() => {
    //   console.log(id);
    //   setSelBlog(null);
    // }, 3000);
    // return;
    // setBlogLoading(true);
    const response = await fetch(url + "/util/transcribe/" + id);
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Video converted to blog",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      const data = await response.json();
      console.log(data);
      // getDataFromBackend();
      
      navigate("/blog/addblog/" + id);
      // setBlogLoading(false);
    } else if (response.status === 400) {
      toast.error("Video is not transcribed yet");
      // setBlogLoading(false);
    } else if (response.status === 500) {
      toast.error("Internal server error");
      // setBlogLoading(false);
    }
    setSelBlog(null);
  };

  const deleteVideo = async (id) => {
    console.log(id);
    const response = await fetch(url + "/video/deletebyid/" + id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Video Deleted Successfully");
      getDataFromBackend();
    }
  };

  const displayVideo = () => {
    if (!loading) {
      return userArray.map(({ _id, title, description, file, thumbnail }, index) => (
        <div className="col-md-3 mt-4" key={_id}>
          <div className="card">
            
            <div
              className="thumb-small"
              style={{ backgroundImage: `url('${url + "/" + thumbnail}')` }}
            >
              <div className="p-3 thumb-options">
                {/* <h5 className="card-title">{title}</h5>
              <p className="text-muted">{description}</p> */}
                <Link to={"/user/viewvideo/" + _id}>
                  <button className="btn btn-primary btn-floating">
                    <i class="fas fa-eye "></i>
                  </button>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger btn-floating"
                  onClick={(e) => deleteVideo(_id)}
                >
                  <i class="fas fa-trash"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                {!blogLoading ? (
                  <button
                    className={"btn btn-secondary "+(selBlog===index?'btn-rounded':'btn-floating')}
                    onClick={(e) => convertVideotoBlog(_id, index)}
                  ><i className={"fa-solid fa-gear "+(selBlog===index?'fa-spin':'')}></i>
                    {selBlog===index?' Converting ...':'' }
                  </button>
                ) : (
                  <button className="btn btn-success" disabled>
                    Converting...
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return (
        <div className="text-center">
          <Loading></Loading>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -300 }}
      transition={{ type: "keyframes" }}
      className="vid-manage-bg"
    >
      <section>
        <div className="d-flex justify-content-center align-items-center  videoheader ">
          <h1 className="text-light">Add video and convert it to blog</h1>
        </div>
      </section>
      <section>
        {/* <AddVideo getDataFromBackend={getDataFromBackend} /> */}
        <div>
          <h3 className="text-center mt-4">All Videos</h3>
        </div>
      </section>
      <section>
        <div className="col-md-10 mx-auto">
          <div className="row mt-3 mb-5">
          <div className="col-md-3 mt-4">
          <div className="card h-100">
            <div className="card-body">
              <motion.img whileHover={{ scale: 1.3 }} transition={{type: 'spring'}} style={{display: 'block', margin: 'auto', height: 150}} src="https://lordicon.com/upload/icons/2022_02/z31mkGzma.gif" alt="" />
            
            </div>
            </div>
            </div>
            {displayVideo()}
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VideoManager;
