import PropTypes from 'prop-types';
import UserCard from '@/components/UserCard';
import './index.css';

function ParticipantList(props) {
  const { participants } = props;
  return (
    <div class="flex-grow flex flex-col px-10 justify-center w-full md:w-2/5 h-screen ">
      <div class="flex-1 flex-initial text-gray-700 text-sm font-bold mb-2">參與名單</div>
      <div class="flex-auto grid grid-cols-1 gap-4 w-4/5 right-participants">
        {participants.map((participant, idx) => (
          <UserCard key={`participant_${idx}`} data={participant} />
        ))}
      </div>
    </div>
  );
}

ParticipantList.propTypes = {
  participants: PropTypes.array,
};

ParticipantList.defaultProps = {
  participants: [],
};

export default ParticipantList;
