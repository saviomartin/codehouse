import React, {useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Collection from "./Collection";

import { FiPlus } from "react-icons/fi";

function updateLocalStorage(data) {
  if(window.localStorage !== null) {
    window.localStorage.setItem("codehouse-collections", null);
    window.localStorage.setItem("codehouse-collections", JSON.stringify(data));
  }
}

function getLocalStorage() {
  // window.localStorage.setItem("codehouse-collections", null);

  let data = {};
  if(window.localStorage !== null) {
    if(JSON.parse(window?.localStorage?.getItem("codehouse-collections")))
      data = JSON.parse(window.localStorage.getItem("codehouse-collections"));
    else {
      data = {
        bookmarks: [],
        collectionOrder: [],
        collections: {},
      };
      updateLocalStorage(data);
    }
  }
  return data;
}

function Dnd({bookmarks, fetchBookmarks, entities, setEntities, showBookmarks, setShowBookmarks}) {
  const [collectionName, setCollectionName] = useState("");

  const addNewCollection = (e) => {
    if(collectionName.trim()) {
      const newCollectionID = `collection-${Object.keys(entities.collections).length + 1}`;
      let collections = entities.collections;
      const emptyCollection = {
        id: newCollectionID,
        title: collectionName,
        bookmarkIDs: []
      }
      collections[newCollectionID] = emptyCollection;

      let collectionOrder = entities.collectionOrder;
      collectionOrder.push(newCollectionID);

      setEntities({...entities, collections, collectionOrder});
      setCollectionName("");
    }
  }
  const onDragStart = (e) => {}
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

                setEntities({ ...entities, collections: listsContent })
            }
        } catch (err) {
            //Catching errors when the elements are dragged but not moved
            //Do Nothing...
        }
  }

  useEffect(() => {
    setEntities(getLocalStorage());
  }, []);

  useEffect(() => {
    if(entities)
      updateLocalStorage(entities);
  }, [entities]);

  return(
    <div className="min-h-screen w-full p-8">
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId="collections" direction="vertical" type="collections">
          {
            provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="flex items-center justify-between w-full bg-[#ffffff20] dark:bg-[#ffffff20] rounded-lg p-4 mb-8 border-b-[1px] border-[#eeeeee30]">
                  <input type="text" placeholder="Add new collection..." className="bg-transparent text-[#fff] w-full" onKeyDown={(e) => {if(e.keyCode === 13) addNewCollection();}} value={collectionName} onChange={(e) => setCollectionName(e.target.value)} />
                  <div className="bg-[#3d5eff] active:bg-[#000] p-2 cursor-pointer shine rounded-lg" onClick={addNewCollection}>
                    <FiPlus className="text-white" />
                  </div>
                </div>
                {
                  entities?.collectionOrder && entities.collectionOrder.map((collectionId, index) => (
                    <Collection key={collectionId} entities={entities} setEntities={setEntities} collectionId={collectionId} index={index} showBookmarks={showBookmarks} setShowBookmarks={setShowBookmarks} bookmarks={bookmarks} fetchBookmarks={fetchBookmarks} />
                  ))
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Dnd;
