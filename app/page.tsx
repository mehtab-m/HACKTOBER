// Placeholder home; the landing page replaces it in feature/landing-page.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-ink px-6 text-center text-chalk">
      <p className="font-tech text-xs uppercase tracking-[0.2em] text-signal">
        Template ready
      </p>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        ChalkScript AI
      </h1>
      <p className="max-w-md text-muted">
        Turn a photo of a hand-drawn website wireframe into an editable,
        interactive web preview.
      </p>
    </main>
  );
}
