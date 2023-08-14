import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Home from 'pages/Home';
// import Movie from 'pages/Movie';

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movie'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>...Loading</div>}></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<Movie />} />
      </Routes>
    </div>
  );
};
