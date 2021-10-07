import UserCard from '@/components/UserCard';

import { useSelector } from 'react-redux';
import { selectParticipants } from '@/store/slice/lottory';

function Participants() {
  const participants = useSelector(selectParticipants);

  return (
    <div class="grid grid-cols-4 gap-4">
      {participants.map((participant, idx) => (
        <UserCard key={`participant_${idx}`} data={participant} />
      ))}
    </div>
  );
}

export default Participants;
