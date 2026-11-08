const proto = [
  ["P", "Product"],
  ["R", "Research"],
  ["O", "Optimized"],
  ["T", "Tech"],
  ["O", "Organization"],
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-6">
        <h1 className="font-pixel text-6xl uppercase leading-[0.95] md:text-8xl">
          Something is being prototyped
          <span className="cursor ml-2 inline-block h-[0.8em] w-[0.4em] bg-accent" />
        </h1>
        <p className="mt-6 max-w-xl text-xl italic">
          If you're interested in building tech that matters, Prototype is a UTSC
          club where students turn ideas into real, working projects together.
        </p>
      </section>

      <section id="proto" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-8 font-pixel text-4xl uppercase">What PROTO stands for</h2>
        <ul className="space-y-2">
          {proto.map(([letter, word], i) => (
            <li key={i} className="flex items-baseline gap-4 border-b border-ink/10 pb-2">
              <span className="font-pixel text-5xl">{letter}</span>
              <span className="text-2xl italic">{word}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        {/* About, Team preview, Join CTA go here */}
      </section>
    </main>
  );
}