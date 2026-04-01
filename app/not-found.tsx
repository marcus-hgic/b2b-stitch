import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold font-headline text-duck-blue">
          404
        </h1>
        <p className="text-xl text-slate-text">
          Sidan du söker kunde inte hittas.
        </p>
        <Link
          href="/"
          className="inline-block bg-duck-blue text-white px-8 py-3 rounded-xl font-semibold hover:bg-duck-blue-light transition-colors"
        >
          Till startsidan
        </Link>
      </div>
    </main>
  );
}
