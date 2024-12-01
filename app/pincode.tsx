import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const PinCodeScreen = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string>("");
  const [lastPressedNumber, setLastPressedNumber] = useState<string | null>(
    null
  );

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
      router.push({
        pathname: "/confirmPincode",
        params: { pin: pin },
      });
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
          ตั้งค่า PIN CODE
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
            <View style={{ width: 76, height: 76 }} />
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
      </View>
    </SafeAreaView>
  );
};

export default PinCodeScreen;
