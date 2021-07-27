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

export {updateLocalStorage, getLocalStorage}
