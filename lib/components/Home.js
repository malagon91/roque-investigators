import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loadInvestigators} from 'actions/investigatorActions';

class Home extends Component{

  componentDidMount() {
    this.props.loadInvestigators();
  }

render(){
  return(
    <div className="container" id="center-content">
      <p className="title">Investigadores</p>
      <div className="invest-wrapper">
        <a>Miguel Angel Malagon Meza</a>
        <p>Doctor en Ciencias, Universidad Politécnica de Cataluña, España 1998.</p>
        <p>Investigador CINVESTAV 3-C </p>
      </div>
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
