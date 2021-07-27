import React, {useEffect, useState, useRef} from "react";

import {Draggable} from "react-beautiful-dnd";

import BookMarksItem from "./bookmarks.js";

import {FiPlus, FiTrash2} from "react-icons/fi";
import {MdApps} from "react-icons/md";

export default function Collection({entities, setEntities, collectionId, index, showBookmarks, setShowBookmarks}) {
  const [collectionTitle, setCollectionTitle] = useState(entities.collections[collectionId].title),
    collectionTitleRef = useRef();

  const deleteCollection = () => {
    let collections = entities.collections;
    delete collections[collectionId];

    let collectionOrder = entities.collectionOrder;
    collectionOrder.splice(collectionOrder.indexOf(collectionId), 1);

    setEntities({ ...entities, collections, collectionOrder });
  }

  useEffect(() => {
    let collections = entities.collections;
    collections[collectionId].title = collectionTitle;

    setEntities({...entities, collections});
  }, [collectionTitle]);

  return (
    <>
      {
        entities?.collections[collectionId]?.id && <Draggable draggableId={entities.collections[collectionId].id} index={index} isDragDisabled={false}>
          {
            provided => (
              <div className="h-[305px] mb-8 rounded-lg bg-[#ffffff20] dark:bg-[#ffffff20] border-b-[1px] border-[#eeeeee30]" {...provided.draggableProps} ref={provided.innerRef} style={provided.draggableProps.style}>
                <div className="h-full w-full p-4">
                  <div className="flex items-center justify-between">
                    <div className="" {...provided.dragHandleProps}>
                      <MdApps className="mb-1 mr-2 text-white text-xl" style={{transform: 'rotate(90deg)'}} />
                    </div>
                    <input spellCheck={false} value={collectionTitle} onChange={(e) => setCollectionTitle(e.target.value)} className="text-2xl w-full font-bold text-[#fff] bg-transparent cursor-text" />
                    <div className="flex items-center justify-between">
                      <FiTrash2 className="text-white text-lg cursor-pointer ml-2" onClick={deleteCollection} />
                      <FiPlus className="text-white text-lg cursor-pointer ml-2" onClick={() => {setShowBookmarks(collectionId)}}/>
                    </div>
                  </div>
                  <div className="h-full w-full">
                    <BookMarksItem collectionId={collectionId} bookmarkData={entities.bookmarks} bookmarkIDs={entities.collections[collectionId].bookmarkIDs} entities={entities} setEntities={setEntities}/>
                  </div>
                </div>
              </div>
            )
          }
        </Draggable>
      }
    </>
  )
}
