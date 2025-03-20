import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col justify-center gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col justify-center items-center w-full">
            <Image src="/Golf-PNG-File.png" alt="Next.js logo" width={180} height={58} priority />
          </div>
          <div className="flex flex-col justify-center items-center bg-[#6c844c] text-[#f9e6bf] border-[#f9e6bf] border rounded-xl p-4">
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-[#f9e6bf]">
              <li className="mb-2">
                Get started by editing <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold ">src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </div>
        </main>
      </div>
    </>
  );
}
