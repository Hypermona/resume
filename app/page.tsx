import Header from "./components/Header";
import useResumeData from "./hooks/useResumeData";

export default function Home() {
  const { headerData } = useResumeData();
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto mt-20 w-[100vw] sm:w-[50vw] flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header {...headerData} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
