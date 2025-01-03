'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { MenuOverLay } from "@/components/MenuOverLay";
import { ChatBot } from "@/commons/ChatBot";
import Navbar from "@/components/Navbar";

export default function Home() {


  return (
    <>
      {/* <MenuOverLay />
      <ChatBot /> */}
      <Navbar />
    </>
  );
}
