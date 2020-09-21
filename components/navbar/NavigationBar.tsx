import React, {useState} from 'react'
import Link from "next/link";
import ActiveLink from "../utils/ActiveLink";

export interface NavigationBarProps {
  fixed?: boolean
}

function getFixedClass(fixed: boolean) {
  return fixed ? "is-fixed-top" : "";
}

export default function NavigationBar({fixed = true}: NavigationBarProps) {
  const [isActive, setIsActive] = useState(false);

  const closeDropdown = () => {
    if (isActive)
      setIsActive(false)
  };

  return (
    <nav className={"navbar "+getFixedClass(fixed)+" container is-transparent"} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="./logo@2x.png" width="40" height="40"/>
          </a>
        </Link>

        <a role="button"
           className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
           onClick={() => {
            setIsActive(!isActive);
        }}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <ActiveLink href="/" activeClassName={"is-active"}>
            <a className="navbar-item" onClick={closeDropdown}>
              Info
            </a>
          </ActiveLink>
          <ActiveLink href="/katas" activeClassName={"is-active"}>
            <a className="navbar-item" onClick={closeDropdown}>
              Clean Katas
            </a>
          </ActiveLink>
          <ActiveLink href="/jobs" activeClassName={"is-active"}>
            <a className="navbar-item" onClick={closeDropdown}>
              Clean Jobs
            </a>
          </ActiveLink>
        </div>
      </div>
    </nav>
  )
}
