"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manrope_1 = require("@expo-google-fonts/manrope");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_paper_1 = require("react-native-paper");
const react_native_paper_2 = require("react-native-paper");
const theme = Object.assign(Object.assign({}, react_native_paper_1.DefaultTheme), { colors: Object.assign(Object.assign({}, react_native_paper_1.DefaultTheme.colors), { primary: '#AEFF6F', accent: 'rgba(21, 33, 21, 0.1)', background: '#FFF', onSurface: '#DBD9D2' }) });
function ThemeProvider({ themeOverride, children }) {
    const [fontsLoaded] = (0, manrope_1.useFonts)({
        Manrope_400Regular: manrope_1.Manrope_400Regular,
        Manrope_600SemiBold: manrope_1.Manrope_600SemiBold,
        Manrope_700Bold: manrope_1.Manrope_700Bold,
    });
    const combinedTheme = Object.assign(Object.assign({}, theme), themeOverride);
    if (!fontsLoaded) {
        return (react_1.default.createElement(react_native_1.View, { style: {
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            } },
            react_1.default.createElement(react_native_paper_2.ActivityIndicator, { size: "large" })));
    }
    return react_1.default.createElement(react_native_paper_1.Provider, { theme: combinedTheme }, children);
}
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map