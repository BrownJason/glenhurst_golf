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

  const dateValidation = new Date(selectedWeek);
  const distinctWeeks = await fetchWeeks();

  if (dateValidation.toString() === "Invalid Date") {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col justify-center gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col justify-center items-center md:w-128 bg-[#6c844c] text-[#f9e6bf] border-[#f9e6bf] border rounded-xl p-4 shadow-lg shadow-black">
            <h1>{dateValidation.toString()}</h1>
          </div>
        </main>
      </div>
    );
  } else {
    const data = selectedWeek !== null && selectedWeek !== "undefined" ? await fetchSkinsByWeek(new Date(selectedWeek).toISOString()) : await getData();
    return (
      <div className="mx-auto py-10 items-center">
        <SkinsDataTable columns={columns} data={data} weeks={distinctWeeks} />
      </div>
    );
  }
}
