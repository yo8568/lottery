import PropTypes from 'prop-types';
import './index.css';

function UserCard(props) {
  const { data } = props;

  return (
    <div class="rounded-lg opacity-95 hover:opacity-75 shadow wrapper">
      <span class="nic">{data.nic}</span>
      <img class="rounded-lg contentImg" src={data.img} alt={data.nic} />
    </div>
  );
}

UserCard.propTypes = {
  data: PropTypes.shape({
    nic: PropTypes.string,
    img: PropTypes.string,
  }),
};

UserCard.defaultProps = {
  data: {
    nic: '',
    img: '',
  },
};

export default UserCard;
