import React from "react";
import { useTransaction } from "../../../hooks/use-transacion";

import { Grid } from "../../atomic";
import CardDashboard, { IType } from "../../molecules/cards-dashboard";

export default function CardsDash() {
  const { balance } = useTransaction();

  const cards = [
    {
      type: "income",
      description: "A Receber",
      value: balance?.income_formatted,
    },
    {
      type: "outcome",
      description: "A pagar",
      value: balance?.outcome_formatted,
    },
    { type: "total", description: "Total", value: balance?.total_formatted },
  ];
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {cards.map(({ type, description, value }) => (
        <CardDashboard
          key={type}
          type={type as IType}
          description={description}
          value={value}
        />
      ))}
    </Grid>
  );
}
