// src/app/about/team/layout.js
export default function TeamLayout({ children }) {
  return (
    <div className='p-6 bg-red-500 rounded shadow-lg'>
      <h2 className='text-2xl font-bold mb-4'>Team Section</h2>
      <div>{children}</div>
    </div>
  );
}
