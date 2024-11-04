import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TwitterAuthProvider } from "firebase/auth";

const Home = () => {
    const navigation = useNavigation();

    const logoBeira = require('../assets/beira.webp')
    const logoArena = require('../assets/arena.jpg')

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Text style={styles.headerText}>Home</Text>
            ),
            headerTitle: "RODAGOLS",
            headerTitleAlign: 'center',
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {navigation.navigate('UserSettings')}}
                    style={styles.headerIconContainer}
                >
                    <FontAwesome name="user" size={24} color={colors.black} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* <View style={styles.infoContainer}>
                <Text style={styles.welcomeText}>Bem-vindo ao Rodagols!</Text>
                <Text style={styles.infoText}>Aproveite o chat e interaja com respeito.</Text>
                <Text style={styles.infoText}>Seja gentil e divirta-se!</Text>

                <View style={styles.additionalInfo}>
                    <Text style={styles.infoBlockHeader}>Dicas para uma Boa Convivência:</Text>
                    <Text style={styles.infoBlockText}>🔴 Mantenha sempre um tom amigável.</Text>
                    <Text style={styles.infoBlockText}>🔴 Evite discussões desnecessárias.</Text>
                    <Text style={styles.infoBlockText}>🔴 Respeite a opinião dos outros.</Text>
                </View>

                <View style={styles.additionalInfo}>
                    <Text style={styles.infoBlockHeader}>Recursos Disponíveis:</Text>
                    <Text style={styles.infoBlockText}>✅ Chat em tempo real com outros torcedores.</Text>
                </View>
            </View> */}

            <TouchableOpacity
                onPress={() => navigation.navigate("BeiraRio")}
                style={styles.chatButton}
            >
                <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoBeira}>

                </Image>
                <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                    <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                    <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Beira-Rio</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Arena")}
                style={styles.chatButton2}
            >
                <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoArena}></Image>
                <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                    <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                    <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Arena</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        flexDirection: 'row'
    },
    chatButton: {
        backgroundColor: 'red',
        height: '80%',
        width: '45%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginBottom: 50,
        flexDirection:'row'
    },
    chatButton2: {
        backgroundColor: 'blue',
        height: '80%',
        width: '45%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginBottom: 50,
        flexDirection:'row'
    },
    headerText: {
        marginLeft: 15,
        fontSize: 18,
        color: colors.black,
    },
    headerIconContainer: {
        marginRight: 15,
    },
    infoContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 20,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    additionalInfo: {
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    infoBlockHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10,
    },
    infoBlockText: {
        fontSize: 16,
        color: colors.black,
        marginBottom: 5,
    },
});