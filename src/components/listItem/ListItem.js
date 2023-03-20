import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ListItem = ({ name, img, number, type }) => {

    let changeTypeColor = '';

    if(type === 'grass') changeTypeColor = '#33cc33'
    else if(type === 'fire') changeTypeColor = '#ff5c33'
    else if(type === 'water') changeTypeColor = '#4da6ff'
    else if(type === 'bug') changeTypeColor = '#339933'
    else if(type === 'flying') changeTypeColor = '#80bfff'
    else if(type === 'normal') changeTypeColor = '#808080'
    else if(type === 'poison') changeTypeColor = '#A020F0'
    else if(type === 'electric') changeTypeColor = '#FFD700'
    else if(type === 'ground') changeTypeColor = '#996655'

    const [sprite, setSprite] = useState(0);
    const [changeBackGround, setChangeBackGround] = useState("#ddd");

    return (
    <>
        <TouchableOpacity onPress={() => {
            if(sprite === 0) setSprite(1)
            else if(sprite === 1) setSprite(0); 
            if(changeBackGround === "#ddd") setChangeBackGround("#eee")
            else if(changeBackGround === "#eee") setChangeBackGround("#ddd"); 
        }} >
            <View style={[styles.itemWrapper, { backgroundColor: changeBackGround }]}>
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: img[parseInt(sprite)] }} style={styles.image} resizeMode='cover' />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}> {number} </Text>
                        <Text style={styles.title}> {name} </Text>
                    </View>
                </View>

                <View style={styles.rightWrapper}>
                    <Text style={[styles.title, { color: changeTypeColor, fontWeight: 'bold' }]}> {type} </Text>
                </View>
            </View>
        </TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 8,
        marginHorizontal: 14,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    image: {
        height: 88,
        width: 88,
    },
    titlesWrapper: {
        marginLeft: 8,
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        color: 'black',
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
        color: 'grey',
    },
})

export default ListItem;