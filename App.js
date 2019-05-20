import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FetchLocation from './src/components/FetchLocation';
import UsersMap from './src/components/UsersMap';

export default class App extends React.Component {
    state = {
        userLocation: null
    }

    getUserLocationHandlder = () => {
        console.log('****Pressed the button!****')
        navigator.geolocation.getCurrentPosition(position =>  {
            console.log(position)
            this.setState({
                userLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421
                }
            });

        }, err => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <FetchLocation onGetLocation={this.getUserLocationHandlder}/>
                <UsersMap userLocation={this.state.userLocation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
