import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Text style={styles.headerText}>Home</Text>
            ),
            headerTitle: "RODAGOLS",
            headerTitleAlign: 'center',
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        // Função opcional para lidar com o pressionamento do ícone de perfil
                    }}
                    style={styles.headerIconContainer}
                >
                    <FontAwesome name="user" size={24} color={colors.black} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
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
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "#fff",
    },
    chatButton: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
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
        color: '#000', // Preto
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
