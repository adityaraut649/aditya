export default function Footer() {
  return (
    <footer className="mt-16 pt-6 border-t border-[#1a1a1a]">
      <div className="flex flex-wrap justify-center gap-4 text-[#444] text-xs mb-4">
        {[
          { label: "home", href: "#" },
          { label: "resume", href: "/resume.pdf" },
          { label: "github", href: "https://github.com/adityaraut649" },
          { label: "linkedin", href: "https://www.linkedin.com/in/aditya-raut-%E2%9A%A1-6b7988215/" },
          { label: "twitter", href: "https://x.com/A9449Raut" },
          { label: "dev.to", href: "https://dev.to/adityaraut649" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hover:text-[#888] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-center text-[#333] text-xs">
        © 2025 Aditya Raut — Nagpur, India
      </p>
    </footer>
  );
}
