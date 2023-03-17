import { NextPage } from "next";
import PostList from "~/components/PostList";
import { api } from "~/utils/api";

interface Props {
  search?: string;
}
const Search: NextPage<Props> = ({ search }) => {
  const posts = api.search.searchQuery.useQuery(search || "");
  return (
    <>
      <PostList posts={posts.data || []} />
    </>
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
