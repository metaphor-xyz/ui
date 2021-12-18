"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideNavItem = void 0;
const theme_1 = require("./theme");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function SideNavItem({}) {
    const styles = useStyles();
    return react_1.default.createElement(react_native_1.View, { style: styles.itemContainer });
}
exports.SideNavItem = SideNavItem;
function SideNav({ items, headerComponent }) {
    const styles = useStyles();
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        headerComponent && react_1.default.createElement(react_native_1.View, { style: styles.header }, headerComponent),
        react_1.default.createElement(react_native_1.View, { style: styles.content }, items)));
}
exports.default = SideNav;
const useStyles = (0, theme_1.createStyles)((_theme) => ({
    container: {},
    header: {},
    content: {},
    itemContainer: {},
}));
//# sourceMappingURL=SideNav.js.map