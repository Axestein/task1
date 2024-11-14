import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function MainContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid p-4">
      <h2>Real-Time Data</h2>

      {data ? (
        <div className="row">
          {data.slice(0, 5).map(post => (
            <div className="col-12 col-md-4 mb-4" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p>Loading data...</p>
        </div>
      )}
    </div>
  );
}

export default MainContent;
