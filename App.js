
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListItem from './src/components/listItem/ListItem';
import sampleData from './assets/data/sampleData';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Mercados</Text>
        <View style={styles.divider} />
      </View>

      < ListItem 
        name={'Bitcoin'}
        symbol={'BTC'}
        currentPrice={34000}
        priceChangePercentage7d={4}
        logoUrl={"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BSV.png"}
      />
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
    marginHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 16,
    marginTop: 16,
  }
});
