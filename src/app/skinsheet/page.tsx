import { SkinsDataTable } from "@/components/ui/skinsdatatable";
import { SkinSheet, columns } from "./columns";
import { fetchSkins, fetchSkinsByWeek, fetchWeeks } from "../lib/data";

async function getData(): Promise<SkinSheet[]> {
  return await fetchSkins();
}

export default async function Leaderboard(props: {
  searchParams: Promise<{
    week: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const selectedWeek = String(searchParams?.week) || "03-22-2025";
  const data = selectedWeek !== null && selectedWeek !== "undefined" ? await fetchSkinsByWeek(new Date(selectedWeek).toISOString()) : await getData();

  const distinctWeeks = await fetchWeeks();

  return (
    <div className="mx-auto py-10 items-center">
      <SkinsDataTable columns={columns} data={data} weeks={distinctWeeks} />
    </div>
  );
}
