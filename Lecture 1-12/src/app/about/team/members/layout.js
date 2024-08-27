// src/app/about/team/members/layout.js
export default function MembersLayout({ children }) {
  return (
    <div className='p-6 bg-pink-400 rounded shadow'>
      <h2 className='text-xl font-semibold mb-4'>Members Section</h2>
      <div>{children}</div>
    </div>
  );
}
