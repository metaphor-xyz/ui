"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("./Button"));
const theme_1 = require("./theme");
function ProfileComponent({ name, icon, onClick }) {
    const styles = useStyles();
    return (react_1.default.createElement(Button_1.default, { color: "unfilled-with-border", rounded: true, onPress: onClick, title: name, postTextComponent: react_1.default.createElement(react_native_1.View, { style: styles.itemIcon },
            react_1.default.createElement(react_native_1.Image, { style: { height: '100%' }, source: { uri: icon } })) }));
}
exports.default = ProfileComponent;
const useStyles = (0, theme_1.createStyles)(theme => ({
    itemIcon: {
        width: 24,
        height: 24,
        marginLeft: 14,
    },
}));
//# sourceMappingURL=ProfileComponent.js.map