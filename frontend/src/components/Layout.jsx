import { useQuery } from "@tanstack/react-query";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { getFriendRequests } from "../lib/api";

const Layout = ({ children, showSidebar = false }) => {
  const { data: friendRequests } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const hasNotifications = friendRequests?.incomingReqs?.length > 0;

  return (
    <div className="min-h-screen">
      <div className="flex">
        {showSidebar && <Sidebar hasNotifications={hasNotifications} />}

        <div className="flex-1 flex flex-col">
          <Navbar hasNotifications={hasNotifications} />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
