import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import history from '../../history'

import styles from './FullItem.scss'

class FullItem extends React.PureComponent {
  render() {
    const {
      item,
      isEditing,
      currentEditField,
      actions,
    } = this.props;
    return (
      <Router history={history}>
        <Route path={`/items/${item.id}`} render={() => <div className={styles.root}>
          <p><Link to="/">Закрыть</Link></p>
          {isEditing && currentEditField === 'name' ? <input
            value={item.name}
            onChange={event => actions.renameItem(item.id, event.target.value)}
            onBlur={() => {
              if (event.target.value.trim() == "") {
                actions.removeItem(item.id);
              }
              actions.changeEditField(-1, '')
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                if (event.target.value.trim() == "") {
                  actions.removeItem(item.id);
                }
                actions.changeEditField(-1, '')
              }
            }}
          /> : <h1 onDoubleClick={() => actions.changeEditField(item.id, 'name')}>{item.name}</h1>}

          {isEditing && currentEditField === 'author' ? <input
            value={item.author}
            onChange={event => actions.changeItemAuthor(item.id, event.target.value)}
            onBlur={() => {
              if (event.target.value.trim() == "") {
                actions.changeItemAuthor(item.id, "Неизвестно")
              }
              actions.changeEditField(-1, '')
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                if (event.target.value.trim() == "") {
                  actions.changeItemAuthor(item.id, "Неизвестно")
                }
                actions.changeEditField(-1, '')
              }
            }}
          /> : <h2 onDoubleClick={() => actions.changeEditField(item.id, 'author')}>{item.author}</h2>}

          <img src={item.photo}></img>
          {isEditing && currentEditField === 'description' ? <textarea
            value={item.description}
            onChange={event => actions.changeItemDescription(item.id, event.target.value)}
            onBlur={() => {
              if (event.target.value.trim() == "") {
                actions.changeItemDescription(item.id, "Описание отсутствует")
              }
              actions.changeEditField(-1, '')
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                if (event.target.value.trim() == "") {
                  actions.changeItemDescription(item.id, "Описание отсутствует")
                }
                actions.changeEditField(-1, '')
              }
            }}
          /> : <p onDoubleClick={() => actions.changeEditField(item.id, 'description')}>{item.description}</p>}
        </div>} />
      </Router>
    );
  }
}

FullItem.propTypes = {
  item: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  currentEditField: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default FullItem;