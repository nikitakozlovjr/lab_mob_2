import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LanguageCard = ({title, text, logo}) => {
    return (
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <Image style={styles.logo} source={logo} />
        </View>
      );
}

const styles = StyleSheet.create({
    card: {
      padding: 20,
      margin: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: '10',
      alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
      marginVertical: 10,
      fontSize: 16
    },
    logo: {
        width: 50,
        height: 50
    }
});

export default LanguageCard;