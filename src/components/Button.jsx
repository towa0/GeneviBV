import { NavLink } from "react-router-dom";

const Button = ({ to, label, primary }) => {
  const baseStyle = "rounded-xl py-4 p-6 duration-200";
  const primaryStyle =
    "border bg-mainBlue text-white font-bold hover:bg-mainBlue/70";
  const secondaryStyle =
    "border-2 border-mainBlue text-mainBlue hover:text-white font-bold hover:bg-mainBlue";

  return (
    <NavLink to={to}>
      <button
        className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle}`}
      >
        {label}
      </button>
    </NavLink>
  );
};

export default Button;
