import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetParyTime() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "http://api.aladhan.com/v1/calendar/2023?latitude=51.508515&longitude=-0.1254872&method=2"
      )
      .then(function (response) {
        // handle success
        setData(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  //

  console.log("data", data?.data?.data[8]?.[5]?.timings);
  return (
    <View>
      <Text>GetParyTime</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
