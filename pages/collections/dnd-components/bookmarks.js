import React, { useEffect, useState } from "react";

import {Droppable, Draggable} from "react-beautiful-dnd";

import {BookMarkItem} from "../../../components";

import {FiPlus, FiTrash2} from "react-icons/fi";
import {MdApps} from "react-icons/md";

export default function BookmarksItem({collectionId, bookmarkData, bookmarkIDs, entities, setEntities, bookmarks, fetchBookmarks}) {
    const deleteBookmark = (index, collectionIndex) => {
      let collections = entities.collections;
      let bookmarks = entities.bookmarks;
      bookmarks.splice(index, 1);
      collections[collectionId].bookmarkIDs.splice(collectionIndex, 1);
      setEntities({ ...entities, collections, bookmarks });
    }

    return (
      <Droppable droppableId={collectionId} type="bookmark" direction="horizontal">
        {
          provided => (
            <div
              className="overflow-x-auto overflow-y-hidden w-full min-h-[355px] whitespace-nowrap flex"
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
                          <div className="w-[340px] min-h-[355px]">
                            <div className="rounded-t-lg dark:bg-[#ffffff20] w-min p-2 flex justify-start items-center mb-[-4px]">
                              <div {...provided.dragHandleProps}>
                                <MdApps className="mx-2 text-white text-xl" />
                              </div>
                              <FiTrash2 className="mx-2 text-white text-lg cursor-pointer" onClick={() => deleteBookmark(contentIndex, index)} />
                            </div>
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
