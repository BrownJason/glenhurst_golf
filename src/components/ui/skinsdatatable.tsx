/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ColumnDef, flexRender, getCoreRowModel, RowData, ColumnFiltersState, getFilteredRowModel, useReactTable, Row } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import clsx from "clsx";
import WeekSelection from "@/app/leaderboard/weekselect/weekselection";
import { RowList } from "postgres";

export interface SkinsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  weeks: any;
}

export function SkinsDataTable<TData, TValue>({ columns, data, weeks }: SkinsDataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div className="flex flex-col m-4">
      <div className="flex justify-center text-center w-full">Skin Sheet</div>
      <div className="flex py-4 w-full">
        <div className="flex justify-start py-4 md:w-128">
          Filter by name: &nbsp; <Input placeholder="Filter names..." value={(table.getColumn("name")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)} className="max-w-sm" />
        </div>
        <div className="justify-end py-4 flex-1">
          Week of <WeekSelection week={weeks} />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className={clsx(header.id === "name" ? "text-center sticky left-15 bg-gray-600 border border-black" : !header.id.includes("hole") && !header.id.includes("in") && !header.id.includes("out") && !header.id.includes("adj") ? "text-center sticky left-0 bg-gray-600 border border-black" : "text-center bg-gray-600 border border-black")}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className={clsx(cell.id.includes("name") ? "text-center sticky left-15 bg-gray-600 border border-black" : !cell.id.includes("hole") && !cell.id.includes("in") && !cell.id.includes("out") && !cell.id.includes("adj") ? "text-center sticky left-0 bg-gray-600 border border-black" : "text-center bg-gray-600 border border-black")}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
