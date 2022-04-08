import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const Recents = React.lazy(() => import('../pages/Recents'));
const Profile = React.lazy(() => import('../pages/Profile'));

export function RoutesApp() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recents" element={<Recents />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
