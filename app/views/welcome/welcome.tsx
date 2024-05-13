import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation } from "@react-navigation/native";

import { StackParamList } from "../../routes/types";
import { useContext, useEffect, useState } from "react";
import Context, { IContext } from "../../context/Context";

type navigateProps = NativeStackNavigationProp<StackParamList, 'Welcome'>;
type Prop = RouteProp<StackParamList, 'Welcome'>;

type RouteProps = {
  route: Prop;
};

export default function Welcome({ route }: RouteProps) {
  const Navigation = useNavigation<navigateProps>();
  const Prop = route.params;

  const { data, setData } = useContext<IContext>(Context);
  const [current, setCurrent] = useState<number>(0);

  const back = () => {
    Navigation.navigate('Home');
  }

  useEffect(() => {
    setCurrent(data);
    setData(data + 1);
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bem vinde {Prop.name} </Text>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}> Você visitou essa tela um total de: {current}x </Text>
        <Text style={[styles.title, { fontSize: 24, marginTop: 10 }]}> Parabéns 💅 </Text>
      </View>

      <TouchableOpacity onPress={back} style={styles.button}>
        <Text>
          <Ionicons name="arrow-back-outline" size={32} color="green" />
        </Text>
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },

  button: {
    width: 100,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },

  title: {
    fontSize: 20,
    color: 'gray',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  borderGray: {
    borderTopColor: '#a6a6a6',
    borderBottomColor: '#a6a6a6',
    borderStartColor: '#a6a6a6',
    borderEndColor: '#a6a6a6',
  },

  borderPrimary: {
    borderTopColor: '#cd533d',
    borderBottomColor: '#cd533d',
    borderStartColor: '#cd533d',
    borderEndColor: '#cd533d',
  }
});