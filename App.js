import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

import { useState } from "react";

import { planetas } from "./planetas";

import { Planet } from "./Planet";

export default function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  const next = () => {
    if (currentPlanetIndex < planetas.length - 1) {
      setCurrentPlanetIndex(currentPlanetIndex + 1);
    }
  };

  const previous = () => {
    if (currentPlanetIndex > 0) {
      setCurrentPlanetIndex(currentPlanetIndex - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContentRow}>
          <Text style={styles.headerText}>Vamos explorar</Text>

          <Image
            style={styles.logoBuzz}
            source={require("./assets/buzz.png")}
          ></Image>
        </View>

        {/* <ScrollView> */}
        <Planet planeta={planetas[currentPlanetIndex]}></Planet>
        {/* {planetas.map((planeta) => (
            <Planet planeta={planeta}></Planet>
          ))} */}
        {/* </ScrollView> */}

        <View style={styles.navButtons}>
          <Button
            title="Anterior"
            onPress={previous}
            disabled={currentPlanetIndex === 0}
          ></Button>

          <Button
            title="Próximo"
            onPress={next}
            disabled={currentPlanetIndex === planetas.length - 1}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#1F2B45",
    padding: 20,
    alignItems: "center",
  },
  headerAlign: {
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    color: "#FFFEFD",
    fontSize: 30,
  },
  logoBuzz: {
    width: 140,
    height: 80,
  },
  headerContentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 15,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
});
