// src/app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  const styles = {
    container: {
      display: 'flex',
      font: 'poppins',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#00000',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    description: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
    },
    link: {
      fontSize: '1rem',
      color: '#0070f3',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href='/' legacyBehavior>
        <a style={styles.link}>Go back to Home</a>
      </Link>
    </div>
  );
}
