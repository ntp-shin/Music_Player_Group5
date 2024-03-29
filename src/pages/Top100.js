import React, { useEffect, useState } from "react"
import { getTop100 } from "../api/top100"
import PlaylistCover from "../components/PlaylistCover"

const Top100 = () => {

  const [dataTop100, setDataTop100] = useState()

  useEffect(() => {
    (
      async () => {
        setDataTop100(await getTop100())
      }
    )()
  }, [])

  return (
    <>
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        {/* Playlist */}
        <div className="mt-8">
          {
            dataTop100 &&
            dataTop100.map((e, i) => (
              <>
                <div
                  className="flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mt-9 mb-3 uppercase">
                  {(e.title === "") ? (e.sectionId.slice(1)) : (e.title)}
                </div>
                <div
                  className="grid grid-cols-5 gap-x-6 gap-y-11">
                  {
                    e.items.map((element, index) => (
                      <PlaylistCover
                        title={element.title}
                        link={`/playlist/${element.encodeId}`}
                        thumbnail={element.thumbnail}
                        sortDescription={element.sortDescription}
                      />
                    ))
                  }
                </div>
              </>
            ))
          }
        </div>
        {/* End Playlist */}
      </main>
    </>
  )
}

export default Top100