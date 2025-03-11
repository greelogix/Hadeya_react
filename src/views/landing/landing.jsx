import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import 'src/assets/css/views/landing/landing.scss'

const Landing = (props) => {
  return <div className="">Landing Page</div>;
};
const mapStateToProps = (state) => ({
  // brandsState: state.brandsReducer,
});
const mapDispatchToProps = (dispatch) => ({
  // getBrands: () => dispatch(brandsActions.getBrands()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
