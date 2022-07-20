import React from "react";
import { ScrollView, View } from "react-native";

import { useIcons } from "./IconProvider";
import { Picture } from "./Picture";

export const Icons = () => {
  const icons = useIcons();
  return (
    <ScrollView>
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        {Object.values(icons).map((icon, key) => (
          <Picture picture={icon} key={key} />
        ))}
      </View>
    </ScrollView>
  );
};
