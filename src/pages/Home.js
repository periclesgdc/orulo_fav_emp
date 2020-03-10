import React, { Component } from 'react';
import NavbarOrulo from '../components/Navbar';
import FilterOrulo from '../components/FilterOrulo';
import BuildingListOrulo from '../components/BuildingList'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12">
            <NavbarOrulo />
          </div>
        </div>
        <div className="row">
          <div className="col-3 ml-3">
            <FilterOrulo />
          </div>
          <div className="col-7">
            <BuildingListOrulo />
          </div>
        </div>
      </div>
    );
  }
}