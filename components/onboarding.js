import React, { useState, useRef } from "react";
import { Text, FlatList, View, Animated } from "react-native";
import slides from "../slides";
import OnboardingItem from "./onBoardingItem";
import Paginator from "./Paginator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
     try {
        await AsyncStorage.getItem('@viewOnboarding', 'true')
     } catch (error) {
         console.log('Error @setItem: ', error);
     }
    }
  };
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
    </View>
  );
};

export default Onboarding;
