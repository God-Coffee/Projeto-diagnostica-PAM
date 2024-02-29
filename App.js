import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShoppingCart from './components/carrinho';
import ProductCard from './components/card';
import { Card } from 'react-native-paper';
import NavBar from './components/NavBar';

const products = [
  {
    title: 'Produto 1',
    price: 19.99,
  },
  {
    title: 'Produto 2',
    price: 29.99,
  },
  {
    title: 'Produto 3',
    price: 39.99,
  },
];

export default function App() {
  const [showProducts, setShowProducts] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <View style={styles.productsContainer}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </View>
      <TouchableOpacity onPress={() => setShowProducts(!showProducts)}>

        <Ionicons name={showProducts ? 'chevron-up' : 'chevron-down'} size={24} color="black" />

      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8a836',
  },
  productsContainer: {
    padding: 16,
  },
});