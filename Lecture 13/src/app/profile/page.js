// src/pages/profile.js
import AdminLayout from '../components/AdminLayout';
import UserLayout from '../components/layouts/UserLayout';

const userRole = 'user'; // यह dynamic condition हो सकती है

export default function Profile() {
  return (
    <>
      {userRole === 'admin' ? (
        <AdminLayout>
          <h1>Admin Dashboard</h1>
          <p>Manage users and view reports here.</p>
        </AdminLayout>
      ) : (
        <UserLayout>
          <h1>User Profile</h1>
          <p>View your profile and manage orders here.</p>
        </UserLayout>
      )}
    </>
  );
}
