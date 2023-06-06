"use client";

import React, { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

interface IProviders {
  children: ReactNode;
}

export const Providers = ({ children }: IProviders) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      {children}
    </MantineProvider>
  );
};
