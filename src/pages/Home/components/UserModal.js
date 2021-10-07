import PropTypes from 'prop-types';
import UserCard from '@/components/UserCard';

function UserModal(props) {
  const { winner, onClose } = props;
  return (
    <div
      class={
        winner
          ? 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
          : 'fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
      }
      id="my-modal"
    >
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center p-10 rounded-full bg-green-100">
            <UserCard data={winner} />
          </div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">恭喜您得獎!</h3>
          <div class="mt-2 px-7 py-3">
            <p class="text-sm text-gray-500">請聯繫浪Live官方粉絲團</p>
          </div>
          <div class="items-center px-4 py-3">
            <button
              onClick={() => onClose()}
              id="ok-btn"
              class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

UserModal.propTypes = {
  winner: PropTypes.object,
  onClose: PropTypes.func,
};

UserModal.defaultProps = {
  winner: undefined,
  onClose: () => {},
};

export default UserModal;
