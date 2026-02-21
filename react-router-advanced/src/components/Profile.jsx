import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Simple sub-components for the nested views
const ProfileDetails = () => <div><h3>Profile Details</h3><p>User-specific information goes here.</p></div>;
const ProfileSettings = () => <div><h3>Profile Settings</h3><p>Manage your account preferences.</p></div>;

const Profile = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>User Profile</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="details">View Details</Link> |{" "}
        <Link to="settings">Account Settings</Link>
      </nav>

      <hr />

      {/* Descendant Routes inside the Profile component */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;