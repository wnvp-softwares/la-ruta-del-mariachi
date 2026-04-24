import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const useSlideAnimation = (view) => {
    const slideAnimation = useRef(new Animated.Value(400)).current;


    //r: Animacion de entrada
    useEffect(() => {
        slideAnimation.setValue(400);

        Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        }).start();
    }, [view]);

    //b: Animacion de salida
    const slideOutAnimation = (callback, direction = "left") => {
        Animated.timing(slideAnimation, {
            toValue: direction == "left" ? 400 : -400,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            callback && callback()
        });
    };

    return {
        slideAnimation,
        slideOutAnimation
    }
}