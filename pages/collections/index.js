import React, {useEffect, useState } from "react";

//components
import { RightBar, InfoBar, Header, SvgBanner } from "../../components";
import Collection from "./dnd-components/collection";

import Head from "next/head";
import { useRouter } from "next/router";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Collections(props) {
  const { bookmarks, user, fetchBookmarks, darkMode } = props;
  const [entities, setEntities] = useState({
    bookmarks: [
      { id: "bookmark-0", title: "Task 0" },
      { id: "bookmark-1", title: "Task 1" },
      { id: "bookmark-2", title: "Task 2" },
      { id: "bookmark-3", title: "Task 3" },
      { id: "bookmark-4", title: "Task 4" },
    ],
    collectionOrder: ["collection-0", "collection-1"],
    collections: {
      "collection-0": {
        id: "collection-0",
        title: "To do",
        bookmarkIDs: ["bookmark-0", "bookmark-1", "bookmark-2",]
      },
      "collection-1": {
        id: "collection-1",
        title: "Done",
        bookmarkIDs: ["bookmark-3", "bookmark-4"]
      }
    },
  });
  const onDragStart = (e) => {
  }
  const onDragEnd = (e) => {
    try {
            if (e.type === "collections") {
                let listsArr = entities.collectionOrder;
                let sourceIndex = e.source.index;
                let targetIndex = e.destination.index;

                let temp = listsArr[sourceIndex];
                listsArr.splice(sourceIndex, 1);
                listsArr.splice(targetIndex, 0, temp);

                setEntities({ ...entities, collectionOrder: listsArr })
            }
            else if (e.type === "bookmark") {
                let listsContent = entities.collections;

                let sourceList = e.source.droppableId,
                    targetList = e.destination.droppableId,
                    sourceIndex = e.source.index,
                    targetIndex = e.destination.index;

                let temp = listsContent[sourceList].bookmarkIDs[sourceIndex];
                listsContent[sourceList].bookmarkIDs.splice(sourceIndex, 1);

                if (!listsContent[targetList].bookmarkIDs)
                    listsContent[targetList].bookmarkIDs = [];
                listsContent[targetList].bookmarkIDs.splice(targetIndex, 0, temp);

                setEntities({ ...entities, bookmarks: listsContent })
            }
        } catch (err) {
            //Catching errors when the elements are dragged but not moved
            //Do Nothing...
        }
  }

  return(
    <div className="bg-image">
      <Head>
        <title>
          Collections - Code House
        </title>
      </Head>
      <Header {...props} />
      <SvgBanner
        text="Your Collections"
        description="These are the collections of your bookmarked cheatsheets, you can move stuff around by dragging and dropping them 🤟"
        image_url="/assets/3d/bookmarks.png"
        dark={darkMode}
      />
      <div className="min-h-screen w-full p-8">
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <Droppable droppableId="collections" direction="vertical" type="collections">
            {
              provided => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    entities.collectionOrder.map((collectionId, index) => (
                      <Collection key={collectionId} entities={entities} setEntities={setEntities} collectionId={collectionId} index={index} />
                    ))
                  }
                </div>
              )
            }
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}
