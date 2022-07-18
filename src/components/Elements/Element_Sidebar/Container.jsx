import Sidebar from './Sidebar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    authors: state.authors,
    tags:    state.tags,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
