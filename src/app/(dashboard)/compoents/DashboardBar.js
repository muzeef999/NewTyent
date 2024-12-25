import { setUser } from '@/app/Redux/authSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { IoBagHandleOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { MdDashboard } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';

const DashboardBar = ({toggleSidebar}) => {
 
  const { data: session } = useSession();
  const dispatch = useDispatch();
  
  const userData = useSelector((state) => state.auth.user); 



    useEffect(() => {
      if (session?.user) {
        dispatch(
          setUser({
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
          })
        );
      }
    }, [session, dispatch]);


    const handleLogout = () => {
        signOut();
        router.push("/");
      };

  return (
    <div className='searchbackground  d-flex'>
    <div className="d-flex w-100 m-3 justify-content-between align-items-center">
      <div>
        <span style={{ backgroundColor: 'transparent', border: 'none' }} onClick={toggleSidebar}>
          <MdDashboard size={25} className="me-2" />
        </span>
      </div>
      

                <div
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  {userData ? (
                    <div className="btn-group">
                      <button
                        style={{ textDecoration: "none", color: "black" }}
                        type="button"
                        className="btn btn-link  dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Hi, {userData.name || "User"}
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <button className="dropdown-item">
                            <IoBagHandleOutline /> Your Orders
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            <LuLogOut /> Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <p
                      className="mb-0"
                      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                      onClick={() => setShowLoginModal(true)}
                    >
                      <FaUser size={15} /> Login
                    </p>
                  )}
                </div>

    </div>
    

  </div>
  )
}

export default DashboardBar
