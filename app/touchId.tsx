import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const TouchIDScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 40,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 8,
            fontFamily: "SukhumvitSet-Bold",
          }}
        >
          Touch ID
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: "#666666",
            // textAlign: "center",
            marginBottom: 144,
            fontFamily: "SukhumvitSet-Medium",
          }}
        >
          ตั้งค่าล็อคอินด้วยลายนิ้วมือ{"\n"}เพื่อการเข้าถึงที่รวดเร็วขึ้น
        </Text>
        <View style={{ alignItems: "center", marginBottom: 183 }}>
          <Image
            source={require("../assets/images/Touch_ID.png")}
            style={{
              width: 80,
              height: 80,
              tintColor: "#00664F",
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#00664F",
            paddingVertical: 15,
            borderRadius: 8,
            width: "100%",
            marginBottom: 24,
          }}
          onPress={() => {
            // Handle touch ID authentication
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "SukhumvitSet-Medium",
            }}
          >
            ตั้งค่าลายนิ้วมือ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/pinlogin");
          }}
        >
          <Text
            style={{
              color: "#666666",
              fontSize: 16,
              textAlign: "center",
              fontFamily: "SukhumvitSet-Medium",
            }}
          >
            ข้าม
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchIDScreen;
