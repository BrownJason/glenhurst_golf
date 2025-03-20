"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SkinSheet = {
  id: string;
  hdcp: number;
  name: string;
  hole1: number;
  hole2: number;
  hole3: number;
  hole4: number;
  hole5: number;
  hole6: number;
  hole7: number;
  hole8: number;
  hole9: number;
  out: number;
  hole10: number;
  hole11: number;
  hole12: number;
  hole13: number;
  hole14: number;
  hole15: number;
  hole16: number;
  hole17: number;
  hole18: number;
  in: number;
  adj: number;
  week: string;
};

export const columns: ColumnDef<SkinSheet>[] = [
  {
    accessorKey: "hdcp",
    header: () => (
      <div>
        <div> </div>
        <div>HDCP</div>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: () => (
      <div>
        <div className="text-right">Par</div>
        <div className="grid grid-cols-2">
          Name <div className="text-right">Hole:</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "hole1",
    accessorFn: (row) => row.hole1,
    header: () => (
      <div className="text-center">
        <div>5</div>
        <div>1</div>
      </div>
    ),
  },
  {
    accessorKey: "hole2",
    accessorFn: (row) => row.hole2,
    header: () => (
      <div className="text-center">
        <div>3</div>
        <div>2</div>
      </div>
    ),
  },
  {
    accessorKey: "hole3",
    accessorFn: (row) => row.hole3,
    header: () => (
      <div className="text-center">
        <div>5</div>
        <div>3</div>
      </div>
    ),
  },
  {
    accessorKey: "hole4",
    accessorFn: (row) => row.hole4,
    header: () => (
      <div className="text-center">
        <div>3</div>
        <div>4</div>
      </div>
    ),
  },
  {
    accessorKey: "hole5",
    accessorFn: (row) => row.hole5,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>5</div>
      </div>
    ),
  },
  {
    accessorKey: "hole6",
    accessorFn: (row) => row.hole6,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>6</div>
      </div>
    ),
  },
  {
    accessorKey: "hole7",
    accessorFn: (row) => row.hole7,
    header: () => (
      <div className="text-center">
        <div>5</div>
        <div>7</div>
      </div>
    ),
  },
  {
    accessorKey: "hole8",
    accessorFn: (row) => row.hole8,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>8</div>
      </div>
    ),
  },
  {
    accessorKey: "hole9",
    accessorFn: (row) => row.hole9,
    header: () => (
      <div className="text-center">
        <div>3</div>
        <div>9</div>
      </div>
    ),
  },
  {
    accessorKey: "out",
    accessorFn: (row) => row.out,
    header: () => (
      <div className="text-center">
        <div>36</div>
        <div> </div>
      </div>
    ),
  },
  {
    accessorKey: "hole10",
    accessorFn: (row) => row.hole10,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>10</div>
      </div>
    ),
  },
  {
    accessorKey: "hole11",
    accessorFn: (row) => row.hole11,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>11</div>
      </div>
    ),
  },
  {
    accessorKey: "hole12",
    accessorFn: (row) => row.hole12,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>12</div>
      </div>
    ),
  },
  {
    accessorKey: "hole13",
    accessorFn: (row) => row.hole13,
    header: () => (
      <div className="text-center">
        <div>3</div>
        <div>13</div>
      </div>
    ),
  },
  {
    accessorKey: "hole14",
    accessorFn: (row) => row.hole14,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>14</div>
      </div>
    ),
  },
  {
    accessorKey: "hole15",
    accessorFn: (row) => row.hole15,
    header: () => (
      <div className="text-center">
        <div>3</div>
        <div>15</div>
      </div>
    ),
  },
  {
    accessorKey: "hole16",
    accessorFn: (row) => row.hole16,
    header: () => (
      <div className="text-center">
        <div>4</div>
        <div>16</div>
      </div>
    ),
  },
  {
    accessorKey: "hole17",
    accessorFn: (row) => row.hole17,
    header: () => (
      <div className="text-center">
        <div>3</div>
        <div>17</div>
      </div>
    ),
  },
  {
    accessorKey: "hole18",
    accessorFn: (row) => row.hole18,
    header: () => (
      <div className="text-center">
        <div>5</div>
        <div>18</div>
      </div>
    ),
  },
  {
    accessorKey: "in",
    accessorFn: (row) => row.in,
    header: () => (
      <div className="text-center">
        <div>70</div>
        <div>TTL</div>
      </div>
    ),
  },
  {
    accessorKey: "adj",
    accessorFn: (row) => row.adj,
    header: () => (
      <div className="text-center">
        <div>ADJ</div>
        <div>TTL</div>
      </div>
    ),
  },
];
