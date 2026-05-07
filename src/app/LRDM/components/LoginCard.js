import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { useState } from "react";
import { style } from "../styles/globalStyle";

export default function LoginCard({onLogin, onRegister, onCancel}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlerLoginPress = async () => {
        const clearUsername = username.trim();

        if (!clearUsername || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const result = await onLogin(clearUsername, password);

        if (result?.success) {
            setUsername('');
            setPassword('');
            Alert.alert('Exito', result.message);
        } else {
            Alert.alert('Error', result?.message || 'No se pudo loguear el usuario');
        }
    }
    
    return (
        <View
            style={style.formCard}
        >
            <Text style={[style.colorItemText, {marginBottom: 5}]}>Usuario</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Ingresa tu usuario"
                value={username}
                onChangeText={setUsername}
            ></TextInput>

            <Text style={[style.colorItemText, {marginBottom: 5}]}>Contraseña</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Ingresa tu contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            ></TextInput>

            <TouchableOpacity
                style={style.buttonColor}
                onPress={handlerLoginPress}
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