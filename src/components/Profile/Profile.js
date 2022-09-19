import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Profile = ({ cookies, removeCookie }) => {
    let navigate = useNavigate();

    useEffect(() => {
        const checkCookie = () => {
          if (!cookies.token) {
            return navigate("/login");
          }
        };
        checkCookie();
      });
    
      const handleLogout = () => {
        removeCookie("token");
        return navigate("/login");
      };

    return (
        <div className="page">
            <div className="profile-header">
                <h4>OLCAY KAMBER</h4>
            </div>
            <div>
          <button
            className="bg-red-500 rounded py-1 px-3 text-white"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
        </div>
    );
};

export default Profile;