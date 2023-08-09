import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/rohmah&muhammad">
        <h1 className="text-5xl text-teal-600 font-bold text-center">
          Married Now
        </h1>
      </Link>
    </main>
  );
}
