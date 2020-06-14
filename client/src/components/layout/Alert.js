import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  // mapStateToProps가 state.alert를 Alert에 Prop에 넣었다면, 아래 <div>가 생성된다.
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    // alert의 id를 key로 하고, alert alert-alertType을 className으로 넣은 뒤 내용은 alert.msg를 표시한다.
    // className에 alertType을 넣어, css로 alert의 type 별 색상을 별도 지정할 수 있게 된다.
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// store의 state를 가져와서 state.alert를 Alert의 Props에 넣는다.
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

// connect를 통해 store.js와 Alert를 연결한다.
export default connect(mapStateToProps)(Alert);
