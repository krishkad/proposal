"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart with text";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function SuccessRate() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-w-[40px] aspect-square flex items-center justify-center"
    >
      <RadialBarChart
        width={40}
        height={40}
        data={chartData}
        startAngle={0}
        endAngle={250}
        innerRadius={6}
        outerRadius={12}
      >
        <PolarGrid gridType="circle" radialLines={false} stroke="none" />
        <RadialBar dataKey="visitors" background cornerRadius={2} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                const cx = viewBox.cx;
                const cy = viewBox.cy;
                return (
                  <text
                    x={cx! - 10}
                    y={cy}
                    textAnchor="end"
                    dominantBaseline="middle"
                  >
                    <tspan className="fill-foreground text-[6px] font-semibold">
                      {chartData[0].visitors}
                    </tspan>
                  </text>
                );
              }
              return null;
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
