import { Dimensions, FlatList, ScrollView, View } from "react-native";

import ItemProduto from "../../../components/ItemProduto";
import { useEffect, useState } from "react";
import { Produto } from "../../../produtos";

const { width: SCREEN_WIDTH } = Dimensions.get("window")

const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.8)

export default function ListaDeProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  // PESQUISAR SOBRE PROMISES
  async function handleGetListaProduto() {
    try {
      const response = await fetch('http://192.168.40.4:3000/produtos')
      const data = await response.json()
      setProdutos(data)
    } catch (e: any) {
      console.error(e.message)
    }
  }

  useEffect(() => {
    handleGetListaProduto()
  }, [])

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingVertical: 40 }}>
        <View style={{ marginBottom: 40 }}>
          <FlatList
            data={produtos}
            horizontal
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ paddingHorizontal: 16,  }}
            renderItem={({ item }) => {
              return <ItemProduto produto={item} style={{ width: ITEM_WIDTH }} />
            }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
            
          />
        </View>

        <View style={{
          flexDirection: 'column',
          paddingHorizontal: 16,
          gap: 16
        }}>
          {produtos.map((produto: any) => {
            return <ItemProduto key={produto.id} produto={produto} />
          })}
        </View>
      </View>
    </ScrollView>
  )
}
