import AdminLayout from '../components/AdminLayout';

const AdminPage = () => {
  console.log('AdminPage rendered');
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage products and view orders.</p>
    </div>
  );
};

AdminPage.getLayout = function getLayout(page) {
  console.log('AdminLayout applied');
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
