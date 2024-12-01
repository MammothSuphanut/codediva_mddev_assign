import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const RequestOtpScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <TouchableOpacity style={{ padding: 20 }} onPress={() => router.back()}>
        <Image
          source={require("../assets/images/back.png")}
          style={{
            marginLeft: 24,
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginBottom: 20,
            padding: 5,
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "#00664F",
            borderRadius: 5,
          }}
        >
          <Image
            source={require("../assets/images/lock.png")}
            style={{
              width: 75,
              height: 75,
              tintColor: "#00664F",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 10,
            fontFamily: "SukhumvitSet-Bold",
          }}
        >
          OTP จะถูกส่งไปที่เบอร์โทรศัพท์
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#00664F",
            marginBottom: 55,
            fontFamily: "SukhumvitSet-Bold",
          }}
        >
          082-XXX-8998
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#00664F",
            borderRadius: 5,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 20,
          }}
          onPress={() => router.push("/otp")}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontFamily: "SukhumvitSet-Bold",
            }}
          >
            ขอรหัส OTP
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 12,
            color: "#666666",
            textAlign: "center",
            fontFamily: "SukhumvitSet-Medium",
          }}
        >
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RequestOtpScreen;
