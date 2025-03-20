"use client";

import { ColumnDef, flexRender, getCoreRowModel, ColumnFiltersState, getFilteredRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import clsx from "clsx";
import WeekSelection from "@/app/skinsheet/weekselect/weekselection";

export interface SkinsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="flex flex-col m-4 rounded-lg">
      <div className="flex rounded-lg justify-center text-center text-4xl py-4">
        <div className="flex justify-center text-center items-center w-128 bg-[#6c844c] text-[#f9e6bf] border-[#f9e6bf] border rounded-xl py-2">Skin Sheet</div>
      </div>
      <div className="flex rounded-lg justify-center text-center py-4">
        <div className="flex justify-center items-center w-128 bg-[#6c844c] text-[#f9e6bf] border-[#f9e6bf] border rounded-xl pr-4 pl-">
          <span className="flex flex-row justify-center items-center text-center w-full py-4">
            <div>Filter by name:</div> &nbsp;
            <Input placeholder="Filter names..." value={(table.getColumn("name")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)} className="w-48" />
          </span>
        </div>
      </div>
      <div className="flex rounded-lg justify-center text-center py-4 border-[#f9e6bf]">
        <div className="flex justify-center items-center py-4 w-128 bg-[#6c844c] border-[#f9e6bf] border">
          <WeekSelection week={weeks} />
        </div>
      </div>
      <div className="rounded-xl border text-[#f9e6bf] bg-[#6c844c] border-[#f9e6bf]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className={clsx(header.id === "name" ? "text-center sticky left-15 bg-[#6c844c] border border-[#f9e6bf]" : !header.id.includes("hole") && !header.id.includes("in") && !header.id.includes("out") && !header.id.includes("adj") ? "text-center sticky left-0 bg-[#6c844c] border border-[#f9e6bf]" : "text-center bg-[#6c844c]border border-[#f9e6bf]")}>
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
                    <TableCell key={cell.id} className={clsx(cell.id.includes("name") ? "text-center sticky left-15 bg-[#6c844c] border border-[#f9e6bf]" : !cell.id.includes("hole") && !cell.id.includes("in") && !cell.id.includes("out") && !cell.id.includes("adj") ? "text-center sticky left-0 bg-[#6c844c] border border-[#f9e6bf]" : "text-center bg-[#6c844c] border border-[#f9e6bf]")}>
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
