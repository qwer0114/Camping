import { useEffect, useState } from "react";

export function useGeolocation() {
  const [location, setLocation] = useState({
    location: { lat: 0, lng: 0 },
  });

  const onSuccess = (position) => {
    setLocation({
      location: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (err) => {
    setLocation({
      code: err.code,
      message: err.message,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
