import types from '../actions/actionTypes';

const initialState = {
  url: '/',
  currentId: 0,
  currentEditId: -1,
  currentEditField: 'none',
  items: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          id: state.currentId,
          name: action.name,
          author: action.author,
          description: action.description,
          photo: action.photo,
        }),
        currentId: state.currentId + 1,
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item =>
          item.id !== action.id
        )
      };
    case types.CHANGE_URL:
      return {
        ...state,
        url: action.url,
      }
    case types.CHANGE_EDIT_FIELD:
      return {
        ...state,
        currentEditId: state.currentEditId === action.id ? -1 : action.id,
        currentEditField: state.currentEditField === action.field ? 'none' : action.field,
      };
    case types.CHANGE_ITEM_DESCRIPTION:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ?
            {
              ...item,
              description: action.description,
            } :
            item
        )
      };
    case types.CHANGE_ITEM_AUTHOR:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ?
            {
              ...item,
              author: action.author,
            } :
            item
        )
      };
    case types.RENAME_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ?
            {
              ...item,
              name: action.name,
            } :
            item
        )
      };
    default:
      return state;
  }
}