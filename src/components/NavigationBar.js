import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* ---------- Hook ---------- */
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

/* ---------- Component ---------- */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const w = useWindowWidth();
  const isMobile = w < 768;

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certs", path: "/cert" },
    { name: "Studio", path: "/Studio" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: "#fff",
          borderBottom: scrolled
            ? "1px solid #eee"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 2px 18px rgba(0,0,0,0.05)"
            : "none",
          transition: "all 0.3s ease",
          padding: isMobile ? "0 20px" : "0 48px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            fontWeight: 900,
            fontSize: "1rem",
            userSelect: "none",
            textDecoration: "none",
            color: "#1a1a1a",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
          >
            <rect
              x="2"
              y="2"
              width="24"
              height="24"
              rx="6"
              stroke="#1a1a1a"
              strokeWidth="2"
            />

            <path
              d="M8 14 Q14 8 20 14 Q14 20 8 14Z"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />

            <circle
              cx="14"
              cy="14"
              r="2"
              fill="#1a1a1a"
            />
          </svg>

          Preet.dev
        </Link>

        {/* Desktop */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: 28,
              alignItems: "center",
            }}
          >
            {links.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: active ? 800 : 600,
                    cursor: "pointer",
                    position: "relative",
                    paddingBottom: 3,
                    color: active ? "#1a1a1a" : "#999",
                    transition: "color 0.2s",
                    userSelect: "none",
                    textDecoration: "none",
                  }}
                >
                  {link.name}

                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: "#1a1a1a",
                        borderRadius: 2,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              to="/contact"
              style={{
                marginLeft: 8,
                padding: "7px 20px",
                fontSize: "0.85rem",
                borderRadius: 999,
                background: "#1a1a1a",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Let's Talk ✦
            </Link>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {menuOpen ? (
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 900,
                }}
              >
                ✕
              </span>
            ) : (
              [0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#1a1a1a",
                    borderRadius: 2,
                  }}
                />
              ))
            )}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "#fff",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 998,
            borderBottom: "1px solid #eee",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          }}
        >
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: active ? "#1a1a1a" : "#bbb",
                  textDecoration: active
                    ? "underline"
                    : "none",
                  textUnderlineOffset: 5,
                  fontWeight: 700,
                  cursor: "pointer",
                  textDecorationLine: active
                    ? "underline"
                    : "none",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}