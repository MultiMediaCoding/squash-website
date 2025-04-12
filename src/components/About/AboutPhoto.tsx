export function AboutPhoto({
  image,
  subtitle,
}: {
  image: string;
  subtitle: string;
}) {
  return (
    <div>
      <img className="rounded-xl" src={image} alt={subtitle} />
      <p className="mt-2 text-xs text-muted-foreground">{subtitle}</p>
    </div>
  );
}
