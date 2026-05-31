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

  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      86400000
  );

  const quote = quotes[dayOfYear % quotes.length];

  return (
    <footer className="mt-16 pt-6 border-t border-[#1a1a1a]">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="max-w-[600px] px-6 text-center">
          <h3 className="text-[16px] md:text-[18px] font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
            "{quote.text}"
          </h3>

          <div className="mt-6 flex items-center justify-center gap-3 text-[10px] font-medium tracking-[0.25em] text-zinc-400 dark:text-zinc-600 uppercase">
            <div className="w-6 h-px bg-zinc-200 dark:bg-zinc-800" />
            {quote.author}
            <div className="w-6 h-px bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </div>
    </footer>
  );
}