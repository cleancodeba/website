import React, {useState} from 'react'
import Link from "next/link";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const closeDropdown = () => {
    if (isActive)
      setIsActive(false)
  };

  return (
    <nav className="navbar is-fixed-top container is-transparent" role="navigation" aria-label="main navigation">
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
          <Link href="/">
            <a className="navbar-item" onClick={closeDropdown}>
              Info
            </a>
          </Link>
          <Link href="/katas">
            <a className="navbar-item" onClick={closeDropdown}>
              Katas
            </a>
          </Link>
          <Link href="/jobs">
            <a className="navbar-item" onClick={closeDropdown}>
              Clean Jobs
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
