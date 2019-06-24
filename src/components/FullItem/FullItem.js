import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from 'prop-types';

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
      <Router>
        <div className={styles.root}>
          <p><Link to={`/`}>Назад</Link></p>

          {isEditing && currentEditField === 'name' ? <input
            value={item.name}
            onChange={event => actions.renameItem(item.id, event.target.value)}
            onBlur={() => {
              actions.changeEditField(item.id, '')
            }}
            onKeyPress={(event) => {
              if (event.keyCode === 13) {
                actions.changeEditField(item.id, '')
              }
            }}
          /> : <h1 onDoubleClick={() => actions.changeEditField(item.id, 'name')}>{item.name}</h1>}

          {isEditing && currentEditField === 'author' ? <input
            value={item.author}
            onChange={event => actions.changeItemAuthor(item.id, event.target.value)}
            onBlur={() => {
              actions.changeEditField(item.id, '')
            }}
            onKeyPress={(event) => {
              if (event.keyCode === 13) {
                actions.changeEditField(item.id, '')
              }
            }}
          /> : <h2 onDoubleClick={() => actions.changeEditField(item.id, 'author')}>{item.author}</h2>}

          <img src={item.photo}></img>

          {isEditing && currentEditField === 'description' ? <input
            value={item.description}
            onChange={event => actions.changeItemDescription(item.id, event.target.value)}
            onBlur={() => {
              actions.changeEditField(item.id, '')
            }}
            onKeyPress={(event) => {
              if (event.keyCode === 13) {
                actions.changeEditField(item.id, '')
              }
            }}
          /> : <p onDoubleClick={() => actions.changeEditField(item.id, 'description')}>{item.description}</p>}
        </div>
      </Router>
    );
  }
}

FullItem.propTypes = {
  item: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  currentEditField: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default FullItem;