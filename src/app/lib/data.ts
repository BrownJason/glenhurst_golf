import postgres from "postgres";
import { SkinSheet } from "../leaderboard/columns";

const sql = postgres(process.env.DATABASE_URL, { ssl: "verify-full" });

export async function fetchSkins() {
  try {
    console.log("Fetching skins data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

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
    await new Promise((resolve) => setTimeout(resolve, 3000));

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
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql`SELECT DISTINCT WEEK FROM skins
    WHERE week IS NOT NULL`;

    console.log("Data fetch completed after 3 seconds");

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Failed to fetch distinct weeks");
  }
}
