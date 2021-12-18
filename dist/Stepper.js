"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperItem = void 0;
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function StepperItemView({ component, active }) {
    const styles = useStyles();
    return (react_1.default.createElement(react_native_1.View, { style: styles.itemContainer },
        react_1.default.createElement(Typography_1.default, { style: [styles.itemLabel, active && styles.itemActive] }, component.props.label)));
}
function StepperItem(_props) {
    return null;
}
exports.StepperItem = StepperItem;
function Stepper({ children, activeItem, headerComponent, }) {
    const styles = useStyles();
    const items = Array.isArray(children) ? children : [children];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        headerComponent && react_1.default.createElement(react_native_1.View, { style: styles.header }, headerComponent),
        react_1.default.createElement(react_native_1.View, { style: styles.content }, items.map((c) => (react_1.default.createElement(StepperItemView, { key: c.props.id, component: c, active: c.props.id === activeItem }))))));
}
exports.default = Stepper;
const useStyles = (0, theme_1.createStyles)((theme) => ({
    container: {},
    header: {
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomColor: theme.colors.onSurface,
        borderBottomWidth: 1,
    },
    content: {},
    itemContainer: {
        marginBottom: 18,
    },
    itemLabel: {},
    itemActive: {
        fontWeight: "700",
    },
}));
//# sourceMappingURL=Stepper.js.map