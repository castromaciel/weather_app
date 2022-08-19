const geolocationAPI = navigator.geolocation;

export const getUserCoordinates = () => {
  if (!geolocationAPI) {
    console.error('Geolocation API is not available in your browser!');
  } else {
    geolocationAPI.getCurrentPosition((position) => {
      const { coords } = position;
      console.log(coords.latitude);
      console.log(coords.longitude);
    }, (error) => {
      console.error('Something went wrong getting your position!', error);
    });
  }
};
