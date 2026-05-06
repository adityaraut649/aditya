export default function ContactSection() {
  return (
    <section className="mt-10">
      <p className="text-[#555] text-xs uppercase tracking-widest mb-4 font-medium">Contact</p>
      <p className="text-sm text-[#999]">
        Email:{" "}
        <a
          href="mailto:vraut3468@gmail.com"
          className="text-[#e8e8e8] hover:text-white transition-colors"
        >
          vraut3468@gmail.com
        </a>
      </p>
      <p className="text-sm text-[#666] mt-2">
        Based in <span className="text-[#888]">Nagpur, India</span> — open to remote work worldwide.
      </p>
      <p className="text-sm text-[#555] mt-1">I typically reply within 24 hours.</p>
    </section>
  );
}
