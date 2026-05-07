import React, { useState } from "react";

import {
    View,
    Text,
    Image
} from "react-native";

import { style } from "../styles/globalStyle";

export default function PresentationCard({
    userIcon,
    userName = "Undefined"
}) {

    const [imageError, setImageError] = useState(false);

    const defaultImage = require("../assets/defaultUserIcon.png");

    const imageSource =
        userIcon && !imageError && userIcon !== "default.png"
            ? { uri: userIcon }
            : defaultImage;

    return (

        <View>

            <Image
                source={imageSource}

                style={style.userIcon}

                onError={() => {
                    setImageError(true);
                }}
            />

            <Text style={style.colorItemText}>
                {userName}
            </Text>

            <Text style={style.colorItemText}>
                ¡Bienvenido a La Ruta del Mariachi!
            </Text>

        </View>

    );
}