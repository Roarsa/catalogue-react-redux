import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import history from '../../history'

import style from './Search.scss'

class Search extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={style.root}>
          <input type="text" placeholder="Поиск" onChange={event => {
            history.push({
              pathname: '/items',
              search: `?search=${event.target.value}`
            });
          }} />
        </div>
      </Router>
    )
  }
}

export default Search;