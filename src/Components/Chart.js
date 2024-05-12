import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

import { Typography, Stack } from "@mui/material";

const items = [
  { id: "id_A", value: 10, label: "Savings" },
  { id: "id_B", value: 15, label: "Household" },
  { id: "id_C", value: 20, label: "Transportation" },
  { id: "id_D", value: 20, label: "Personal" },
  { id: "id_E", value: 20, label: "Education" },
];
export default function Chart() {
  return (
    <div className="Chart_Content">
      <center>
        <h1> Your Expenses</h1>
      </center>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Typography
          component="pre"
          sx={{
            maxWidth: { xs: "100%", md: "50%", flexShrink: 1 },
            overflow: "auto",
          }}
        ></Typography>

        <PieChart
          series={[
            {
              data: items,
            },
          ]}
          width={500}
          height={300}
          margin={{ right: 200 }}
        />
      </Stack>
    </div>
  );
}
