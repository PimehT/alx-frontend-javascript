import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [19, 20, 34];
  const create = rooms.map((x) => new ClassRoom(x));

  console.log(create);
}
