const quotes = [
  {
    text: "Do so much work that it would be unreasonable for you to not be successful.",
    author: "Alex Hormozi",
  },
  {
    text: "The best way to predict the future is to build it.",
    author: "Alan Kay",
  },
  {
    text: "First solve the problem. Then write the code.",
    author: "John Johnson",
  },
  {
    text: "Stay hungry. Stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "A little progress each day adds up to big results.",
    author: "Satya Nani",
  },
  {
    text: "Consistency compounds faster than intensity.",
    author: "Unknown",
  },
  {
    text: "The obstacle is the way.",
    author: "Marcus Aurelius",
  },
  {
    text: "Focus on the process, not the outcome.",
    author: "James Clear",
  },
];
export default function Footer() {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const quote = quotes[dayOfYear % quotes.length];

  return (
    <footer className="mt-16 border-t border-white/[0.06]">
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-[580px] text-center">

          <span
            aria-hidden="true"
            className="block text-[56px] leading-none text-white/[0.06] mb-[-0.2em]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            "
          </span>

          <p
            className="text-[30px] font-medium italic leading-[1.65] text-white/80"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            "{quote.text}"
          </p>

          <div className="flex items-center justify-center gap-2.5 mt-6">
            <div className="w-6 h-px bg-white/15" />
            <span className="text-[15px] tracking-[0.2em] uppercase text-white/30">
              {quote.author}
            </span>
            <div className="w-6 h-px bg-white/15" />
          </div>

        </div>
      </div>
    </footer>
  );
}