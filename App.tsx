import * as eva from "@eva-design/eva";
import { ApplicationProvider, Button, Text } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function App() {
  const [appLoading, setAppLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 200);
  }, []);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ScrollView>
        {!appLoading && (
          <View style={styles.container}>
            <Text>Test</Text>
            <Button>Button</Button>
            <StatusBar style="auto" />
          </View>
        )}
      </ScrollView>
    </ApplicationProvider>
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
