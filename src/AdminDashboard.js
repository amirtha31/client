// import './App.css';
// import Sidebar from './Sidebar';
// import Content from './Content';
// import { useState } from 'react';

// export default function AdminDashboard(){
//     const [page, setPage] = useState('');
//     return(
//         <div>
//             <Sidebar setPage={setPage} />
//       <Content page={page} />
            
//         </div>
//     )
// }

import './App.css';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import { Routes, Route } from 'react-router-dom';

export default function AdminDashboard() {
  const [page, setPage] = useState('');

  return (
    <div>
      <Sidebar setPage={setPage} />
      <Content page={page} />
      {/* Nested Routes for Sidebar and Content */}
      <Routes>
        <Route path="sidebar" element={<Sidebar setPage={setPage} />} />
        <Route path="content" element={<Content page={page} />} />
      </Routes>
    </div>
  );
}
