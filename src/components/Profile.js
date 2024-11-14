import React from 'react';

function Profile() {
  return (
    <div className="container-fluid p-4">
      <h2>User Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Name: John Doe</h4>
          <p>Email: johndoe@example.com</p>
        </div>
        <div className="col-md-6">
          <h4>Settings</h4>
          {/* Settings options can go here */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
