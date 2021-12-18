"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function ThreeColumn({ leftComponent, middleComponent, rightComponent, }) {
    const styles = useStyles();
    return (react_1.default.createElement(react_native_1.View, { style: styles.superContainer },
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.leftColumn }, leftComponent),
            react_1.default.createElement(react_native_1.View, { style: styles.middleColumn }, middleComponent),
            react_1.default.createElement(react_native_1.View, { style: styles.rightColumn }, rightComponent))));
}
exports.default = ThreeColumn;
const useStyles = (0, theme_1.createStyles)((theme) => ({
    superContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.colors.background,
        paddingTop: 54,
        paddingBottom: 54,
        paddingLeft: 4,
        paddingRight: 4,
        maxWidth: 1200,
    },
    leftColumn: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 40,
    },
    middleColumn: {
        flex: 3,
        paddingLeft: 40,
        paddingRight: 12,
    },
    rightColumn: {
        flex: 1.5,
        paddingLeft: 12,
    },
}));
//# sourceMappingURL=ThreeColumn.js.map