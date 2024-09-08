import { NavLink } from "react-router-dom";

const LinkItem = ({ link, lable, icon }) => {
  return (
    <NavLink
      to={link}
      end
      className={({ isActive }) =>
        `flex items-center gap-2  px-3 py-2 hover:bg-neutral-700 hover:no-underline active:no-underline  rounded-sm text-lg ${
          isActive ? "bg-neutral-600 text-white" : ""
        }`
      }
    >
      <span>{icon}</span>
      {lable}
    </NavLink>
  );
};

export default LinkItem;
