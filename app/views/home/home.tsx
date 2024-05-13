import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { StackParamList } from "../../routes/types";

type navigateProps = NativeStackNavigationProp<StackParamList, 'Home'>;

export default function Home() {
  const Navigation = useNavigation<navigateProps>();

  const [user, setUser] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const userInputRef = useRef<TextInput>(null);

  const handleOutsidePress = () => {
    userInputRef.current?.blur();
  };

  const go = () => {
    Navigation.navigate('Welcome', {
      name: user
    });
  }

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <View>
          <Text style={styles.title}>Bem vinde 😏 </Text>
        </View>

        <View style={{ width: '100%', marginVertical: 12, alignItems: 'center' }}>
          <Text style={{ marginBottom: 10 }}> Coloca seu nome aí 👀👇</Text>
          <TextInput
            style={[
              styles.input,
              focusedInput === 'user' ? styles.borderPrimary : styles.borderGray
            ]}
            ref={userInputRef}
            onChangeText={setUser}
            onSubmitEditing={() => userInputRef.current && userInputRef.current.focus()}
            returnKeyType="next"
            value={user}
            placeholder="Nome Aqui"
            onFocus={() => setFocusedInput('user')}
          />
        </View>

        <TouchableOpacity onPress={go} style={styles.button}>
          <Text>GO</Text>
          <Text>
            <Ionicons name="arrow-forward" size={32} color="green" />
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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