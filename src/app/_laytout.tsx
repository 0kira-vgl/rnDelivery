import "../styles/global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Slot />
    </>
  );
}
