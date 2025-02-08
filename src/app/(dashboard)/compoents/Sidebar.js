"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaBox, FaBlog, FaUsers, FaExclamationCircle, FaTools } from 'react-icons/fa';
import "@/app/(dashboard)/style/sidebar.css";
import { useSession } from 'next-auth/react';

// Define role-based paths
const rolePaths = {
  admin: ['/dashboard', '/adminOrder', '/leads', '/service', '/complains', '/adminBlog'],
  manager: ['/leads', '/adminBlog'],
  employee: ['/complains', '/service'],
};

const Sidebar = ({ isOpen }) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    if (session?.user?.role) {
      setUserRole(session.user.role);
    }
  }, [session]);

  console.log("User Role:", userRole);

  // Sidebar items
  const sidebarItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <FaBox className="icon" /> },
    { path: '/adminOrder', label: 'Orders', icon: <FaBox className="icon" /> },
    { path: '/adminBlog', label: 'Blogs', icon: <FaBlog className="icon" /> },
    { path: '/leads', label: 'Leads', icon: <FaUsers className="icon" /> },
    { path: '/complains', label: 'Complaint', icon: <FaExclamationCircle className="icon" /> },
    { path: '/service', label: 'Service', icon: <FaTools className="icon" /> },
  ];

  // Filter sidebar items based on role
  const allowedPaths = rolePaths[userRole] || [];
  const filteredItems = sidebarItems.filter((item) => allowedPaths.includes(item.path));

  return (
    <div className={`sidebar ${isOpen ? 'show' : 'collapsed'}`}>
      <nav className="navbar-nav">
        {filteredItems.map(({ path, label, icon }) => (
          <div className="nav-item" key={path}>
            <Link className={`nav-linkdata ${pathname === path ? 'active' : ''}`} href={path}>
              {icon}
              <span>&nbsp;{label}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
