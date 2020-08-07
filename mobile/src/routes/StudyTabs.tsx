import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TeacherList from "../pages/TeacherList";
import Favorits from "../pages/Favorits";

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              size={size}
              color={focused ? "#8257e5" : color}
              name="ios-easel"
            />
          ),
        }}
        name="TeacherList"
        component={TeacherList}
      />
      <Screen
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              size={size}
              color={focused ? "#8257e5" : color}
              name="ios-heart"
            />
          ),
        }}
        name="Favorits"
        component={Favorits}
      />
    </Navigator>
  );
};

export default StudyTabs;
