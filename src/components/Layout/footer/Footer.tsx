function Footer() {
  return (
    <footer className="mx-auto mt-20 w-[min(92rem,calc(100%-2rem))] border-t border-white/10 py-8">
      <div className="flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-black text-amber-200">CardStone</h2>
          <p className="mt-2 max-w-2xl">
            Built with HearthstoneJSON card data and rendered card images.
          </p>
        </div>
        <a
          href="https://hearthstonejson.com"
          target="_blank"
          className="font-bold text-teal-200 transition hover:text-teal-100"
        >
          hearthstonejson.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
