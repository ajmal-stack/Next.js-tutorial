// src/pages/profile.js
import AdminLayout from '../components/AdminLayout';
import UserLayout from '../components/layouts/UserLayout';

const userRole = 'admin'; // यह dynamic condition हो सकती है

export default function Profile() {
  return (
    <>
      {userRole === 'admin' ? (
        <AdminLayout>
          <h2>Admin Dashboard</h2>
          <p>Manage users and view reports here.</p>
        </AdminLayout>
      ) : (
        <UserLayout>
          <h2>User Profile</h2>
          <p>View your profile and manage orders here.</p>
        </UserLayout>
      )}
    </>
  );
}
