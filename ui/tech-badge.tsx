export default function TechBadge({
  name,
  documentationUrl,
}: {
  name: string;
  documentationUrl: string;
}) {
  return (
    <li className="font-share-tech-mono text-shadow-white-thin font-bold m-2 border-4 border-zinc-900 shadow-md shadow-zinc-200/50 text-center rounded-2xl text-black text-sm bg-green-500 p-1">
      <a
        href={documentationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-neutral-600 transition-colors duration-200">
        {name}
      </a>
    </li>
  );
}
