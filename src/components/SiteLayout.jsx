import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/papers", label: "Papers" },
  { to: "/videos", label: "Videos" },
  { to: "/datasets", label: "Datasets" },
  { to: "/models", label: "Models" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => (isActive ? "nav-item nav-item-active" : "nav-item")}
    >
      {label}
    </NavLink>
  );
}

export default function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="header">
        <div className="header-inner">
          <div className="brand-wrap">
            <p className="brand-kicker">hockey-ai.org</p>
            <h1 className="brand-title">Hockey AI Hub</h1>
          </div>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
          <nav id="site-nav" className={isMenuOpen ? "nav nav-open" : "nav"}>
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          Hockey AI Hub • Ice Hockey Analytics Community • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
