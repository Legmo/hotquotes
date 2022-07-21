import Sidebar from './Sidebar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    authors: state.authors,
    tags:    state.tags,
  };
};

const SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export default SidebarContainer;
