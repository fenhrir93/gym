import React, { lazy } from "react";

const Home = lazy(() => import("../components/Home.tsx"));

export default function HomePage() {
  return <Home />;
}
