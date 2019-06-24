import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import FullItem from '../FullItem/FullItem.js'
import Search from '../Search/Search'


import style from './ItemList.scss'

import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

class ToDoItems extends React.PureComponent {
  render() {
    const {
      items,
      currentEditField,
      currentEditId,
      actions
    } = this.props;
    const itemList = items.reverse();
    return (
      <Router history={browserHistory}>
        <Route path={["/", "/items"]} render={() =>
          <div className={style.root}>
            <Search />
            <div className={style.itemList}>
              {itemList.map((item) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    actions={actions}
                  />
                );
              })}
            </div></div>} />
        <Route exact path={`/items/:id`} render={({ match, location }) =>
          <div className={style.root}>
            {
              itemList.map((item) => {
                if (+match.params.id == item.id) {
                  return (<FullItem
                    item={item}
                    key={item.id}
                    isEditing={currentEditId === item.id}
                    currentEditField={currentEditField}
                    actions={actions}
                    location={location} />)
                }
              }
              )
            }</div>} />
      </Router>
    );
  }
}

ToDoItems.propTypes = {
  items: PropTypes.array.isRequired,
  currentEditField: PropTypes.string.isRequired,
  currentEditId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ToDoItems;
