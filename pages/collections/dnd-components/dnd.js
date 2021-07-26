import React, {useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Collection from "./collection";

import {updateLocalStorage, getLocalStorage} from "./dnd-ls";

export default function Dnd() {
  const [entities, setEntities] = useState(getLocalStorage());

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
    updateLocalStorage(entities);
  },[entities]);

  return(
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
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </div>
  )
}
