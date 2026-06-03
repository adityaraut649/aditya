type GamingCardProps = {
  artUrl: string;
  logoUrl: string;
  logoAlt: string;
  href: string;
  title?: string;
  isActive?: boolean;
};

export default function GamingCard({
  artUrl,
  logoUrl,
  logoAlt,
  href,
  title,    
  isActive = false,
}: GamingCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[70px] w-full max-w-[430px] items-center overflow-hidden rounded-sm border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    >
      {/* Background */}
      <img
        src={artUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_7%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4 px-4">
        <div className="rounded-md bg-white p-1">
          <img
            src={logoUrl}
            alt={logoAlt}
            className="h-12 w-auto object-contain"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{title}</p>

          <p className="text-xs text-zinc-400">Currently Playing</p>
           <div className="flex items-center gap-2">
            <span
                className={`h-2 w-2 rounded-full ${
                isActive ? "bg-green-500" : "bg-zinc-500"
                }`}
            />
            <p className="text-xs text-zinc-400">
                {isActive ? "Currently Playing" : "Offline"}
            </p>
            </div>
        </div>
      </div>
    </a>
  );
}
