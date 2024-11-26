import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";

const Item = ({nome, source, tipo}) => {
    return(
        <View style={styles.itemContainer}>
            <Image 
            style={[styles.img,{ borderRadius: tipo === 'artista'? 50 : 4} ]}
            source={{ uri : source}}
            />
            <View style={styles.info}>
            <Text style={ styles.nome}>{nome}</Text>
            <Text style={ styles.tipo}>{tipo}</Text>
            </View>
        </View>
    )
}

const DATA = [
    {id: '1', tipo: 'artista', nome:'Billie Eilish', img:'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62'},
    {id: '2', tipo: 'artista', nome:'ANAVITÓRIA', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-alJZr0ZBntIuhYdGpNWCf2RLsv9y-Zzzg&s'},
    {id: '3', tipo: 'artista', nome:'Maggie Lindemann', img:'https://i.scdn.co/image/ab6761610000e5eb3e17e695dc823f15740344b7'},
    {id: '4', tipo: 'playlist', nome:'musicas curtidas', img:'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e793bc21896fea76d410761a'},
    {id: '5', tipo: 'playlist', nome:'this is Cigarettes After Sex', img:'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO12tsHe-default.jpg'}
]

const Biblioteca = () => {
    return (
        <View style={styles.container}>
           <TopBar title={'Biblioteca'}  icon={<AntDesign name="plus" size={28} color="white" />}/>
            <FlatList 
            data={DATA}
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
            contentContainerStyle={styles.flatListContent}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item nome={item.nome} source={item.img} tipo={item.tipo}/>}
            />
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#2C1E47', // Fundo em tom de roxo escuro
    },
    title: {
        color: '#D3BFFA', // Tom de roxo claro
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
    },
    scrollView: {
        height: '100%',
        width: '100%',
        marginTop: 80,
    },
    flatListContent: {
        paddingBottom: 90,
    },
    itemContainer: {
        minWidth: 300,
        width: '100%',
        maxWidth: 420,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        marginBottom: 14,
        backgroundColor: '#3E2B63', // Fundo em tom de roxo médio
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Sombra para Android
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30, // Torna a imagem circular
        borderWidth: 2,
        borderColor: '#D3BFFA', // Borda em tom de roxo claro
    },
    info: {
        width: '90%',
        maxWidth: 240,
    },
    nome: {
        color: '#FFFFFF', // Texto branco para destaque
        fontSize: 16,
        fontWeight: 'bold',
    },
    tipo: {
        color: '#B59DD4', // Texto em tom de roxo suave
        fontSize: 14,
    },
});

export default Biblioteca;