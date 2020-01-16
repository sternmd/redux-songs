import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>songlist</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    prop: state.prop
  };
};

export default connect(mapStateToProps)(SongList);
