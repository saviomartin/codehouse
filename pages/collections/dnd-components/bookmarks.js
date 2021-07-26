import React, { useEffect, useState } from "react";

import {Droppable, Draggable} from "react-beautiful-dnd";

export default function BookmarksItem({collectionId, bookmarkData, bookmarkIDs, entities, setEntities}) {
    return (
      <Droppable droppableId={collectionId} type="bookmark" direction="horizontal">
        {
          provided => (
            <div
              className="overflow-x-auto overflow-y-hidden whitespace-nowrap"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
            {
              bookmarkIDs ? (
                bookmarkIDs.map((bookmarkID, index) => (
                  <Draggable draggableId={bookmarkID} index={index} key={bookmarkID}>
                    {
                      provided => (
                        <div className="inline-block mt-4 mr-4" {...provided.draggableProps} style={provided.draggableProps.style} ref={provided.innerRef}>
                          <div className="h-56 w-72 dark:bg-[#ffffff20] border-b-[1px] border-[#eeeeee30] p-4 rounded-xl" {...provided.dragHandleProps}>
                            <h1 className="text-base text-[#fff]">BookMark {bookmarkID}</h1>
                          </div>
                        </div>
                      )
                    }
                  </Draggable>
                ))) : ("")
            }
            </div>
          )
        }
      </Droppable>
    )
}
