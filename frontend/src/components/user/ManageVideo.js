
import React, { useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import Swal from "sweetalert2";
import Addvideo from './Addvideo';



const ManageVideo = () => {
    const url = "http://localhost:5000"
  const [userArray, setUserArray] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  

  const getDataFromBackend = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUserArray(data)
      })
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const deleteUser = async (id) => {
    const res = await fetch(url + "/user/delete/"+id, {
      method: "DELETE",
    })

    if(res.status === 200){
      toast.success('Successfully deleted!')
      getDataFromBackend();
    }
  }

  const displayUsers = () => {
    return (
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Password</th>
            
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          { userArray.map( ({_id, username, email, password}) => (
            <tr key={_id}>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: 45, height: 45 }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{username}</p>
                  <p className="text-muted mb-0">{email}</p>
                  <p className="text-muted mb-0">{_id}</p>
                </div>
              </div>
            </td>
            
            <td>
              <span className="badge badge-success rounded-pill d-inline">{password}</span>
            </td>
            
            <td>
              <button type="button" className="btn btn-primary btn-sm btn-rounded" onClick={e => toggleUpdateForm({_id, username, email, password})}>
                Edit
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={() => {deleteUser(_id)}}>
                Delete
              </button>
            </td>
            </tr>
          ) ) }
          
        </tbody>
      </table>
    )
  }

  

  const toggleUpdateForm = (userdata) => {
    setShowForm(true);
    setUpdateFormData(userdata);
  }

  return (
    <div>
      <h1>Video Manager Dashboard</h1>
      {/* table */}
      <Addvideo />
      <div className="row">
        <div className="col-md">{displayUsers()}</div>
       
      </div>
    </div>
  )
}
  

export default ManageVideo