import moment from "moment";
import Image from "next/image";
import Link from "next/link";

function getNextSaturday() {
  const today = moment();
  const nextSaturday = today.day(6); // 6 represents Saturday
  if (today.day() > 6) {
    nextSaturday.add(1, "weeks");
  }
  return nextSaturday.format("MM-DD-YYYY");
}

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col justify-center gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col justify-center items-center w-full ">
            <Image src="/Golf-PNG-File.png" alt="Next.js logo" width={180} height={58} priority className="" />
          </div>
          <div className="flex flex-col justify-center items-center md:w-128 bg-[#6c844c] text-[#f9e6bf] border-[#f9e6bf] border rounded-xl p-4 shadow-lg shadow-black">
            <p className="text-pretty">
              For weekly updates on your winnings and YTD earnings head on over to{" "}
              <Link href="/" className="text-xl hover:text-[#9caca7]">
                Daily/Weekly Scores
              </Link>
            </p>
            <br />
            <p className="text-pretty">
              Check out the{" "}
              <Link href={"/skinsheet?week=" + getNextSaturday()} className="text-xl hover:text-[#9caca7]">
                Skin Sheet
              </Link>{" "}
              for updates on weekly skins. See if you won before the next round of golf
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
