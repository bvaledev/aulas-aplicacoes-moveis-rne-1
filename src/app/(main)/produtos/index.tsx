import { FlatList, ScrollView, View } from "react-native";

import ItemProduto from "../../../components/ItemProduto";
import { produtosEmDestaque } from "../../../produtos";

export default function ListaDeProdutos() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingVertical: 40 }}>
        <View style={{ marginBottom: 40 }}>
          <FlatList
            data={produtosEmDestaque}
            horizontal
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => {
              return <ItemProduto produto={item} />
            }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{
          flexDirection: 'column',
          paddingHorizontal: 16,
          gap: 16
        }}>
          {produtosEmDestaque.map((produto) => {
            return <ItemProduto key={produto.id} produto={produto} />
          })}
        </View>
      </View>
    </ScrollView>
  )
}

// Array -> index = é a posição
// 0 ....
