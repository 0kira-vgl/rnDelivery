import "../styles/global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#e2e8f0" }, // cor de fundo do app
        }}
      />
    </>
  );
}
