"use client";

import { useState, useEffect } from "react";
import DashboardBar from "./compoents/DashboardBar";
import Sidebar from "./compoents/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Fix bootstrap JS loading issue
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Provider store={store}>
            <DashboardBar toggleSidebar={toggleSidebar} />
            <div className="App d-flex">
              <Sidebar isOpen={showSidebar} toggleSidebar={toggleSidebar} />
              <div
                style={{ marginTop: "80px", overflow: "hidden" }}
                className={`main-content-container p-2 ${showSidebar ? "expanded" : "collapsed"}`}
              >
                {children}
                <ToastContainer />
              </div>
            </div>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
