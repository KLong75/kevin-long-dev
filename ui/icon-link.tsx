export default function IconLink({
  href,
  icon: Icon,
  size,
  label
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  size: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors duration-300"
    >
      <span className="sr-only">{label}</span>
      <Icon className="icon-link " size={size}  />
    </a>
  );
}
