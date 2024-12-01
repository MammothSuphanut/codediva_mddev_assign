import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    // Handle forgot password logic here
    if (phoneNumber.trim()) {
      // Send reset password request
      router.push("./success");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 24,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ padding: 8 }}
          >
            <Ionicons name="arrow-back" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 8,
              fontFamily: "SukhumvitSet-Bold",
            }}
          >
            ลืมรหัสผ่าน?
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#494949",
              marginBottom: 39,
              fontFamily: "SukhumvitSet-Medium",
            }}
          >
            กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่{"\n"}ลงทะเบียน
          </Text>

          <TextInput
            style={{
              height: 48,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
              fontSize: 16,
              marginBottom: 48,
              fontFamily: "SukhumvitSet-Medium",
            }}
            placeholder="อีเมล / เบอร์โทรศัพท์"
            placeholderTextColor="#999999"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={{
              backgroundColor: phoneNumber.trim() ? "#00664F" : "#E5E5E5",
              height: 48,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleSubmit}
            disabled={!phoneNumber.trim()}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontFamily: "SukhumvitSet-Medium",
              }}
            >
              ส่ง
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
