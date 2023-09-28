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

Indicator.defaultProps = {
  isVisible: true,
};

Indicator.propTypes = {
  isVisible: PropTypes.bool,
};

export default Indicator;
