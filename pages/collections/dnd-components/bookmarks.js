import React, { useEffect, useState } from "react";

import {Droppable, Draggable} from "react-beautiful-dnd";

import {BookMarkItem} from "../../../components";

export default function BookmarksItem({collectionId, bookmarkData, bookmarkIDs, entities, setEntities, bookmarks, fetchBookmarks}) {
  console.log(bookmarkData, bookmarkIDs)
    return (
      <Droppable droppableId={collectionId} type="bookmark" direction="horizontal">
        {
          provided => (
            <div
              className="overflow-x-auto overflow-y-hidden whitespace-nowrap w-full h-full"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
            {
              bookmarkIDs ? (
                bookmarkIDs.map((bookmarkID, index) => {
                  const contentIndex = parseInt(bookmarkID.replace("bookmark-", "")) - 1,
                    content = bookmarkData[contentIndex].content;
                  return <Draggable draggableId={bookmarkID} index={index} key={bookmarkID}>
                    {
                      provided => (
                        <div className="inline-block mt-4 mr-4" {...provided.draggableProps} style={provided.draggableProps.style} ref={provided.innerRef}>
                          <div className="dark:bg-[#ffffff20] border-b-[1px] border-[#eeeeee30] pl-[30px] rounded-xl w-[370px] h-[325px]" {...provided.dragHandleProps}>
                            <BookMarkItem
                              data={content}
                              bookmarks={bookmarks}
                              fetchBookmarks={fetchBookmarks}
                              animated={false}
                            />
                          </div>
                        </div>
                      )
                    }
                  </Draggable>
                })) : ("")
            }
            </div>
          )
        }
      </Droppable>
    )
}
