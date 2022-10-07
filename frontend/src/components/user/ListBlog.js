import React, { useEffect, useState } from 'react'
import app_config from '../../config';
import './ListBlog.css'


function ListBlog({ title, imageUrl, body }) {
  const url = app_config.api_url;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const url = app_config.api_url;
    fetch(url + '/blog/getall')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error)
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  if (loading) return "Loading...";
  if (error) return "Error!..."
  return (
    <div className='row'>
      <div className='col md-4'>
        <div className="card-container" >
          <div className='img-container'>
            <img src={imageUrl} alt='' />
          </div>
          <div className='card-title'>
            <h3>{title}</h3>
          </div>
          <div className='card-body'>
            <p>{body}</p>
          </div>
          <div className='btn'>
            <button>
              <a>
                View
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>



  )
}


export default ListBlog

