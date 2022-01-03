import React from "react";
import { UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h2 className="app-title">Movies Redux</h2>
      </Link>
      <div className="user-image">
        <UserIcon />
      </div>
    </div>
  );
}
