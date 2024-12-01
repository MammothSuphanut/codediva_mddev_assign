import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";

const OtpScreen = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTimerRunning && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsTimerRunning(false);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [countdown, isTimerRunning]);

  const handleResendCode = () => {
    setCountdown(60);
    setIsTimerRunning(true);
  };

  const handleOtpChange = (text: string) => {
    if (text.length === 6) {
      router.push("/success");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => router.push("/success")}
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
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginBottom: 7,
              fontFamily: "SukhumvitSet-Bold",
            }}
          >
            ยืนยันตัวตน
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#666666",
              marginBottom: 5,
              fontFamily: "SukhumvitSet-Medium",
            }}
          >
            กรุณากรอกรหัสยืนยันที่ได้ส่งไปที่
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#666666",
              marginBottom: 41,
              fontFamily: "SukhumvitSet-Medium",
            }}
          >
            082-XXX-8998
          </Text>

          <OtpInput
            numberOfDigits={6}
            onTextChange={handleOtpChange}
            theme={{
              pinCodeContainerStyle: {
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                borderRadius: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#CCCCCC",
                width: 40,
                height: 40,
              },
              pinCodeTextStyle: {
                fontSize: 24,
                fontFamily: "SukhumvitSet-Text",
                color: "#000000",
              },
              focusedPinCodeContainerStyle: {
                borderBottomColor: "#00664F",
                borderBottomWidth: 1,
              },
            }}
          />

          <View
            style={{
              marginTop: 128,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#666666",
                fontFamily: "SukhumvitSet-Medium",
              }}
            >
              หากคุณไม่ได้รับรหัส?
            </Text>
            <TouchableOpacity
              style={{ marginTop: 12 }}
              onPress={handleResendCode}
              disabled={isTimerRunning}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#00664F",
                  fontFamily: "SukhumvitSet-Bold",
                }}
              >
                ส่งรหัสใหม่ {isTimerRunning ? `(${countdown})` : ""}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpScreen;
