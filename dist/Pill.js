"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_paper_1 = require("react-native-paper");
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
function Pill({ iconComponent, loading, text }) {
    const styles = useStyles();
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        iconComponent,
        loading ? react_1.default.createElement(react_native_paper_1.ActivityIndicator, { color: "#fff", size: "small" }) : react_1.default.createElement(Typography_1.default, { type: "info" }, text)));
}
exports.default = Pill;
const useStyles = (0, theme_1.createStyles)(theme => ({
    container: {
        height: 20,
        padding: 4,
        paddingRight: 6,
        paddingLeft: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        flexDirection: 'row',
        backgroundColor: theme.colors.onSurface,
    },
}));
//# sourceMappingURL=Pill.js.map