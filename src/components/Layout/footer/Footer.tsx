function Footer() {
  return (
    <div className="ml-14 p-8">
      <h2 className="text-xl text-teal-400 font-bold mb-2">HearthstoneJSON</h2>
      <h4 className="font-semibold text-slate-300 mt-4">
        This website uses HearthstoneJSON for card data and images.
      </h4>
      <a href="https://hearthstonejson.com" target="_blank">
        <h4 className="font-semibold text-teal-400 mt-4">hearthstonejson.com</h4>
      </a>
      <h4 className="font-semibold text-slate-300 mt-4">
        Card backs are currently unavailable because HearthstoneJSON does not expose a card back API.
      </h4>
    </div>
  );
}

export default Footer;
