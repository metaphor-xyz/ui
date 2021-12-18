"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function BaseContainer({ children, }) {
    const styles = useStyles();
    return react_1.default.createElement(react_native_1.View, { style: styles.container }, children);
}
exports.default = BaseContainer;
const useStyles = (0, theme_1.createStyles)((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
}));
//# sourceMappingURL=BaseContainer.js.map