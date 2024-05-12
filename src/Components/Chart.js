import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Stack } from "@mui/material";

export default function Chart(totalExpense, totalIncome) {
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
              data: [
                { id: "id_A", value: totalIncome, label: "Income" },
                { id: "id_B", value: totalExpense, label: "Expenses" },
              ],
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
