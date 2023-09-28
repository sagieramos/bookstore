import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Indicator = ({ isVisible }) => (
  <BallTriangle
    height={50}
    width={50}
    radius={4}
    color="red"
    ariaLabel="ball-triangle-loading"
    wrapperClass="indicator"
    wrapperStyle=""
    visible={isVisible}
  />
);

Indicator.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
export default Indicator;
