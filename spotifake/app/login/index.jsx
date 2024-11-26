import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../../components/loginForm";
import { Link, useRouter } from "expo-router";
import { useContext } from "react";
import { IdContext } from "../../scripts/idContext";

const login = () => {
    const router = useRouter()
    const { userInfo, setUserInfo } = useContext(IdContext)

    const semSenha = () => {
        setUserInfo({
            ...userInfo,
            nome: 'admin',
            email: 'admin@gmail.com',
            foto: "https://res.cloudinary.com/duo8nbu2l/image/upload/v1732039695/bkuozj0eb4iefrsbjoda.jpg"
        })
        router.push('/home')
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Entrar</Text>
            </View>
            <LoginForm />
            <Text style={styles.signUpPath}>Não tem uma conta? <Link href={'/cadastro'} style={styles.link}>Cadastre-se</Link></Text>
            <TouchableOpacity
                onPress={semSenha}
                activeOpacity={0.5}
                style={styles.passwordButton}>
                <Text style={styles.forgotPassword}>sem senha</Text>
            </TouchableOpacity>
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
        position: 'absolute'
    },
    title: {
        color: '#D3BFFA', 
        fontSize: 26,
        fontWeight: 'bold'
    },
    passwordButton: {
        backgroundColor: '#D3BFFA',
        width: 90,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginTop: 12
    },
    forgotPassword: {
        color: '#9A70D1',
        fontSize: 10,
    },
    signUpPath: {
        color: '#D3BFFA',
        marginTop: 6
    },

    link: {
        color: '#9A70D1', 
    }
}
)

export default login