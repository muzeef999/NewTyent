import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Correct import
import { FaBox, FaBlog, FaUsers, FaExclamationCircle, FaTools } from 'react-icons/fa';
import "@/app/(dashboard)/style/sidebar.css";

const Sidebar = ({ isOpen }) => {
  const router = useRouter(); // Get current route
  const pathname = usePathname();

  return (
    <div className={`sidebar ${isOpen ? 'show' : 'collapsed'}`}>
      <nav className="navbar-nav">
        <div className="nav-item">
          <Link 
            className={`nav-linkdata ${pathname === '/dashboard' ? 'active' : ''}`}
            href="/dashboard"
          >
            <FaBox className="icon" />
            <span>&nbsp;Dashboard</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link 
            className={`nav-linkdata ${pathname === '/adminOrder' ? 'active' : ''}`} 
            href="/adminOrder"
          >
            <FaBox className="icon" />
            <span>&nbsp;Orders</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link 
            className={`nav-linkdata ${pathname === '/adminBlog' ? 'active' : ''}`} 
            href="/adminBlog"
          >
            <FaBlog className="icon" />
            <span>&nbsp;Blogs</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link 
            className={`nav-linkdata ${pathname === '/leads' ? 'active' : ''}`} 
            href="/leads"
          >
            <FaUsers className="icon" />
            <span>&nbsp;Leads</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link 
            className={`nav-linkdata ${pathname === '/complains' ? 'active' : ''}`} 
            href="/complains"
          >
            <FaExclamationCircle className="icon" />
            <span>&nbsp;Complaint</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link 
            className={`nav-linkdata ${pathname === '/service' ? 'active' : ''}`} 
            href="/service"
          >
            <FaTools className="icon" />
            <span>&nbsp;Service</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
