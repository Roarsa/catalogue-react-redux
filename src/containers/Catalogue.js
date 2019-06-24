import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

import AddBlock from '../components/AddBLock/AddBlock';
import ItemList from '../components/ItemList/ItemList';

import styles from './Catalogue.scss';

const Catalogue = ({ items, currentEditId, currentEditField, actions }) => (
  <div className={styles.container}>
    <div className={styles.todoList}>
      <AddBlock add={actions.addItem} />
      <ItemList
        items={items}
        currentEditField={currentEditField}
        currentEditId={currentEditId}
        actions={actions}
      />
    </div>
  </div>
)

Catalogue.propTypes = {
  items: PropTypes.array.isRequired,
  currentEditId: PropTypes.number.isRequired,
  currentEditField: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: [...state.items],
  currentEditId: state.currentEditId,
  currentEditField: state.currentEditField,
  filterType: state.filterType,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue);