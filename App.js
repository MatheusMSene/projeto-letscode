import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import ListItem from './src/components/listItem/ListItem';
import { poke } from './assets/data/pokemons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP._JfVh6iwSfVowk_jv-zZvAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7' }} style={styles.image} />
        <Text style={styles.headerText} >Shiny-Checker Pokédex</Text>
      </View>
      <View style={styles.divider} />
      <FlatList
        data={poke}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            img={item.img}
            number={item.number}
            type={item.type}
          />
        )} >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 36,
    marginBottom: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  image: {
    height: 48,
    width: 48,
    backgroundColor: 'black',
  },
});
