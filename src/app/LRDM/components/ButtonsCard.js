import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { style } from "../styles/globalStyle";

export default function ButtonsCard({onLogin, onRegister}) {
    return (
        <View
            style={style.introCard}
        >
            <Text
                style={style.sloganText}
            >¡Sigue el ritmo!</Text>

            <TouchableOpacity
                style={style.buttonColor}
                onPress={onLogin}
            >
                <Text style={style.colorItemText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.buttonContrast}
                onPress={onRegister}
            >
                <Text style={style.contrastItemText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}