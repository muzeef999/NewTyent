"use client"
import { useState } from "react";
import DashboardBar from "./compoents/DashboardBar";
import Sidebar from "./compoents/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({ children }) {
 
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
 
  return (  
  <html>
    <body>
      <div>
      <DashboardBar  toggleSidebar={toggleSidebar}/>
    <div className={`App d-flex`}>
      <Sidebar isOpen={showSidebar} toggleSidebar={toggleSidebar} />
      <div style={{marginTop:'80px'}} className={`main-content-container p-2 ${showSidebar ? 'expanded' : 'collapsed'}`}>
        {children}
        <ToastContainer />
      </div>
    </div>
      </div>
        </body>

        </html>

)
}