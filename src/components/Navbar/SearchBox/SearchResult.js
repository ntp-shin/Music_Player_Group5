import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../../../api/search";
import TrackPlaylist from "../../TrackPlaylist";

const SearchResult = () => {
  const params = useParams();

  const [dataSearch, setDataSearch] = useState();

  useEffect(() => {
    (async () => {
      setDataSearch(await getSearch(params.keyword));
    })();
  }, [params]);

  console.log(dataSearch);

  return (
    <>
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        <div className="mt-8">
          {dataSearch && <TrackPlaylist items={dataSearch.songs} />}
        </div>
      </main>
    </>
  );
};

export default SearchResult;
