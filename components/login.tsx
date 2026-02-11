import { toastMessage } from "@/constants/variables";
import { loginUser } from "@/services/user";
import { loginStyles } from "@/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data: any = await loginUser({ email, password });
      await AsyncStorage.setItem("token", data.token);
      toastMessage("success", data.message);
      router.push("/products");
    } catch (err: any) {
      toastMessage("error", err.message);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        style={loginStyles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        style={loginStyles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}
