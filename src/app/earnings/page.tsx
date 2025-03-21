import { EarningsDataTable } from "@/components/ui/earningsdatatable";
import { YTDEarnings, columns } from "./columns";
import { fecthYtdEarnings } from "../lib/data";

async function getData(): Promise<YTDEarnings[]> {
  return await fecthYtdEarnings();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <div className="mx-auto py-10 items-center">
        <EarningsDataTable columns={columns} data={data} />
      </div>
    </>
  );
}
