'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { MenuOverLay } from "@/components/MenuOverLay";
import { ChatBot } from "@/commons/ChatBot";
import Navbar from "@/components/Navbar";
import ProfileView from "@/components/ProfileView";
import { Drawer } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { Footer } from "@/components/Footer";
import { Connectors } from "@/components/Connectors";
import { TrustCenter } from "@/components/TrustCenter";
import { Loader } from "@/commons/Loader";
import DrawerPanel from "@/components/DrawerPanel";


export default function Home() {
  

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    <>
      {/* <MenuOverLay />
      <ChatBot /> */}
      <ProfileView />
      <Connectors />
      <TrustCenter />
    </>
  );
}
