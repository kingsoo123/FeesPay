import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MenuDrawer from "react-native-side-drawer";
import { connect } from "react-redux";
import { fetchPost } from "../actions/postActions";

const Wallet = ({ fetchPost, items }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const postItems = items.map((post) => {
    return (
      <View key={post.id}>
        <Text>{post.title}</Text>
      </View>
    );
  });

  const drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
         <TouchableOpacity onPress={toggleOpen}>
        <Text>Close</Text>
        </TouchableOpacity>
        <Text>Menu one</Text>
        <Text>Menu two</Text>
        <Text>Menu three</Text>
        <Text>Menu four</Text>
        </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <MenuDrawer
        open={open}
        drawerContent={drawerContent()}
        drawerPercentage={100}
        animationTime={250}
        overlay={true}
        opacity={1}
      ></MenuDrawer>
      <TouchableOpacity onPress={toggleOpen} style={styles.body}>
        <Text>SideMenu</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 25 }}> Data Fectched from Redux</Text>
      {postItems}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { fetchPost })(Wallet);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F04812",
  },

});
