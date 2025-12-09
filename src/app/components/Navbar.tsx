"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./Resizable-navbar";

export const NavbarComponent = (): React.ReactElement => {
  const navItems = [
    { name: "Mi trayectoria", link: "#features" },
    { name: "Proyectos", link: "#projects" },
    { name: "Testimonios", link: "#testimonials" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="sticky top-0 z-50 border-b border-neutral-800">
      {/* Navegación de Escritorio */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            as="a"
            href="https://wa.me/51941554701"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="hover:bg-gray-200"
          >
            Contáctame
          </NavbarButton>
        </div>
      </NavBody>
      {/* Navegación Móvil */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClickAction={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Menú móvil */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              as="a"
              href={`https://wa.me/51941554701`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full text-black!"
            >
              Contáctame
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
