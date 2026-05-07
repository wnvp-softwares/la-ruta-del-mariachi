import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { useState } from "react";
import { style } from "../styles/globalStyle";

export default function SignUpCard({ onLogin, onRegister, onCancel }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handlerRegisterPress = async () => {

        const clearUsername = username.trim();

        if (!clearUsername || !password || !confirmPass) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (password !== confirmPass) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        const result = await onRegister(clearUsername, password);

        if (result?.success) {

            setUsername('');
            setPassword('');
            setConfirmPass('');

            Alert.alert('Exito', result.message);
        } else {
            Alert.alert('Error', result?.message || 'No se pudo registrar el usuario');
        }
    };

    return (
        <View
            style={style.formCard}
        >
            <Text style={[style.colorItemText, { marginBottom: 5 }]}>Nombre de usuario</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={setUsername}
            ></TextInput>

            <Text style={[style.colorItemText, { marginBottom: 5 }]}>Contraseña</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Nueva contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            ></TextInput>

            <Text style={[style.colorItemText, { marginBottom: 5 }]}>Confirmar contraseña</Text>
            <TextInput
                style={style.bigInput}
                placeholder="Confirmar contraseña"
                secureTextEntry
                value={confirmPass}
                onChangeText={setConfirmPass}
            ></TextInput>

            <TouchableOpacity
                style={style.buttonColor}
                onPress={handlerRegisterPress}
            >
                <Text style={style.colorItemText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.buttonContrast}
                onPress={onLogin}
            >
                <Text style={style.contrastItemText}>
                    Iniciar Sesión
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.bottomButton}
                onPress={onCancel}
            >
                <Text style={style.hrefStyle}>
                    ◀ Cancelar
                </Text>
            </TouchableOpacity>

        </View>
    );
}