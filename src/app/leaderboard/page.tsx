import { SkinsDataTable } from "@/components/ui/skinsdatatable";
import { SkinSheet, columns } from "./columns";
import data from "../../data/data.json";

async function getData(): Promise<SkinSheet[]> {
  const s: SkinSheet[] = data;
  return s;
}

export default async function Leaderboard() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <SkinsDataTable columns={columns} data={data} />
    </div>
  );
}
