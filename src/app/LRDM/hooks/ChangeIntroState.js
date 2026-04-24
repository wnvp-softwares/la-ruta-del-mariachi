import { useState } from "react";

export const useView = () => {
    const [ view, setView] = useState("intro");

    const goToLogin = () => setView("login");
    const goToSignUp = () => setView("signup");
    const goToIntro = () => setView("intro");

    return {
        view,
        goToLogin,
        goToSignUp,
        goToIntro
    };
};