import React from'react';
import './main.css';
import Search from './searchbar/search';
import MapView from './mapview/map_view';
import ListView from './listview/list_view';


export default function Main() {
  return(
    <React.Fragment>
      <Search />
      <ListView />
      <MapView />
    </React.Fragment>
  );
}

