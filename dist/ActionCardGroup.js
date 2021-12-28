"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCard = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_paper_1 = require("react-native-paper");
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
function isPromise(obj) {
    return !!obj && typeof obj === 'object' && 'then' in obj;
}
function ActionCard(_props) {
    return null;
}
exports.ActionCard = ActionCard;
function ActionCardWrapper({ actionCard }) {
    const { iconComponent, title, titleComponent, description, descriptionComponent, postTextComponent, onPress, disabled, loading, } = actionCard.props;
    const styles = useStyles();
    const [mouseEntered, setMouseEntered] = (0, react_1.useState)(false);
    const [asyncLoading, setAsyncLoading] = (0, react_1.useState)(false);
    const onMouseEnter = (0, react_1.useCallback)(() => {
        setMouseEntered(true);
    }, []);
    const onMouseLeave = (0, react_1.useCallback)(() => {
        setMouseEntered(false);
    }, []);
    const press = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        if (onPress) {
            const result = onPress();
            if (isPromise(result)) {
                try {
                    setAsyncLoading(true);
                    yield result;
                }
                finally {
                    setAsyncLoading(false);
                }
            }
        }
    }), [onPress]);
    const isLoading = loading || asyncLoading;
    if (isLoading) {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.itemContainer, styles.disabled], disabled: true },
            react_1.default.createElement(react_native_paper_1.ActivityIndicator, { color: "#fff", size: "small" })));
    }
    return (react_1.default.createElement("button", { style: {
            border: 'none',
            cursor: disabled ? 'default' : 'pointer',
            background: 'none',
            padding: 0,
        }, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, disabled: disabled },
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.itemContainer, mouseEntered && styles.hover, disabled && styles.disabled], onPress: press, disabled: disabled, activeOpacity: 0.8 },
            react_1.default.createElement(react_native_1.View, { style: styles.centerAlign },
                react_1.default.createElement(react_native_1.View, { style: styles.iconContainer }, iconComponent),
                titleComponent ? react_1.default.createElement(react_1.default.Fragment, null, titleComponent) : react_1.default.createElement(Typography_1.default, { type: "body-bold" }, title),
                descriptionComponent ? (react_1.default.createElement(react_1.default.Fragment, null, descriptionComponent)) : (react_1.default.createElement(Typography_1.default, { type: "info", style: styles.descriptionText }, description))),
            postTextComponent)));
}
function ActionCardGroup({ children }) {
    const styles = useStyles();
    const items = Array.isArray(children) ? children : [children];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, items.map(child => (react_1.default.createElement(ActionCardWrapper, { key: child.props.title, actionCard: child })))));
}
exports.default = ActionCardGroup;
const useStyles = (0, theme_1.createStyles)(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 18,
    },
    descriptionText: {
        color: theme.colors.placeholder,
    },
    itemContainer: {
        height: 265,
        width: 218,
        padding: 36,
        marginRight: 12,
        marginLeft: 12,
        borderColor: theme.colors.onSurface,
        borderWidth: 1,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    centerAlign: {
        alignItems: 'center',
    },
    disabled: {
        opacity: 0.6,
    },
    hover: {
        opacity: 0.7,
    },
}));
//# sourceMappingURL=ActionCardGroup.js.map