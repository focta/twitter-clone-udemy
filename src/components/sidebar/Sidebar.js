import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Button } from "@mui/material";

function Sidebar() {
  return (
  <div className="sidebar">
    {/* ツイッターアイコン material ui */}
    <TwitterIcon className="sidebar_twitterIcon"/>
    {/* Siebar Option */}
    <SidebarOption text="ホーム" Icon={HomeIcon} />
    <SidebarOption text="話題を検索" Icon={SearchIcon} />
    <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
    <SidebarOption text="メッセージ" Icon={EmailIcon} />
    <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
    <SidebarOption text="リスト" Icon={ListAltIcon} />
    <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
    <SidebarOption text="もっとみる" Icon={PlaylistAddIcon} />

    {/* ツイッートボタン material ui */}
    <Button variant="outlined" className="sidebar_tweet">ツィード</Button>
    </div>
    );
}

export default Sidebar;
