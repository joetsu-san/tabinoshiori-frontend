"use client";

import React, { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
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
