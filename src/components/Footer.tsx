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
      86400000,
  );

  const quote = quotes[dayOfYear % quotes.length];

  return (
    <footer className="mt-16 pt-6 border-t border-[#1a1a1a]">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="max-w-[600px] px-6 text-center">
          {/* Add SVG here */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-5 text-zinc-800"
          >
            <path
              d="M10 11H6.5C6.5 7.5 8.5 5.5 12 5V7C10.2 7.4 9 8.5 9 10H10C11.1 10 12 10.9 12 12C12 13.1 11.1 14 10 14C8.9 14 8 13.1 8 12C8 11.4 8.2 10.9 8.5 10.5M18 11H14.5C14.5 7.5 16.5 5.5 20 5V7C18.2 7.4 17 8.5 17 10H18C19.1 10 20 10.9 20 12C20 13.1 19.1 14 18 14C16.9 14 16 13.1 16 12C16 11.4 16.2 10.9 16.5 10.5"
              fill="currentColor"
            />
          </svg>

          <h3 className="text-[20px] md:text-[18px] font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
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
