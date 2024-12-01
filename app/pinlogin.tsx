import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import CustomAlert from "@/components/AlertModal";

const PinLoginScreen = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string>("");
  const [lastPressedNumber, setLastPressedNumber] = useState<string | null>(
    null
  );

  const [showAlert, setShowAlert] = useState(false);

  //   const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  //   useEffect(() => {
  //     (async () => {
  //       const compatible = await LocalAuthentication.hasHardwareAsync();
  //       setIsBiometricSupported(compatible);
  //     })();
  //   }, []);

  const handleBiometricAuth = async () => {
    try {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
        // Alert.alert(
        //   'Touch ID for\n"CGS Application"',
        //   "เข้่าใช้งานด้วย Touch ID หรือ\nยกเลิกเพื่อกลับไปใช้รหัส PIN",
        //   [
        //     {
        //       text: "Enter Password",
        //       onPress: () => console.log("Enter Password pressed"),
        //       style: "default",
        //     },
        //     {
        //       text: "ยกเลิก",
        //       style: "cancel",
        //     },
        //   ]
        // );
        setShowAlert(true);
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Touch ID for "CGS Application"',
        cancelLabel: "ยกเลิก",
        fallbackLabel: "Enter Password",
        disableDeviceFallback: false,
      });

      if (result.success) {
        console.log("Authentication successful");
        // เพิ่มการทำงานเมื่อ authenticate สำเร็จ
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const NumberButton = ({
    number,
    onPress,
    isSelected = false,
  }: {
    number: string | number;
    onPress: () => void;
    isSelected?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        justifyContent: "center",
        alignItems: "center",
        ...(isSelected && {
          backgroundColor: "#00664F",
          borderColor: "#00664F",
        }),
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: isSelected ? "#FFFFFF" : "#000000",
          fontFamily: "SukhumvitSet-Medium",
        }}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );

  const PinDot = ({ filled }: { filled: boolean }) => (
    <View
      style={{
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: filled ? "#00664F" : "transparent",
        borderWidth: 1,
        borderColor: filled ? "#00664F" : "#CCCCCC",
      }}
    />
  );

  const handleNumberPress = (num: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + num);
      setLastPressedNumber(num);
      setTimeout(() => setLastPressedNumber(null), 100);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const pinDotsArray = Array(6).fill(0);

  useEffect(() => {
    if (pin.length === 6) {
      console.log("finish");
      router.push("/");
    }
  }, [pin]);

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
            fontSize: 15,
            textAlign: "center",
            marginBottom: 15,
            fontFamily: "SukhumvitSet-Text",
          }}
        >
          กรุณากรอกรหัส PIN
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 66,
            gap: 18,
          }}
        >
          {pinDotsArray.map((_, index) => (
            <PinDot key={index} filled={index < pin.length} />
          ))}
        </View>

        <View
          style={{
            alignItems: "center",
            gap: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 40 }}>
            {["1", "2", "3"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                onPress={() => handleNumberPress(num)}
                isSelected={lastPressedNumber === num}
              />
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 40 }}>
            {["4", "5", "6"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                onPress={() => handleNumberPress(num)}
                isSelected={lastPressedNumber === num}
              />
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 40 }}>
            {["7", "8", "9"].map((num) => (
              <NumberButton
                key={num}
                number={num}
                onPress={() => handleNumberPress(num)}
                isSelected={lastPressedNumber === num}
              />
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 40 }}>
            <TouchableOpacity
              onPress={handleBiometricAuth}
              style={{
                width: 76,
                height: 76,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/Touch_ID.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
            <NumberButton
              number="0"
              onPress={() => handleNumberPress("0")}
              isSelected={lastPressedNumber === "0"}
            />
            <TouchableOpacity
              onPress={handleDelete}
              style={{
                width: 76,
                height: 76,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/delete.png")}
                style={{ width: 31.7, height: 20.56 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <CustomAlert
          visible={showAlert}
          onClosePress={() => setShowAlert(false)}
          onEnterPasswordPress={() => {
            setShowAlert(false);
            console.log("Enter Password pressed");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PinLoginScreen;
