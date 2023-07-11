import React from 'react';

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <a href={href} className="transition hover:text-teal-500 dark:hover:text-teal-400">{label}</a>
);

const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 dark:border-gray-700 pt-10 pb-16 bg-white dark:bg-gray-800">
    <div className="relative px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
            <NavItem href="/About" label="About" />
            <NavItem href="/Experiences" label="Experiences" />
            <NavItem href="/Projects" label="Projects" />
            <NavItem href="/hireMe" label="Hire me" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Pedro Reichow. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
