import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Profile Details</Link> | {" "}
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export const ProfileDetails = () => <h3>Profile Details Section</h3>;
export const ProfileSettings = () => <h3>Profile Settings Section</h3>;

export default Profile;