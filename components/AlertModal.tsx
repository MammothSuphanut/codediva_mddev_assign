import React from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";

interface CustomAlertProps {
  visible: boolean;
  onClosePress: () => void;
  onEnterPasswordPress: () => void;
}

const CustomAlert = ({
  visible,
  onClosePress,
  onEnterPasswordPress,
}: CustomAlertProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 270,
            backgroundColor: "white",
            borderRadius: 14,
            padding: 20,
            alignItems: "center",
          }}
        >
          {/* Touch ID Icon */}
          <Image
            source={require("../assets/images/Touch_ID.png")}
            style={{
              width: 43.52,
              height: 42.93,
              tintColor: "#FF3B30",
              marginBottom: 10,
            }}
          />

          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Touch ID for{"\n"}"CGS Application"
          </Text>

          <Text
            style={{
              fontSize: 13,
              textAlign: "center",
              color: "#666666",
              marginBottom: 20,
            }}
          >
            เข้าใช้งานด้วย Touch ID หรือ{"\n"}ยกเลิกเพื่อกลับไปใช้รหัส PIN
          </Text>

          <TouchableOpacity
            onPress={onEnterPasswordPress}
            style={{
              width: "100%",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#007AFF",
                fontSize: 17,
                textAlign: "center",
              }}
            >
              Enter Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClosePress}
            style={{
              width: "100%",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#007AFF",
                fontSize: 17,
                textAlign: "center",
              }}
            >
              ยกเลิก
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
