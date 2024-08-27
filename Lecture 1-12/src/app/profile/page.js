import AdminLayout from '../components/AdminLayout';
import UserLayout from '../components/UserLayout';
import RootLayout from '../layout';

const userRole = 'admin'; // Dynamically determined in a real-world app

export default function Profile() {
  const Layout = userRole === 'admin' ? AdminLayout : UserLayout;

  return (
    <RootLayout>
      <Layout>
        <h2>Welcome to your Dashboard!</h2>
        <p>This is a profile page content based on your role.</p>
      </Layout>
    </RootLayout>
  );
}
