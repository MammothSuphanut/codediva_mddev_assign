import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Modal,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const styles = StyleSheet.create({
  languageButton: {
    backgroundColor: "#00664F",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "SukhumvitSet-Medium",
    color: "#FFFFFF",
    fontSize: 16,
  },
});

const LanguageSelectionScreen = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setVisible(true);
  };

  const handleAcceptTerms = () => {
    setVisible(false);
    router.push("/login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* ใส่ view นี้เพราะไม่งั้นคลิก button ไม่ได้ */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 24,
            justifyContent: "center",
            gap: 104,
          }}
        >
          <View
            style={{
              alignItems: "flex-start",
              marginBottom: 32,
            }}
          >
            <Text
              style={{
                fontFamily: "SukhumvitSet-Bold",
                fontSize: 24,
                marginBottom: 8,
                color: "#000000",
              }}
            >
              ยินดีต้อนรับ
            </Text>
            <Text
              style={{
                fontFamily: "SukhumvitSet-Text",
                fontSize: 16,
                color: "#666666",
              }}
            >
              กรุณาเลือกภาษา
            </Text>
          </View>

          <View
            style={{
              gap: 12,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => handleLanguageSelect("en")}
            >
              <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => handleLanguageSelect("th")}
            >
              <Text style={styles.buttonText}>ไทย</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => setVisible(false)}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "space-between",
              paddingTop: 57,
            }}
            activeOpacity={1}
            onPress={() => setVisible(false)}
          >
            <Image
              source={require("../assets/images/back.png")}
              style={{
                marginLeft: 24,
                height: 24,
                width: 24,
              }}
            />

            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                padding: 24,
                flex: 0.75,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  gap: 17.5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: "#00664F",
                      borderStyle: "dashed",
                    }}
                  >
                    <Image
                      source={require("../assets/images/ico.png")}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      fontFamily: "SukhumvitSet-Bold",
                      fontSize: 20,
                      color: "#000000",
                    }}
                  >
                    {selectedLanguage === "th"
                      ? "เงื่อนไขการใช้บริการ"
                      : "Terms of Service"}
                  </Text>
                </View>

                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "#E4E4E4" }}
                />

                <Text
                  style={{
                    fontFamily: "SukhumvitSet-Text",
                    fontSize: 16,
                    color: "#666666",
                    marginBottom: 24,
                  }}
                >
                  {selectedLanguage === "th"
                    ? "กรุณายอมรับเงื่อนไขการใช้บริการ"
                    : "Please accept the Terms of Service"}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    padding: 11,
                    height: 44,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#7DB1A4",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                  }}
                  onPress={() => setVisible(false)}
                >
                  <Text
                    style={{
                      fontFamily: "SukhumvitSet-Medium",
                      color: "#00664F",
                      fontSize: 14,
                    }}
                  >
                    {selectedLanguage === "th" ? "ปฏิเสธ" : "Decline"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    padding: 11,
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "#00664F",
                    height: 44,
                  }}
                  onPress={handleAcceptTerms}
                >
                  <Text
                    style={{
                      fontFamily: "SukhumvitSet-Medium",
                      color: "#FFFFFF",
                      fontSize: 14,
                    }}
                  >
                    {selectedLanguage === "th" ? "ยอมรับ" : "Accept"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default LanguageSelectionScreen;
