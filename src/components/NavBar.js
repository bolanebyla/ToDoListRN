import React from "react";
import {View, Text, StyleSheet} from "react-native";


export const NavBar = ({title}) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        alignItems: "center",
        backgroundColor: "#7660fa",
        paddingTop: 40,
        paddingBottom: 20,

    },
    title: {
        fontSize: 25
    }
})