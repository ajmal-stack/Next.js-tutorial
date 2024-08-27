// src/app/about/layout.js
export default function AboutLayout({ children }) {
  return (
    <div className='flex'>
      <aside className='w-1/4 bg-orange-600 p-4'>
        <h2 className='font-bold text-xl mb-4'>About Sidebar</h2>
        <ul className='space-y-2'>
          <li>
            <a href='/about/team' className='hover:underline'>
              Our Team
            </a>
          </li>
          <li>
            <a href='/about/team/members' className='hover:underline'>
              Members
            </a>
          </li>
        </ul>
      </aside>
      <main className='flex-grow p-6 bg-black shadow-md rounded'>
        {children}
      </main>
    </div>
  );
}
