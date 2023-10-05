import { NavLink } from "react-router-dom";
import { Navigation } from "../routes";

interface ToolbarProps {
  title: string;
  navigation: Navigation[];
}

export default function Toolbar(props: ToolbarProps) {
  return (
    <div>
      <div className="flex justify-around bg-slate-900 h-16 items-center">
        <NavLink to={"/"}>
          <h1 className="text-2xl font-bold text-blue-300">{props.title}</h1>
        </NavLink>
        <div className="flex space-x-4">
          {props.navigation.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {({ isActive }) => {
                return (
                  <span
                    className={
                      isActive
                        ? "text-pink-700"
                        : "text-pink-300" + " hover:text-pink-400"
                    }
                  >
                    {item.title}
                  </span>
                );
              }}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
