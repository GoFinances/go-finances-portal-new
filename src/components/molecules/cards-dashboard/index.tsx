import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import { Box, Container } from "../../atomic";
import { Text } from "../../atomic/Text";

export type IType = "income" | "outcome" | "total";

interface ICardDashboard {
  type: IType;
  description: string;
  value: string | undefined;
}

export default function CardDashboard({
  type,
  description,
  value,
}: ICardDashboard) {
  return (
    <Box
      bg="standard.white"
      color="brand.primary-default"
      padding="xxxs"
      display="flex"
      flexDirection="column"
      borderRadius="10px"
    >
      <Container
        p="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="b">{description}</Text>
        <Icon
          as={
            type === "income"
              ? ArrowUpIcon
              : type === "outcome"
              ? ArrowDownIcon
              : InfoOutlineIcon
          }
        />
      </Container>
      <Text fontSize="md">{value || "-"}</Text>
    </Box>
  );
}
ArrowDownIcon;
