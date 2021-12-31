"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("@davatar/react"));
const react_2 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("./Button"));
const theme_1 = require("./theme");
function ProfileComponent({ name, address, onClick }) {
    const styles = useStyles();
    return (react_2.default.createElement(Button_1.default, { color: "unfilled-with-border", rounded: true, onPress: onClick, title: name, postTextComponent: react_2.default.createElement(react_native_1.View, { style: styles.davatarContainer },
            react_2.default.createElement(react_1.default, { size: 28, address: address || '0x00000000000000000000000' })) }));
}
exports.default = ProfileComponent;
const useStyles = (0, theme_1.createStyles)(_theme => ({
    davatarContainer: {
        marginLeft: 14,
    },
}));
//# sourceMappingURL=ProfileComponent.js.map