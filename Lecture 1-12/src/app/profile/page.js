import AdminLayout from '../components/AdminLayout';
import UserLayout from '../components/UserLayout';
const userRole = 'user';
export default function Profile() {
  return (
    <>
      {userRole === 'admin' ? (
        <AdminLayout>
          <div className='text-2xl font-bold'>Admin Dashboard</div>
          <p>Welcome Admin! You can manage users and view reports here.</p>
        </AdminLayout>
      ) : (
        <UserLayout>
          <div className='text-2xl font-bold'>User Dashboard</div>
          <p>Welcome! Here you can view your profile and check your orders.</p>
        </UserLayout>
      )}
    </>
  );
}
