export default function IconLink({
  href,
  icon: Icon,
  size
}: {
  href: string;
  icon: React.ElementType;
  size: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors duration-300"
    >
      <Icon className="icon-link shadow-green-500/50" size={size}  />
    </a>
  );
}
