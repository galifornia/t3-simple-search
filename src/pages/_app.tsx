import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import SearchBar from "~/components/SearchBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
      <SearchBar />
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
