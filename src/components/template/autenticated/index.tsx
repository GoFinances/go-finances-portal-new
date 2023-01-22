import React from "react";

import { Box } from "../../atomic";

import Header from "../../molecules/header";

type IAuthenticatedLayoutProps = {
  children: React.ReactNode;
};

export default function AuthenticatedLayout({
  children,
}: IAuthenticatedLayoutProps) {
  return (
    <Box bg={"standard.light"} minHeight="100vh">
      <Header />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyItems={"center"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Box
          bg={"standard.light"}
          height="100%"
          py="xxxs"
          px="nano"
          width={"85%"}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
