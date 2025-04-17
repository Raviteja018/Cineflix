import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import Search from "./Search";

export default function Browse() {
  const search = useSelector((store) => store.search.showSearch);

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Content offset by header height */}
      <div className="pt-[20px] pb-16 px-4 md:px-8">
        {search ? (
          <Search />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
}
