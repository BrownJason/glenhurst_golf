"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type YTDEarnings = {
  id: string;
  player_name: string;
  group: number;
  gross_score: number;
  hdcp: number;
  net_score: number;
  plc: number;
  place: number;
  skin: number;
  green: number;
  hole: number;
  ytd_total: number;
  ytd_per_round: number;
  week: string;
};

export const columns: ColumnDef<YTDEarnings>[] = [
  {
    accessorKey: "player_name",
    accessorFn: (row) => row.player_name,
    header: () => (
      <div>
        <div className="text-left">Name</div>
      </div>
    ),
  },
  {
    accessorKey: "group",
    accessorFn: (row) => row.group,
    header: () => (
      <div>
        <div>Group</div>
      </div>
    ),
  },
  {
    accessorKey: "gross_score",
    accessorFn: (row) => row.gross_score,
    header: () => (
      <div>
        <div>Gross Score</div>
      </div>
    ),
  },
  {
    accessorKey: "hdcp",
    accessorFn: (row) => row.hdcp,
    header: () => (
      <div>
        <div>Less HDCP</div>
      </div>
    ),
  },
  {
    accessorKey: "net_score",
    accessorFn: (row) => row.net_score,
    header: () => (
      <div>
        <div>Net Score</div>
      </div>
    ),
  },
  {
    accessorKey: "plc",
    accessorFn: (row) => row.plc,
    header: () => (
      <div>
        <div>PLC</div>
      </div>
    ),
  },
  {
    accessorKey: "place",
    accessorFn: (row) => row.place,
    header: () => (
      <div>
        <div>YTD Place $</div>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("place"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "skin",
    accessorFn: (row) => row.skin,
    header: () => (
      <div>
        <div>YTD Skin $</div>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("skin"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "green",
    accessorFn: (row) => row.green,
    header: () => (
      <div>
        <div>YTD Green $</div>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("green"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "hole",
    accessorFn: (row) => row.hole,
    header: () => (
      <div>
        <div>Hole</div>
      </div>
    ),
  },
  {
    accessorKey: "ytd_total",
    accessorFn: (row) => row.ytd_total,
    header: () => (
      <div>
        <div>YTD Total $</div>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("ytd_total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "ytd_per_round",
    accessorFn: (row) => row.ytd_per_round,
    header: () => (
      <div>
        <div>YTD $/Rnd</div>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("ytd_per_round"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
