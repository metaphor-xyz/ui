"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
const useIsMoWeb_1 = __importDefault(require("./useIsMoWeb"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function Typography(props) {
    var _a;
    const isMoWeb = (0, useIsMoWeb_1.default)();
    const styles = useStyles();
    return (react_1.default.createElement(react_native_1.Text, Object.assign({}, props, { style: [
            styles.basic,
            styles[((_a = props.fontWeight) === null || _a === void 0 ? void 0 : _a.toString()) || "400"],
            props.variant && styles[`${props.variant}${isMoWeb ? "XS" : ""}`],
            props.style,
            props.type && styles[props.type],
        ] }), props.children));
}
exports.default = Typography;
const useStyles = (0, theme_1.createStyles)((theme) => ({
    "200": {
        fontFamily: "Manrope_400Regular",
    },
    "300": {
        fontFamily: "Manrope_400Regular",
    },
    "400": {
        fontSize: 16,
        fontFamily: "Manrope_400Regular",
    },
    "500": {
        fontFamily: "Manrope_400Regular",
    },
    "600": {
        fontFamily: "Manrope_600SemiBold",
    },
    basic: {
        color: theme.colors.text,
    },
    header: {
        fontSize: 48,
    },
    headerXS: {
        fontSize: 40,
    },
    caption: {
        fontSize: 14,
        opacity: 0.8,
    },
    captionXS: {
        fontSize: 14,
        opacity: 0.8,
    },
    h1: {
        fontFamily: "Manrope_400Regular",
        fontSize: 64,
        lineHeight: 74,
        letterSpacing: -0.02,
    },
    h2: {
        fontFamily: "Manrope_400Regular",
        fontSize: 36,
        lineHeight: 49,
    },
    h3: {
        fontFamily: "Manrope_400Regular",
        fontSize: 20,
        lineHeight: 40,
    },
    "body-bold": {
        fontFamily: "Manrope_600SemiBold",
        fontSize: 16,
        lineHeight: 24,
    },
    body: {
        fontFamily: "Manrope_400Regular",
        fontSize: 16,
        lineHeight: 24,
    },
    button: {
        fontFamily: "Manrope_700Bold",
        fontSize: 14,
        lineHeight: 20,
    },
    info: {
        fontFamily: "Manrope_400Regular",
        fontSize: 12,
        lineHeight: 22,
    },
    "small-button": {
        fontFamily: "Manrope_700Bold",
        fontSize: 12,
        lineHeight: 22,
    },
}));
//# sourceMappingURL=Typography.js.map