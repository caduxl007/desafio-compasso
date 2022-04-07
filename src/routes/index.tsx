import { Recents, Home, Profile } from 'pages';
import { Routes, Route } from 'react-router-dom';

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recents" element={<Recents />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}
