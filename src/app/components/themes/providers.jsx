"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Provider;