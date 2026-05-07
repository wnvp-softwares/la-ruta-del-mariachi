import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../styles/globalStyle";

import {
    ImageBackground,
} from "react-native";

import {
    PresentationCard
} from "../components";

export default function MainScreen({
    userIcon,
    userName = "Undefined"
}) {

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

            </SafeAreaView>

        </ImageBackground>
    );
}