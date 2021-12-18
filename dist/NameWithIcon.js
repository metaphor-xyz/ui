"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function NameWithIcon({ name, icon }) {
    const styles = useStyles();
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.logo },
            react_1.default.createElement(react_native_1.Image, { style: { height: "100%" }, source: { uri: icon } })),
        react_1.default.createElement(Typography_1.default, { type: "info", style: styles.name }, name)));
}
exports.default = NameWithIcon;
const useStyles = (0, theme_1.createStyles)((_theme) => ({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        height: 30,
        width: 30,
    },
    name: {
        flex: 1,
        marginLeft: 12,
    },
}));
//# sourceMappingURL=NameWithIcon.js.map