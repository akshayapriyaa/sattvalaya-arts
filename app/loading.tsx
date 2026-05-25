export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fdfbf7] px-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-orange-300 bg-white shadow-xl">
        <img src="/logo.png" alt="Sattvalaya Arts logo" className="h-16 w-16 object-contain" />
      </div>
      <p className="mt-6 text-base font-medium text-slate-800">Preparing a calm journey...</p>
      <div className="mt-6 h-2 w-48 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-16 animate-pulse rounded-full bg-orange-500" />
      </div>
    </div>
  );
}
