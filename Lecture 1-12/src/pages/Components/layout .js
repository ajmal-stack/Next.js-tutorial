import Link from 'next/link';
import '../../app/globals.css';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function Layout({ children }) {
  return (
    <div>
      <header className='bg-blue-600 text-white p-4 shadow-lg'>
        <h1 className='text-3xl font-bold'>Main Website Header</h1>
        {/* Navigation Bar */}
        <nav className='mt-4'>
          <ul className='flex justify-center space-x-8'>
            <li>
              <Link href='/dashboard' legacyBehavior>
                <a className='text-white hover:underline'>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href='/' legacyBehavior>
                <a className='text-white hover:underline'>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/blog' legacyBehavior>
                <a className='text-white hover:underline'>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/products' legacyBehavior>
                <a className='text-white hover:underline'>Products</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='flex-grow container mx-auto p-6'>{children}</main>

      <footer className='bg-blue-600 text-white p-4 text-center'>
        <p>Main Website Footer</p>
      </footer>
    </div>
  );
}
