import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl }) => {

    const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";

    return (<>
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: logoUrl }} style={styles.image} />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}> {name} </Text>
                        <Text style={styles.subtitle}> {symbol} </Text>
                    </View>
                </View>

                <View style={styles.rightWrapper}>
                    <Text style={styles.title}> ${currentPrice} </Text>
                    <Text style={[styles.subtitle, { color: priceChangeColor }]}> {priceChangePercentage7d}% </Text>
                </View>
            </View>
        </TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
        color: 'grey',
    },
})

export default ListItem;