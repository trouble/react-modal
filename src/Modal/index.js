import PropTypes from 'prop-types';
import asModal from '../asModal';

const Modal = (props) => {
  const { children } = props;
  if (children && typeof children === 'function') return children({ ...props });
  return null;
};

Modal.defaultProps = {
  children: undefined,
};

Modal.propTypes = {
  children: PropTypes.func,
};

export default asModal(Modal);
