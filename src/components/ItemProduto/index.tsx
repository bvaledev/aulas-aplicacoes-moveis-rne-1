import { Image } from "expo-image"
import { StyleSheet, Text, View } from "react-native"

import { Produto } from "../../produtos"

type Props = {
  produto: Produto
}

export default function ItemProduto({ produto }: Props) {

  const preco = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(produto.preco)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={produto.imagem} contentFit="cover" />
      <Text style={styles.title}>{produto.titulo}</Text>
      <Text style={styles.price}>{preco}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04548E',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 16
  },
  image: {
    minWidth: 350,
    width: '100%',
    height: 400,
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fafdff',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9a52'
  },
})
