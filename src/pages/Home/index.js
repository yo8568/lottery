import { useEffect, useRef, useState } from 'react';
import ParticipantList from './components/ParticipantList';
import UserModal from './components/UserModal';

import { useSelector, useDispatch } from 'react-redux';
import { selectParticipants, selectMs, setMs, decreaseMs } from '@/store/slice/lottory';

import './index.css';

function App() {
  const participants = useSelector(selectParticipants);
  const ms = useSelector(selectMs);
  const [inputValue, setInputValue] = useState(undefined);
  const [winner, setWinner] = useState(undefined);
  const dispatch = useDispatch();
  const intervalRef = useRef();

  const activateCountdown = () => {
    const interval = setInterval(() => {
      dispatch(decreaseMs());
    }, 1000);
    intervalRef.current = interval;
  };

  const removeCountDown = () => {
    if (intervalRef?.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const handleSetMs = (v) => {
    dispatch(setMs(v));
    removeCountDown(); 
    if (v === 0) {
      const winnerIdx = getWinnerIdx();
      const winner = participants[winnerIdx];
      setWinner(winner);
    }
    if (v > 0) activateCountdown();
  };

  const getWinnerIdx = () => {
    return parseInt(Math.random() * (participants.length + 1));
  };

  useEffect(() => {
    if (ms <= 0) removeCountDown();
    if (ms === 0) {
      const winnerIdx = getWinnerIdx();
      const winner = participants[winnerIdx];
      setWinner(winner);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms]);

  const min = (() => {
    return Math.floor(ms / 1000 / 60);
  })();

  const second = (() => {
    return (ms / 1000) % 60;
  })();

  return (
    <div class="flex h-screen md:flex-row flex-col">
      <div class="flex-grow md:w-3/5 w-full">
        <div class="flex">
          <div class="flex-auto ">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mins">
              抽獎時間
            </label>
            <div class="flex">
              <input
                class="flex-1 w-1/3 input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mins"
                type="number"
                placeholder="請輸入"
                value={inputValue / 1000}
                min={0}
                onChange={(e) => {
                  setInputValue(e.target.value * 1000);
                }}
              />
              <span class="w-20 ml-5px text-gray-700 text-sm font-bold text-center min-word">
                分鐘
              </span>
              <button
                onClick={() => handleSetMs(inputValue * 60)}
                type="button"
                class="bg-blue-800 inline-flex w-20 items-center justify-center text-sm font-bold p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
              >
                設定
              </button>
            </div>
            <div class="flex-auto time">
              <span>{min < 10 ? `0${min}` || '00' : min || '00'}</span>{' '}
              <span style={{ margin: '0 5px' }}>:</span>
              <span>{second < 10 ? `0${second}` || '00' : second || '00'}</span>
            </div>
          </div>
        </div>
      </div>
      <ParticipantList participants={participants} />
      <UserModal winner={winner} onClose={() => setWinner(undefined)} />
    </div>
  );
}

export default App;
