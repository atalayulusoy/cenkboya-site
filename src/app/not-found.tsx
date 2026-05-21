import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060814] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2c14e]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Sayfa bulunamadi</h1>
        <p className="mt-4 text-base text-white/70">
          Aradiginiz sayfa tasinmis veya artik kullanilmiyor olabilir.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#f2c14e] px-6 py-3 text-sm font-semibold text-[#11131d] transition hover:bg-white"
        >
          Ana sayfaya don
        </Link>
      </div>
    </main>
  );
}
