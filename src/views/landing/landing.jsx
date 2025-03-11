import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

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
