import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loadInvestigators} from 'actions/investigatorActions';

class Home extends Component{

  componentDidMount() {
    this.props.loadInvestigators();
  }

render(){
  return(
    <div className="container" id="body-content">
      <h1>My First Bootstrap Page</h1>
      <p>This is some text.</p>
    </div>
  );
}
}

const mapStateToProps = (state) =>({
...state.investigators,
});

const mapDispatchToProps = {
  loadInvestigators
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// const mapStateToProps = (state) => ({
//   ...state.MyDates,
//   searchTerm: state.home.searchTerm,
//   userInf: state.auth.user,
// });

// const mapDispatchToProps = {
//   openFeedback,
//   onSetTab,
//   getDates,
//   cancelDate,
//   cleanObject,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MyDates);
