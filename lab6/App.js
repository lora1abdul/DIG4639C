import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  title: {
    backgroundColor: "black",
     alignItems: "center",
     flexDirection: "row",
      justifyContent: "space-between",
    color: "pink",
    textAlign: "center",

  },
  headline: {
  backgroundColor: "yellow",
  flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
  color: "black",
  textAlign: "center",
},

 content: {
   backgroundColor: "pink",
   flexDirection: "row",
    justifyContent: "space-between",
   alignItems: "center",
   color: "red",
   textAlign: "center",
 },

})

 class App extends React.Component {
  render() {
    return (
      <View>
      <Text>   This assignment is to talk about our favorite TV show!!       </Text>
      <Text>   DIG4639C      </Text>
      <Text>   Lab6      </Text>
        <Text style={styles.title}>
        My favorite TV show! </Text>
        <Text style={styles.headline}>
      Friends! </Text>
      <Text style={styles.content}>
    Friends is my favorite TV show! I know this show by heart, and I literally find myself
    constantly mouthing the words as they say it! </Text>
        </View>
    
    );
  }
}

export default App;
