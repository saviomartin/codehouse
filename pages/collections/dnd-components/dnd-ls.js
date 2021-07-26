import {resetServerContext} from 'react-beautiful-dnd';

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
    if(JSON.parse(window.localStorage.getItem("codehouse-collections")))
      data = JSON.parse(window.localStorage.getItem("codehouse-collections"));
    else {
      data = {
        bookmarks: [
          { id: "bookmark-0", title: "Task 0" },
          { id: "bookmark-1", title: "Task 1" },
          { id: "bookmark-2", title: "Task 2" },
          { id: "bookmark-3", title: "Task 3" },
          { id: "bookmark-4", title: "Task 4" },
        ],
        collectionOrder: ["collection-0", "collection-1", "collection-2"],
        collections: {
          "collection-0": {
            id: "collection-0",
            title: "Recently Bookmarked",
            bookmarkIDs: ["bookmark-0", "bookmark-1", "bookmark-2",]
          },
          "collection-1": {
            id: "collection-1",
            title: "Next and React",
            bookmarkIDs: ["bookmark-4"]
          },
          "collection-2": {
            id: "collection-2",
            title: "Done",
            bookmarkIDs: ["bookmark-3"]
          },
        },
      };
      updateLocalStorage(data);
    }
  }
  return data;
}

export {updateLocalStorage, getLocalStorage}
