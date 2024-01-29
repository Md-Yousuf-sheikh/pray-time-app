// import React, { useState, useEffect } from "react";
// import { Text, View } from "react-native";
// import prayertimes from "prayertimes";

// export default function PrayerTiming() {
//   const [prayerTimesByDay, setPrayerTimesByDay] = useState({});
//   const [prayerTimesByMonth, setPrayerTimesByMonth] = useState({});

//   useEffect(() => {
//     const date = new Date("2021-04-24T05:16:54.442Z");

//     // Getting prayer times for a specific day
//     const prayerTimesDay = prayertimes.getByDay({
//       date,
//       long: 90.38,
//       lat: 23.75,
//       method: "Karachi",
//       timeFormat: "12h",
//     });
//     setPrayerTimesByDay(prayerTimesDay);

//     // Getting prayer times for a specific month
//     const prayerTimesMonth = prayertimes.getByMonth({
//       month: 3,
//       year: 2021,
//       long: 90.38,
//       lat: 23.75,
//       method: "Karachi",
//       timeFormat: "12h",
//     });
//     setPrayerTimesByMonth(prayerTimesMonth);
//   }, []);

//   return (
//     <View>
//       <Text>Prayer Times for a Specific Day:</Text>
//       <Text>Fajr: {prayerTimesByDay.fajr}</Text>
//       <Text>Dhuhr: {prayerTimesByDay.dhuhr}</Text>
//       {/* Include other prayer times for the day */}

//       <Text>Prayer Times for a Specific Month:</Text>
//       <Text>Fajr: {prayerTimesByMonth.fajr}</Text>
//       <Text>Dhuhr: {prayerTimesByMonth.dhuhr}</Text>
//       {/* Include other prayer times for the month */}
//     </View>
//   );
// }
