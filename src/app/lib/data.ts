import postgres from "postgres";
import { SkinSheet } from "../skinsheet/columns";
import { YTDEarnings } from "../earnings/columns";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "verify-full" });

export async function fetchSkins() {
  try {
    console.log("Fetching skins data...");
    const data = await sql<SkinSheet[]>`SELECT * FROM skins
            ORDER BY name asc`;
    console.log("Data fetch completed after 3 seconds.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch skins data.");
  }
}

export async function fetchSkinsByWeek(week: string) {
  try {
    console.log("Fetching skins data...");
    const data = await sql<SkinSheet[]>`SELECT * FROM skins
              WHERE week = TO_DATE(${week}, 'YYYY-MM-DD')
              ORDER BY name asc`;
    console.log("Data fetch completed after 3 seconds.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch skins data.");
  }
}

export async function fetchWeeks() {
  try {
    console.log("Fetching distinct weeks");
    const data = await sql`SELECT DISTINCT WEEK FROM skins
    WHERE week IS NOT NULL`;
    console.log("Data fetch completed after 3 seconds");

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Failed to fetch distinct weeks");
  }
}

export async function fecthYtdEarnings() {
  try {
    console.log("Fetching ytd earnigns...");
    const data = await sql<YTDEarnings[]>`SELECT p.id,  p.player_name, '' AS "group", null gross_score, p.hdcp,
      null net_score, null plc, ytd.place, ytd.skin, ytd.green, null hole,
      SUM(ytd.place + ytd.skin + ytd.green) ytd_total,
      CEIL((ytd.place + ytd.skin + ytd.green) / ytd.check_in::FLOAT) ytd_per_round
    FROM ytd_earnings ytd, players p
      WHERE p.player_id = ytd.player_id
    group by p.id, p.player_name, p.hdcp, ytd.place, ytd.skin, ytd.green, ytd.check_in
    ORDER BY p.id`;
    console.log("Data fetch competed...");

    return data;
  } catch (error) {
    console.log("Database error: " + error);
    throw new Error("Failed to fetch ytd earnings");
  }
}
