import Link from 'next/link';
import React from 'react';

const Breadcrumb = () => {
  const breadcrumbLinks = [
    { name: 'Home', href: '/' },
    { name: 'India', href: '/india' },
    { name: 'Delhi', href: '/delhi' },
    { name: 'Dwarka', href: '/dwarka' },
    { name: 'Delhi International', href: '/delhi-international' },
    { name: 'Overview', href: '#' },
  ];

  return (
    <nav className="text-sm py-6 hidden md:flex">
      <ol className="flex space-x-2">
        {breadcrumbLinks.map((link, index) => (
          <React.Fragment key={index}>
            {index > 0 && <li>/</li>}
            <li>
              {link.href !== '#' ? (
                <Link href={link.href}>{link.name}</Link>
              ) : (
                link.name
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
