import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from 'prop-types';
import history from '../../history'

import style from './Search.scss'

class Search extends React.PureComponent {
  render() {
    const {
      actions
    } = this.props;

    return (
      <Router>
        <div className={style.root}>
          <input className={style.search} type="text" placeholder="Поиск" onChange={event => {
            actions.changeSearch(event.target.value);
            history.push({
              pathname: '/items',
              search: `?search=${event.target.value}`
            });
          }}
            onKeyDown={(event) => {
              if (event.keyCode == 13) {
                event.target.blur();
              }
            }} />
        </div>
      </Router>
    )
  }
}

Search.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Search;