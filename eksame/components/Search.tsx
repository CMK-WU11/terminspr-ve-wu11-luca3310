export default function Search() {
  return (
    <form className="flex overflow-hidden px-5 mb-12 w-full rounded-xl">
      <input className="p-4 w-full bg-opacity-30 focus:outline-none text-primaryWhite bg-[#C4C4C4]" />
      <button className="p-4 bg-opacity-30 bg-[#C4C4C4]">
        <img src="/images/searchWhite.svg" />
      </button>
    </form>
  );
}
