import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage/TweetsPage'));

export const App = () => {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
