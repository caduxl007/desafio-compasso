import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Profile, Recents } from 'pages';

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
