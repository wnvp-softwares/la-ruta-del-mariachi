import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../styles/globalStyle";

import {
    ImageBackground,
    TouchableOpacity,
    Text,
    Image
} from "react-native";

import {
    PresentationCard
} from "../components";

export default function MainScreen({ route }) {

    const { user } = route.params || {};
    const userName = user ? user.username : "Undefined";
    const userIcon = user ? user.profileIcon : "default.png";

    return (
        <ImageBackground
            source={require("../assets/Cocula-BG.jpg")}
            style={style.backgroundImage}
            resizeMode="cover"
        >

            <SafeAreaView style={style.mainContainer}>

                <PresentationCard
                    userIcon={userIcon}
                    userName={userName}
                />

                <TouchableOpacity style={style.llamativeButton}>
                    <Text style={style.colorItemText}>Iniciar Ruta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.midButton}>
                    <Image
                        source={require("../assets/target.png")}
                        style={style.buttonsIcon}
                    ></Image>
                    <Text style={style.colorItemText}>Logros</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </ImageBackground>
    );
}