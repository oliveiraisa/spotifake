import { View, StyleSheet, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import CadastroForm from "../../components/cadastroForm";
import { useState } from "react";

const Cadastro = () => {
    
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Cadastro</Text>
            </View>
            <CadastroForm />
            <Text style={styles.signUpPath}>Já possui uma conta? <Link href={'/login'} style={styles.link}>Conecte-se</Link></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C1E47',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        backgroundColor: '#3E2B63',
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        left: 0,
        position: 'absolute',
        backgroundColor: 'rgba(60, 40, 100, 0.8)', 
        padding: 10,
        borderRadius: 8,
    },
    title: {
        color: '#D3BFFA', 
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signUpPath: {
        color: '#B59DD4', 
        fontSize: 14,
        textAlign: 'center',
    },
    link: {
        color: '#9A70D1', 
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline', 
    }
}
)

export default Cadastro