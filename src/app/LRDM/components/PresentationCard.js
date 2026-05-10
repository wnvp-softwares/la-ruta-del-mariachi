import React, { useState } from "react";

import {
    View,
    Text,
    Image,
    TouchableOpacity
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

        <View style={style.presentationCard}>

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

            <Text style={[style.colorItemText, { marginBottom: 20}]}>
                ¡Bienvenido a La Ruta del Mariachi!
            </Text>

            <TouchableOpacity
                style={style.buttonColor}
            >
                <Text style={style.colorItemText}>
                    Editar Perfil
                </Text>
            </TouchableOpacity>

        </View>

    );
}