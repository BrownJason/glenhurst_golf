import { EarningsDataTable } from "@/components/ui/earningsdatatable";
import { YTDEarnings, columns } from "./columns";
import { fecthYtdEarnings } from "../lib/data";

async function getData(): Promise<YTDEarnings[]> {
  return await fecthYtdEarnings();
}

export default async function Page() {
  const data = await getData();

  let total = 0;

  data.forEach((amt) => {
    total += Number(amt.ytd_total);
  });

  return (
    <>
      <div className="mx-auto py-10 items-center">
        <EarningsDataTable columns={columns} data={data} />
        <div className="flex rounded-lg justify-center text-center text-4xl py-4 shadow-lg">
          <div className="flex justify-center text-center items-center w-128 bg-[#6c844c] text-[#f9e6bf] border-[#f9e6bf] border rounded-xl py-2 shadow-lg shadow-black">Total ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        </div>
      </div>
    </>
  );
}
