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
import { useState } from "react";

export default function LoginScreen() {
    const { view, goToLogin, goToSignUp, goToIntro } = useView();

    const [message, setMessage] = useState("");
    const [user, setUser] = useState(null);

    const { slideAnimation, slideOutAnimation } = useSlideAnimation(view);

    const API_URL = "http://192.168.1.15:3000/";

    const handleSignUp = async (username, password) => {

        try {

            const response = await fetch(
                `${API_URL}api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                return {
                    success: false,
                    message: data.message
                };
            }

            setMessage(data.message);
            setUser(data.user);

            console.log("Usuario registrado:", data);

            return {
                success: true,
                message: data.message,
                user: data.user
            };

        } catch (error) {

            console.log(
                "Error al realizar fetch:",
                error
            );

            return {
                success: false,
                message: "No se pudo conectar con el servidor"
            };
        }
    };

    const handleLogin = async (username, password) => {
        try {
            const response = await fetch(`${API_URL}api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                return {
                    success: false,
                    message: data.message
                };
            }

            setMessage(data.message);
            setUser(data.user);

            return {
                success: true,
                message: data.message,
                user: data.user
            };

        } catch (error) {
            console.log(
                "Error al realizar fetch:",
                error
            );
            return {
                success: false,
                message: "No se pudo conectar con el servidor"
            };
        }
    };

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
                                onLogin={handleLogin}
                                    onRegister={() => slideOutAnimation(goToSignUp, "left")}
                                    onCancel={() => slideOutAnimation(goToIntro, "right")}
                                />
                            </Animated.View>
                        )}

                        {view === "signup" && (
                            <Animated.View style={{ width: "100%", alignItems: "center", transform: [{ translateX: slideAnimation }] }}>
                                <SignUpCard
                                    onRegister={handleSignUp}
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