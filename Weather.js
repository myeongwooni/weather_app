import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Proptypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house."
    },
    Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Maybe you need an umbrella."
    },
    Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "Definitely you need an umbrella."
    },
    Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snowing",
    subtitle: "Do you want to build a snowman?"
    },
    Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Hail",
    subtitle: "Home is safe for you."
    },
    Clear: {
    iconName: "weather-sunny",
    gradient: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Perfect day to go out!"
    },
    Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Try to be a rainbow in someone's cloud."
    },
    Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "It's like you have no glasses on."
    },
    Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Keep your windows closed."
    },
    Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons 
                    size={100} 
                    name={weatherOptions[condition].iconName} 
                    color="white" />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes={
    temp: Proptypes.number.isRequired,
    condition: Proptypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp:{
        fontSize: 45,
        color: "white",
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: "white",
        fontSize: 45,
        fontWeight: "600",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "300",
        color: "white",
        fontSize: 28,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
})

