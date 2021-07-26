import React, {useEffect, useState} from "react";

import {Draggable} from "react-beautiful-dnd";

import BookMarksItem from "./bookmarks.js";

export default function Collection({entities, setEntities, collectionId, index}) {
  return (
    <Draggable draggableId={entities.collections[collectionId].id} index={index} isDragDisabled={false}>
      {
        provided => (
          <div className="h-[305px] mb-8 rounded-lg dark:bg-[#ffffff20] border-b-[1px] border-[#eeeeee30]" {...provided.draggableProps} ref={provided.innerRef} style={provided.draggableProps.style}>
            <div className="h-full w-full p-4">
              <h1 {...provided.dragHandleProps} className="text-2xl font-bold text-[#fff]">{entities.collections[collectionId].title}</h1>
              <div className="h-full w-full">
                <BookMarksItem collectionId={collectionId} bookmarkData={entities.bookmarks} bookmarkIDs={entities.collections[collectionId].bookmarkIDs} entities={entities} setEntities={setEntities}/>
              </div>
            </div>
          </div>
        )
      }
    </Draggable>
  )
}
