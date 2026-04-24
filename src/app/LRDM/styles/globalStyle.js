import { StyleSheet } from "react-native";
import { theme } from  "./theme";

export const style = StyleSheet.create({

    //r: Los estilos se ordenan de manera procedural a su uso //w: @wnvp-softwares

    // Contenedor principal (Toda la pantalla) //w: @wnvp-softwares
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
    },

    //g: Botones:
        //b: Botones de color primario

    buttonColor: {
        backgroundColor: theme.COLORS.colorComponentPrimary,

        width: "80%",
        height: 50,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 25,

        marginBottom: 15,
    },

    colorItemText: {
        color: theme.COLORS.whiteText,
        fontWeight: "bold",

        fontSize: 20,
    },

        //w: Boton de contraste blanco

    buttonContrast: {
        backgroundColor: theme.COLORS.contrastWhite,

        width: "80%",
        height: 50,

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 25,

        marginBottom: 15,
    },

    contrastItemText: {
        color: theme.COLORS.colorText,
        fontWeight: "bold",

        fontSize: 20,
    },

    bottomButton: {
        position: "absolute",

        bottom: -20,
        left: 10,

        alignItems: "center",
    },

    hrefStyle: {
        color: theme.COLORS.whiteText,

        textDecorationLine: "underline",
        textDecorationColor: theme.COLORS.whiteText,

        fontSize: 20,
        fontWeight: "bold",
    },

    //p: Imagen icono de la app

    iconImage: {
        height: "50%",
        aspectRatio: 1,

        marginBottom: -20,
    },

    sloganText: {
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "italic",

        color: theme.COLORS.whiteText,

        marginBottom: 15,
    },

    //b: Tarjeta contenedora de botones Login <=> SignUp

    introCard: {
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
    },

    //b: Tarjeta contenedora de formulario Login <=> SignUp

    formCard: {
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
    },

    //o: Estilo de los Big Inputs (tamaño equivalente al boton {90%})

    bigInput: {
        backgroundColor: theme.COLORS.whiteText,

        width: "70%",
        height: 40,

        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        borderRadius: 10,

        marginBottom: 15,
    },
});