import React from "react";
import Profile from "../Profile/Profile";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
      <Profile />
     

      <button
        className="mt-auto mb-6 mx-6 py-4 px-8 bg-[#553f2a] text-white rounded-[50px] hover:bg-[#a86e5dbd] transition duration-200 ease-in-out"
        onClick={logoutUser}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
