import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const SuccessScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/success.png")}
          style={{
            width: 128,
            height: 128,
            marginBottom: 68,
            tintColor: "#00664F",
          }}
        />

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
            fontFamily: "SukhumvitSet-Bold",
          }}
        >
          สำเร็จ
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#666666",
            marginBottom: 49,
            fontFamily: "SukhumvitSet-Medium",
            textAlign: "center",
          }}
        >
          รอรับรหัสยืนยันผ่านข้อความที่เราจะส่งให้
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#00664F",
            borderRadius: 5,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          onPress={() => router.push("/pincode")}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontFamily: "SukhumvitSet-Bold",
            }}
          >
            ตกลง
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
