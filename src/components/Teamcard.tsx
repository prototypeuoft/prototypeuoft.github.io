import Image from "next/image";

export type Member = { name: string; title: string; photo?: string };

export default function TeamCard({ name, title, photo }: Member) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/60 p-4 text-center">
      <div className="mx-auto mb-3 h-28 w-28 overflow-hidden rounded-2xl bg-ink/10">
        {photo && <Image src={photo} alt={name} width={112} height={112} className="h-full w-full object-cover" />}
      </div>
      <p className="font-pixel text-2xl uppercase">{name}</p>
      <p className="italic text-ink/70">{title}</p>
    </div>
  );
}