import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Home = () => {
    const navigation = useNavigation();

    const logoBeira = require('../assets/beira.webp')
    const logoArena = require('../assets/arena.jpg')
    const logoAlfredo = require('../assets/alfredo.jpeg')
    const logoAllianz = require('../assets/allianzparque.jpg')
    const logoAntonio = require('../assets/antonioaccioly.jpg')
    const logoBarradao = require('../assets/barradao.jpg')
    const logoCastelao = require('../assets/castelao.jpg')
    const logoFonte = require('../assets/fontenova.jpg')
    const logoHeriberto = require('../assets/heriberto.jpeg')
    const logoJanuario = require('../assets/saojanuario.jpg')
    const logoLigga = require('../assets/ligga.jpeg')
    const logoMaracana = require('../assets/maracanaflamengo.jpg')
    const logoMaracana2 = require('../assets/maracanafluminense.jpg')
    const logoMRV = require('../assets/arenamrv.jpg')
    const logoMineirao = require('../assets/mineirao.jpg')
    const logoQuimica = require('../assets/neoquimicaarena.jpg')
    const logoMorumbis = require('../assets/morumbis.jpg')
    const logoNabi = require('../assets/nabiabichedid.jpg')
    const logoNilton = require('../assets/niltonsantos.jpg')
    const logoPantanal = require('../assets/arenapantanal.jpg')

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
        <ScrollView style={styles.container} contentContainerStyle={styles.containterStyle}>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("BeiraRio")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoBeira} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Beira-Rio / Inter</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Arena")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoArena}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Arena / Grêmio</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Alfredo")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoAlfredo} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Alfredo Jaconi / Juventude</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Heriberto")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoHeriberto}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Heriberto Hülse / Criciúma</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Ligga")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoLigga} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Ligga Arena / Athletico Paranaense</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Allianz")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoAllianz}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Allianz Parque / Palmeiras</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Quimica")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoQuimica} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Neo Quimica Arena / Corinthians</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Morumbis")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoMorumbis}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Morumbis / São Paulo</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Nabi")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoNabi} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Nabi Abi Chedid / Bragantino</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Maracana")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoMaracana2}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Maracanã / Fluminense</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Maracana2")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoMaracana} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Maracanã / Flamengo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Januario")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoJanuario}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>São Januário / Vasco</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Nilton")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoNilton} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Nilton Santos / Botafogo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MRV")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoMRV}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Arena MRV / Atlético Mineiro</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Mineirao")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoMineirao} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Mineirão / Cruzeiro</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Pantanal")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoPantanal}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Arena Pantanal  Cuiaba</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Antonio")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoAntonio} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Antonio Accioly / Atlético Goianiense</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Castelao")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoCastelao}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Castelão / Fortaleza</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxLine}>
                <TouchableOpacity onPress={() => navigation.navigate("Fonte")} style={styles.chatButton}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoFonte} />
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Fonte Nova / Bahia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Barradao")} style={styles.chatButton} >
                    <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={logoBarradao}></Image>
                    <View style={{position:'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 10}}>
                        <MaterialCommunityIcons  name="stadium-variant" size={30} color={colors.lightGray} />
                        <Text style={{fontSize: 30, color:'white', marginLeft: 4, fontWeight:'bold'}}>Barradão / Vitória</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containterStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    boxLine:{
        width: 1100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 10
    },
    chatButton: {
        backgroundColor: 'red',
        height: 400,
        width: '70%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginLeft: 10
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