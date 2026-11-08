import Link from "next/link";
import Image from "next/image";

const menu = [
  { label: "Home", items: [{ label: "About", href: "/#about" }, { label: "What we do", href: "/#proto" }] },
  { label: "Team", items: [{ label: "Current team", href: "/team" }] },
  { label: "Events", items: [{ label: "Upcoming", href: "/events" }] },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/"><Image src="/logo.png" alt="Prototype" width={36} height={36} /></Link>
        <ul className="flex gap-6 font-pixel text-xl uppercase">
          {menu.map((m) => (
            <li key={m.label} className="group relative">
              <span className="cursor-pointer">{m.label}</span>
              <div className="invisible absolute right-0 top-full min-w-40 rounded-lg border border-ink/10 bg-cream p-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                {m.items.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded px-3 py-1.5 hover:bg-ink hover:text-cream">
                    {i.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}