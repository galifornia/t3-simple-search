import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <form onSubmit={onSearch}>
      <label htmlFor="searchbar">Search</label>
      <input
        value={searchQuery}
        onChange={(ev) => setSearchQuery(ev.currentTarget.value)}
        className="w-full max-w-xl flex-1 rounded-full bg-zinc-800 px-5 py-3 text-zinc-200 focus:bg-black focus:outline-none sm:px-3"
        placeholder="What are you looking for?"
        type="text"
        id="searchbar"
      />
    </form>
  );
};

export default SearchBar;
