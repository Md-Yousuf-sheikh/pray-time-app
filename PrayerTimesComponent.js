import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import PrayerTimes from "prayer-times";
import * as Location from "expo-location";
const PrayerTimesComponent = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  //

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset();

  console.log("timezoneOffsets", timezoneOffset);

  useEffect(() => {
    const method = "Jafari"; // You can choose a calculation method
    const times = new PrayerTimes({
      method: method,
    });
    const timezoneOffset = -180;
    const date = new Date(); // Use the current date
    const timesForToday = times.getTimes(
      date,
      [location?.coords?.latitude, location?.coords?.longitude],
      timezoneOffset
    );

    setPrayerTimes(timesForToday);
  }, []);
  //
  console.log("prayerTimes", prayerTimes);
  return (
    <View>
      <Text>Fajr: {prayerTimes.fajr}</Text>
      <Text>Dhuhr: {prayerTimes.dhuhr}</Text>
      <Text>Asr: {prayerTimes.asr}</Text>
      <Text>Maghrib: {prayerTimes.maghrib}</Text>
      <Text>Isha: {prayerTimes.isha}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default PrayerTimesComponent;
