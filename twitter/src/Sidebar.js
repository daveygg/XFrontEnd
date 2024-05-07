import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function Sidebar() {
    return (
      <div className="sidebar">
        <TwitterIcon className="sidebar_twitterIcon" />

        <SidebarOption text="Home" Icon={HomeIcon} />
        <SidebarOption text="Explore" Icon={SearchIcon} />
        <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarOption text="Messages" Icon={MailOutlineIcon} />
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarOption text="Lists" Icon={ListAltIcon} />
        <SidebarOption text="Profile" Icon={PermIdentityIcon} />
        <SidebarOption text="More" Icon={MoreHorizIcon} />

        <Button variant="outlined" className="sidebar_tweet" fullWidth>
          Tweet
        </Button>
      </div>
    );
}

export default Sidebar;