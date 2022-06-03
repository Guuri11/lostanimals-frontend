import React from 'react';
import { Link } from 'react-router-dom';

type NavItemProps = {
    label: string;
    route: string;
    // eslint-disable-next-line react/require-default-props
    callback?: () => void;
    // eslint-disable-next-line react/require-default-props
    icon?: JSX.Element;
}

export default function NavItem({
  label, route, callback = undefined, icon = undefined,
}: NavItemProps): JSX.Element {
  return (
    <li className="nav-item">
      <Link
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
        to={route}
        onClick={callback}
      >
        {icon}
        <span className="ml-2">{label}</span>
      </Link>
    </li>
  );
}
