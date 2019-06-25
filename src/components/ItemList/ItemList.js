import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import FullItem from '../FullItem/FullItem.js'
import Search from '../Search/Search'
import history from '../../history'


import style from './ItemList.scss'

/* import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory(); */

class ItemList extends React.PureComponent {
  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        this.props.actions.changeEditField(-1, "");
      }
    });
  }

  render() {
    const {
      items,
      currentEditField,
      currentEditId,
      actions
    } = this.props;
    const itemList = items.reverse();
    return (
      <Router history={history}>
        <Search actions={actions}/>
        <div className={style.container}>
          <Route path={["/", "/items"]} render={() =>
          <div className={style.root}>
            <div className={style.itemList}>
              {itemList.map((item) => {
                if (history.location.search == "?search=" ||
                  history.location.search == "" ||
                  item.name.toLowerCase().indexOf(history.location.search.substring(8).toLowerCase()) !== -1) {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      actions={actions}
                    />
                  );
                }
              })}
            </div></div>} />
          <Route exact path={`/items/:id`} render={({ match, location }) =>
            <div className={style.root}>
              {
                itemList.map((item) => {
                  if (+match.params.id == item.id) {
                    return (<FullItem
                      item={item}
                      isEditing={currentEditId === item.id}
                      currentEditField={currentEditField}
                      actions={actions}
                      location={location} />)
                  }
                }
                )
              }</div>} /></div>
      </Router >
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  currentEditField: PropTypes.string.isRequired,
  currentEditId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ItemList;
