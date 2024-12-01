import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isValidateUser, setIsValidateUser] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const onFinish = async () => {
    if (username && password) {
      router.push("/reqOtp");
    }
    if (!username) setIsValidateUser(true);
    if (!password) setIsValidatePassword(true);
  };

  const renderPasswordRightIcon = () => (
    <TouchableOpacity
      onPress={() => setVisible(!visible)}
      style={{
        position: "absolute",
        right: 12,
        top: 12,
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name={visible ? "eye-outline" : "eye-off-outline"}
        size={24}
        color="#666666"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
        {/* Input Fields */}
        <View style={{ marginBottom: 24 }}>
          <TextInput
            placeholder="ชื่อผู้ใช้งาน"
            style={{
              height: 48,
              borderWidth: 1,
              borderTopColor: "transparent",
              borderRightColor: "transparent",
              borderLeftColor: "transparent",
              borderColor: "#E8E8E8",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 16,
              fontSize: 16,
              marginBottom: 12,
              fontFamily: "SukhumvitSet-Text",
            }}
            value={username}
            onChangeText={(e) => {
              setIsValidateUser(false);
              setUsername(e);
            }}
          />
          {isValidateUser && (
            <Text
              style={{
                fontSize: 12,
                color: "red",
                fontFamily: "SukhumvitSet-Text",
              }}
            >
              *กรุณากรอก ชื่อผู้ใช้งาน
            </Text>
          )}
          <View style={{ position: "relative", marginBottom: 12 }}>
            <TextInput
              placeholder="รหัสผ่าน"
              style={{
                height: 48,
                borderWidth: 1,
                borderColor: "#E8E8E8",
                backgroundColor: "#FFFFFF",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderLeftColor: "transparent",
                paddingHorizontal: 16,
                fontSize: 16,
                fontFamily: "SukhumvitSet-Text",
              }}
              secureTextEntry={!visible}
              value={password}
              onChangeText={(e) => {
                setIsValidatePassword(false);
                setPassword(e);
              }}
            />
            {renderPasswordRightIcon()}
          </View>
          {isValidatePassword && (
            <Text
              style={{
                fontSize: 12,
                color: "red",
                fontFamily: "SukhumvitSet-Text",
              }}
            >
              *กรุณากรอก รหัสผ่าน
            </Text>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
              onPress={toggleCheckbox}
              activeOpacity={0.7}
            >
              <View
                style={[
                  {
                    width: 16,
                    height: 16,
                    borderWidth: 0.5,
                    borderColor: "#B7B7B7",
                    borderRadius: 4,
                    marginRight: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  isChecked && {
                    backgroundColor: "#00664F",
                    borderColor: "#00664F",
                  },
                ]}
              >
                {isChecked && (
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                    }}
                  >
                    ✓
                  </Text>
                )}
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#646465",
                  fontFamily: "SukhumvitSet-Text",
                }}
              >
                บันทึกการเข้าสู่ระบบ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 8 }}
              onPress={() => router.push("/forget")}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#646465",
                  fontFamily: "SukhumvitSet-Text",
                }}
              >
                ลืมรหัสผ่าน?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#00664F",
              borderRadius: 5,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onFinish}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontFamily: "SukhumvitSet-Bold",
              }}
            >
              เข้าสู่ระบบ
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 28,
              marginBottom: 26,
            }}
          >
            <View
              style={{ flex: 1, borderBottomWidth: 1, borderColor: "#B7B7B7" }}
            />
            <Text
              style={{
                color: "#646465",
                fontSize: 14,
                fontFamily: "SukhumvitSet-Text",
              }}
            >
              ไม่มีบัญชีผู้ใช้
            </Text>
            <View
              style={{ flex: 1, borderBottomWidth: 1, borderColor: "#B7B7B7" }}
            />
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#7A7A7A",
              borderRadius: 5,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#00664F",
                fontSize: 14,
                fontFamily: "SukhumvitSet-Bold",
              }}
            >
              เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
