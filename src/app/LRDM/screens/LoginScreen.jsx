import {
    View,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Animated
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../styles/globalStyle";
import {
    ButtonsCard,
    LoginCard,
    SignUpCard
} from "../components";
import {
    useView,
    useSlideAnimation,
    useSlideOutAnimation
} from "../hooks";

export default function LoginScreen() {
    const { view, goToLogin, goToSignUp, goToIntro } = useView();

    const { slideAnimation, slideOutAnimation } = useSlideAnimation(view);

    return (
        <ImageBackground
            source={require("../assets/Cocula-BG.jpg")}
            style={style.backgroundImage}
            resizeMode="cover"
        >
            <View
                style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >

                    <SafeAreaView
                        style={style.mainContainer}
                    >

                        <Image
                            source={require("../assets/LaRutaDelMariachi.png")}
                            style={style.iconImage}
                        ></Image>

                        {view === "intro" && (
                            <Animated.View style={{ width: "100%", alignItems: "center", transform: [{ translateX: slideAnimation }] }}>
                                <ButtonsCard
                                    onLogin={() => slideOutAnimation(goToLogin, "left")}
                                    onRegister={() => slideOutAnimation(goToSignUp, "left")}
                                />
                            </Animated.View>
                        )}

                        {view === "login" && (
                            <Animated.View style={{ width: "100%", alignItems: "center", transform: [{ translateX: slideAnimation }] }}>
                                <LoginCard
                                    onRegister={() => slideOutAnimation(goToSignUp, "left")}
                                    onCancel={() => slideOutAnimation(goToIntro, "right")}
                                />
                            </Animated.View>
                        )}

                        {view === "signup" && (
                            <Animated.View style={{ width: "100%", alignItems: "center", transform: [{ translateX: slideAnimation }] }}>
                                <SignUpCard
                                    onLogin={() => slideOutAnimation(goToLogin, "right")}
                                    onCancel={() => slideOutAnimation(goToIntro, "right")}
                                />
                            </Animated.View>
                        )}

                    </SafeAreaView>

                </KeyboardAvoidingView>

            </View>

        </ImageBackground>
    );
}