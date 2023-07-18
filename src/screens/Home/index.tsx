import { BackgroundImage, Container, Logo, Text } from "./styles";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Alert } from "react-native";

import WalertLogo from "../../assets/walert-logo.png";
import WalertBg from "../../assets/warlert-bg.png";

import * as Notify from "expo-notifications";

export default function Home() {
  Notify.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    }),
  });

  const handleCallNotification = async () => {
    const { status } = await Notify.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Você precisa ativar a permissão para notificações");
    }

    await Notify.scheduleNotificationAsync({
      content: {
        title: "Hora de se hidratar",
        body: "Vai tomar um copo de água!",
        color: "#000",
      },
      trigger: { seconds: 1 },
    });
  };

  return (
    <Container>
      <BackgroundImage source={WalertBg}>
        <Logo source={WalertLogo} />
        <Text>Quanto avisos você quer receber?</Text>
        <Input />
        <Button title="Confirmar" onPress={handleCallNotification} />
      </BackgroundImage>
    </Container>
  );
}
