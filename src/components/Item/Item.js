import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Item extends React.PureComponent {
  render() {
    const {
      item,
      actions
    } = this.props;
    return (
      <div key={item.id} className={styles.item}>
        <img src={item.photo}></img>
        <h1>{item.name}</h1>
        <h2>{item.author}</h2>
        <p><Link to={`/items/${item.id}`}>Читать подробнее..</Link></p>
        <button onClick={() => { actions.removeItem(item.id) }}>Удалить</button>
      </div>
    );
  }
}

Item.PropTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Item;
