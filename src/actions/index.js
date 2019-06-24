import types from './actionTypes';

export const addItem = (name, author, description, photo) => ({
  type: types.ADD_ITEM,
  name,
  author,
  description,
  photo,
});

export const removeItem = id => ({
  type: types.REMOVE_ITEM,
  id,
});

export const changeEditField = (id, field) => ({
  type: types.CHANGE_EDIT_FIELD,
  id,
  field,
});

export const renameItem = (id, name) => ({
  type: types.RENAME_ITEM,
  id,
  name
});

export const changeItemDescription = (id, description) => ({
  type: types.CHANGE_ITEM_DESCRIPTION,
  id,
  description
});

export const changeItemAuthor = (id, author) => ({
  type: types.CHANGE_ITEM_AUTHOR,
  id,
  author
});

export const changeUrl = (url) => ({
  type: types.CHANGE_URL,
  url
});
