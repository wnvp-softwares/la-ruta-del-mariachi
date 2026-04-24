import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { style } from "../styles/globalStyle";

export default function LoginCard({onLogin, onRegister, onCancel}) {
    return (
        <View
            style={style.formCard}
        >
            <Text style={[style.colorItemText, {marginBottom: 5}]}>Usuario</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Ingresa tu usuario"
            ></TextInput>

            <Text style={[style.colorItemText, {marginBottom: 5}]}>Contraseña</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Ingresa tu contraseña"
                secureTextEntry
            ></TextInput>

            <TouchableOpacity
                style={style.buttonColor}
            >
                <Text style={style.colorItemText}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.buttonContrast}
            >
                <Text style={style.contrastItemText} onPress={onRegister}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.bottomButton}>
                <Text style={style.hrefStyle} onPress={onCancel}>◀ Cancelar</Text>
            </TouchableOpacity>

        </View>
    );
}