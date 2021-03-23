import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import Svg, { G, Circle } from "react-native-svg";

export default function NextButton() {
//   const size = 128;
//   const strokeWidth = 2;
//   const center = size / 2;
//   const radius = size / 2 - strokeWidth / 2;
//   const circumference = 2 * Math.PI * radius;
  return (
    <View style={styles.container}>
      {/* <Svg width={size} height={size}>
        <G rotation="-96" origin={center}>
          <Circle
            stroke="#e6e7e8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            strokeWidth="#f4338f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg> */}

      <Text>next btton</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
