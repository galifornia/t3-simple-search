import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState(q);

  const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="mx-auto flex w-full max-w-xl flex-col gap-4"
    >
      <label className="text-3xl font-bold" htmlFor="searchbar">
        Search
      </label>
      <input
        value={searchQuery}
        onChange={(ev) => setSearchQuery(ev.currentTarget.value)}
        className="mx-auto w-full max-w-xl flex-1 rounded-full bg-zinc-800 px-5 py-3 text-zinc-200 focus:bg-black focus:outline-none sm:px-3"
        placeholder="What are you looking for?"
        type="text"
        id="searchbar"
      />
    </form>
  );
};

export default SearchBar;
