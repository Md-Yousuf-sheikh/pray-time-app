import React from "react";
import { SafeAreaView, View } from "react-native";
import PrayerTimesComponent from "./PrayerTimesComponent";
import GetParyTime from "./GetParyTime";

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 50,
        }}
      >
        <GetParyTime />
      </View>
    </SafeAreaView>
  );
};

export default App;
