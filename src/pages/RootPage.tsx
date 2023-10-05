import { Outlet } from "react-router-dom";
import { NAVIGATION } from "../routes";
import { lazy } from "react";

const Toolbar = lazy(() => import("../components/Toolbar.tsx"));

export default function RootPage() {
  return (
    <div>
      <Toolbar title="GYM" navigation={NAVIGATION} />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
