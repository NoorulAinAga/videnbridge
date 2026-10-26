
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ brand, navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <span className="header-edge-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>

      <div className="container header-inner">
        {/* Logo */}
        <Link
          href="/"
          className="brand"
          aria-label={`${brand.name} home`}
          onClick={closeMenus}
        >
           <img
            src="/image/final-logo.png"
            alt={`${brand.name} logo`}
            className="brand-logo"
          />
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => {
            setMenuOpen((open) => {
              if (open) {
                setServicesOpen(false);
              }
              return !open;
            });
          }}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Main navigation */}
        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isServices =
              item.label.trim().toLowerCase() === "services";

            const subItems = item.children || item.items || [];

            if (isServices) {
              return (
                <div
                  className={`nav-dropdown ${
                    servicesOpen ? "dropdown-open" : ""
                  }`}
                  key={item.label}
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      setServicesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <div className="nav-dropdown-trigger">
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        if (window.innerWidth <= 768) {
                          event.preventDefault();
                          setServicesOpen((open) => !open);
                        } else {
                          closeMenus();
                        }
                      }}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      className="dropdown-toggle"
                      aria-label={
                        servicesOpen
                          ? "Close services menu"
                          : "Open services menu"
                      }
                      aria-expanded={servicesOpen}
                      onClick={() =>
                        setServicesOpen((open) => !open)
                      }
                    >
                      <span className="dropdown-chevron" />
                    </button>
                  </div>

                  {/* Services dropdown */}
                  <div className="services-dropdown">
                    <div className="dropdown-heading">
                      <span className="dropdown-eyebrow">
                        WHAT WE DO
                      </span>
                      <strong>Our Services</strong>
                      <p>
                        Solutions designed to help your business grow.
                      </p>
                    </div>

                    <div className="dropdown-links">
                      {subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="service-dropdown-link"
                          onClick={closeMenus}
                        >
                          <span className="service-link-icon">
                            ↗
                          </span>

                          <span className="service-link-copy">
                            <strong>{subItem.label}</strong>

                            {subItem.description && (
                              <small>{subItem.description}</small>
                            )}
                          </span>

                          <span className="service-link-arrow">
                            →
                          </span>
                        </Link>
                      ))}

                      <Link
                        href={item.href}
                        className="service-dropdown-link"
                        onClick={closeMenus}
                      >
                        <span className="service-link-icon">
                          ↗
                        </span>

                        <span className="service-link-copy">
                          <strong>Explore All Services</strong>
                          <small>
                            Intelligent research services
                          </small>
                        </span>

                        <span className="service-link-arrow">
                          →
                        </span>
                      </Link>
                    </div>

                    <Link
                      href="/contact-us"
                      className="dropdown-bottom-link"
                      onClick={closeMenus}
                    >
                      Discuss your project
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Contact CTA */}
          <Link
            className="button button-small nav-cta"
            href="/contact-us"
            onClick={closeMenus}
          >
            Request a Consultation <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
