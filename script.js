import Backpack from './Backpack.js';

const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false,
  'December 5, 2018 15:00:00 PST'
);

console.log('The everydayPack object:', everydayPack);
console.log('Date acquired:', everydayPack.dateAcquired);
console.log('Days since acquired: ', everydayPack.backpackAge());
