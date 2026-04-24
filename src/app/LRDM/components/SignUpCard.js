import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { style } from "../styles/globalStyle";

export default function SignUpCard({onLogin, onRegister, onCancel}) {
    return (
        <View
            style={style.formCard}
        >
            <Text style={[style.colorItemText, {marginBottom: 5}]}>Nombre de usuario</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Nombre de usuario"
            ></TextInput>

            <Text style={[style.colorItemText, {marginBottom: 5}]}>Contraseña</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Nueva contraseña"
                secureTextEntry
            ></TextInput>

            <Text style={[style.colorItemText, {marginBottom: 5}]}>Confirmar contraseña</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Confirmar contraseña"
                secureTextEntry
            ></TextInput>

            <TouchableOpacity
                style={style.buttonColor}
            >
                <Text style={style.colorItemText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.buttonContrast}
            >
                <Text style={style.contrastItemText} onPress={onLogin}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.bottomButton}>
                <Text style={style.hrefStyle} onPress={onCancel}>◀ Cancelar</Text>
            </TouchableOpacity>

        </View>
    );
}