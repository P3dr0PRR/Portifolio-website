export function CodePreviewCard() {
  return (
    <aside className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <p className="text-xs text-gray-300">developer.ts</p>
      </header>

      <pre className="overflow-x-auto px-5 py-4 text-sm leading-6 text-gray-200">
        <code>
{`const developer = {
  name: "Pedro Paulo",
  role: "Frontend Developer",
  location: "Brazil",
  stack: ["React", "TypeScript", "Tailwind CSS"],
  focus: ["Clean UI", "Reusable Components", "Performance"],
  openToWork: true
};`}
        </code>
      </pre>
    </aside>
  );
}
