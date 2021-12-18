"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionSelectorItem = void 0;
const Button_1 = __importDefault(require("./Button"));
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function ActionSelectorItem(_props) {
    return null;
}
exports.ActionSelectorItem = ActionSelectorItem;
function ActionSelectorItemWrapper({ action }) {
    const styles = useStyles();
    const props = action.props;
    return (react_1.default.createElement(react_native_1.View, { style: styles.itemContainer },
        react_1.default.createElement(react_native_1.View, { style: styles.itemInfo },
            props.icon && (react_1.default.createElement(react_native_1.View, { style: styles.itemIcon },
                react_1.default.createElement(react_native_1.Image, { style: { height: "100%" }, source: { uri: props.icon } }))),
            react_1.default.createElement(Typography_1.default, { type: "body" }, props.name)),
        react_1.default.createElement(react_native_1.View, { style: styles.itemActions }, props.actions &&
            props.actions.map((ac) => (react_1.default.createElement(react_native_1.View, { key: ac.id, style: styles.itemAction },
                react_1.default.createElement(Button_1.default, Object.assign({}, ac))))))));
}
function ActionSelector({ children }) {
    const styles = useStyles();
    const items = Array.isArray(children) ? children : [children];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, items.map((c) => (react_1.default.createElement(ActionSelectorItemWrapper, { key: c.props.name, action: c })))));
}
exports.default = ActionSelector;
const useStyles = (0, theme_1.createStyles)((theme) => ({
    container: {},
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderColor: theme.colors.onSurface,
        borderWidth: 1,
        borderRadius: 2,
    },
    itemInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemIcon: {
        width: 35,
        height: 35,
        marginRight: 14,
    },
    itemName: {},
    itemActions: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemAction: {
        marginRight: 14,
    },
}));
//# sourceMappingURL=ActionSelector.js.map