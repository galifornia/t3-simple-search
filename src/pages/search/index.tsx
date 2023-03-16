import { NextPage } from "next";
import { api } from "~/utils/api";

interface Props {
  search?: string;
}
const Search: NextPage<Props> = ({ search }) => {
  const result = api.search.searchQuery.useQuery({ text: search || "" });
  return (
    <div>
      Search page
      <p>{result.data}</p>
    </div>
  );
};

Search.getInitialProps = async ({ query }) => {
  const { q } = query;
  if (!q) return { search: "" };

  let term = "";
  if (typeof q === "object") {
    term = q[0] || "";
  }

  if (typeof q === "string") {
    term = q;
  }

  return { search: term };
};

export default Search;
