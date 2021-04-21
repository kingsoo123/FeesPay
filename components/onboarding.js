import React, { useRef } from "react";
import { Text, FlatList, View, Animated, TouchableOpacity } from "react-native";
import slides from "../slides";
import OnboardingItem from "./onBoardingItem";
import Paginator from "./Paginator";

const Onboarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View>
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          viewableItemsChanged={viewableItemsChanged}
          viewConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
