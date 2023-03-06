const customData = require('./customData.json');

const generateRandomEvent = (latitude, longitude, radius) => {
  const radiusInDegrees = radius / 111000000;

  const lat = latitude + Math.random() * radiusInDegrees * 2 - radiusInDegrees;
  const lng = longitude + Math.random() * radiusInDegrees * 2 - radiusInDegrees;

  const event = {
    name: events[Math.floor(Math.random() * events.length)],
    location: { latitude: lat, longitude: lng },
  };

  generateRandomEvent(40.712776, -74.005974, 1000);
  setInterval(() => {
    generateRandomEvent(40.712776, -74.005974, 1000);
  }, 600000); // 10 minutes
};
