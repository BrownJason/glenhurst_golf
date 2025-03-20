/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import moment from "moment";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function WeekSelection(props: { week: any[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const data = props.week.map((val) => {
    return moment(val.week).add(1, "days").format("MM-DD-YYYY");
  });

  function handleOnChange(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set("week", term);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-end rounded-lg bg-none text-[#f9e6bf]">
      <div className="flex text-center items-center pr-4 pl-4">Week of </div>
      <Select onValueChange={(e) => handleOnChange(e)}>
        <SelectTrigger className="w-[180px] border-[#f9e6bf] bg-[#6c844c] ">
          <SelectValue placeholder={searchParams.get("week")?.toString()} defaultValue={searchParams.get("week")?.toString()} className="border-[#f9e6bf bg-[#5f5933]" />
        </SelectTrigger>
        <SelectContent className="bg-[#6c844c] border-[#f9e6bf] text-[#f9e6bf]">
          {data.map((weeks) => {
            return (
              <SelectItem value={weeks} key={weeks}>
                {weeks}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
