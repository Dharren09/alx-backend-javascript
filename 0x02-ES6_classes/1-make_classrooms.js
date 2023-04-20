import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const result = [];
  const sizes = [19, 20, 34];

  for (const size of sizes) {
    const obj = new ClassRoom(size);
    result.push(obj);
  }
  return result;
}
