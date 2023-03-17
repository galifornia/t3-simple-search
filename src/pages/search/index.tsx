import { NextPage } from "next";
import { api } from "~/utils/api";

interface Props {
  search?: string;
}
const Search: NextPage<Props> = ({ search }) => {
  const posts = api.search.searchQuery.useQuery(search || "");
  return (
    <div>
      Search page
      {posts?.data?.map((post) => {
        return <div>{post.body}</div>;
      })}
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
