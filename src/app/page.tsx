import Link from "next/link";
const mockURls = [
  "https://utfs.io/f/iKojBVO7bdekpY5NpJyWD2lJeULtb6SmXvPcROGC8f3ndraY",
  "https://utfs.io/f/iKojBVO7bdekwbtaLnNMmETY8Z3jpnGLfxvQDueKsrz1C0Oq",
];

const mockImages = mockURls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
