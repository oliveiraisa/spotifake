import { FlatList, ScrollView, StyleSheet, Text, View, Image } from "react-native"
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";

const DATA = [
    {
        title: 'Recomendados',
        data: [
            {id: '101', autor:'Billie Eilish', nome:'WILDFLOWER', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62'},
            {id: '102', autor:'Billie Eilish', nome:'Lost Cause', tipo: 'albuns', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJe2bumlLAHwPusPds5-ONEIv-1-FtJiRnqg&s'},
            {id: '103', autor:'Billie Eilish', nome:'bury a friend', tipo: 'albuns', img:'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/1200x1200bb.jpg'},
            {id: '104', autor:'ANAVITÓRIA', nome:'Terra', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/d/d2/Cor_anavit%C3%B3ria.jpg'},
            {id: '105', autor:'ANAVITÓRIA', nome:'dois rios', tipo: 'albuns', img:'https://i.ytimg.com/vi/hYu27noLx_0/maxresdefault.jpg'},
            {id: '106', autor:'Hayley Kiyoko', nome:'chance', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Panorama_Cover.jpeg/220px-Panorama_Cover.jpeg'},
            {id: '107', autor:'Clarissa', nome:'súplica', tipo: 'albuns', img:'https://lastfm.freetls.fastly.net/i/u/500x500/40a0338a60533112dcbce358cbf292e7.jpg'},
        ]
    },
    {
        title: 'Álbuns Recomendados',
        data: [
            {id: '201', autor:'Billie Eilish', nome:'HIT ME HARD AND SOFT', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62'},
            {id: '202', autor:'Ariana Grande', nome:'eternal sunshine', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b2738b58d20f1b77295730db15b4'},
            {id: '203', autor:'Maggie Lindemann', nome:'SUCKERPUNCH', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b27384fe2c06cc26b02482553a04'},
            {id: '204', autor:'Billie Eilish', nome:'Guitar Songs', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/9/9b/Guitar_Songs_-_Billie_Eilish.png'},
            {id: '205', autor:'Cigarettes After Sex', nome:'Cry', tipo: 'albuns', img:'https://m.media-amazon.com/images/I/71MLw9w1gAL._UF894,1000_QL80_.jpg'},
            {id: '206', autor:'ANAVITÓRIA', nome:'COR', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/d/d2/Cor_anavit%C3%B3ria.jpg'},
            {id: '207', autor:'ANAVITÓRIA', nome:'O Tempo É Agora', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/3/32/Capa_de_O_Tempo_%C3%89_Agora.jpg'},        ]
    },
    {
        title: 'Artistas Favoritos',
        data: [
            {id: '301', nome:'Billie Eilish', tipo: 'artista', img:'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62'},
            {id: '302', nome:'ANAVITÓRIA', tipo: 'artista', img:'https://upload.wikimedia.org/wikipedia/pt/d/d2/Cor_anavit%C3%B3ria.jpg'},
            {id: '303', nome:'Ariana Grande', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb40b5c07ab77b6b1a9075fdc0'},
            {id: '304', nome:'Maggie Lindemann', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb3e17e695dc823f15740344b7'},
            {id: '305', nome:'Clarissa', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb26b74b21776ec5990cf9b98a'},
            {id: '306', nome:'Hayley Kiyoko', tipo: 'artista', img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Panorama_Cover.jpeg/220px-Panorama_Cover.jpeg'},
            {id: '307', nome:'Cigarettes After Sex', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb0e871e0389b9722cc12a4118'},        ]
    }
]

const Home = () => {
    return (
        <View style={styles.container}>
            <TopBar title={'Spotifake'} icon={null} />
            <ScrollView style={styles.feed}>
                {DATA.map((section, index) => (
                    <View key={index} style={styles.sectionContainer}>
                        <Text style={styles.header}>{section.title}</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            contentContainerStyle={styles.row}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.itemContainer}>
                                    <Image
                                        style={[styles.img, { borderRadius: item.tipo === 'artista' ? 80 : 4 }]}
                                        source={{ uri: item.img }}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.album}>{item.nome}</Text>
                                        <Text style={styles.autor}>{item.autor}</Text>
                                    </View>
                                </View>
                            )}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.bottomWall}>

            </View>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C1E47',
    },
    sectionContainer: {
        marginVertical: 10,
    },
    feed: {
        marginTop: 90,
    },
    bottomWall: {
        marginBottom: 80,
        backgroundColor: 'transparent'
    },
    row: {
        paddingHorizontal: 20,
        gap: 6,
    },
    img: {
        width: 125,
        height: 125,
        marginBottom: 4,
        borderRadius: 8, 
    },
    itemContainer: {
        alignItems: 'center',
        maxWidth: 125,
        backgroundColor: '#3E2B63', 
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    textContainer: {
    },
    itemText: {
        color: '#D3BFFA',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D3BFFA', 
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    album: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 13,
        height: 20,
        textAlign: 'center'
    },
    autor: {
        color: "rgba(255,255,255,0.9)",
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 6
    }
});

export default Home;