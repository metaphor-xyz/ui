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
exports.InfoCard = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
function isPromise(obj) {
    return !!obj && typeof obj === 'object' && 'then' in obj;
}
function InfoCard(_props) {
    return null;
}
exports.InfoCard = InfoCard;
function InfoCardWrapper({ infoCard }) {
    const { icon, title, titleComponent, description, descriptionComponent, postTextComponent, onPress, disabled, loading, } = infoCard.props;
    const styles = useStyles();
    const scalingAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(1)).current;
    const [mouseEntered, setMouseEntered] = (0, react_1.useState)(false);
    const [asyncLoading, setAsyncLoading] = (0, react_1.useState)(false);
    const onMouseEnter = (0, react_1.useCallback)(() => {
        setMouseEntered(true);
    }, []);
    const onMouseLeave = (0, react_1.useCallback)(() => {
        setMouseEntered(false);
    }, []);
    (0, react_1.useEffect)(() => {
        if (!disabled) {
            if (mouseEntered) {
                // Scale component when mouse enters
                react_native_1.Animated.timing(scalingAnim, {
                    toValue: 1.5,
                    duration: 200,
                    useNativeDriver: true,
                }).start();
            }
            else {
                // Reset component to 100% scale when mouse leaves
                react_native_1.Animated.timing(scalingAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }).start();
            }
        }
    }, [disabled, scalingAnim, mouseEntered]);
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
            react_1.default.createElement(react_native_1.ActivityIndicator, { color: "#fff", size: "small" })));
    }
    const opacity = scalingAnim.interpolate({
        inputRange: [1, 1.5],
        outputRange: [0, 1],
    });
    const innerComponent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.Animated.View, { style: [
                styles.itemContainer,
                {
                    position: 'absolute',
                    transform: [{ scale: scalingAnim }],
                    opacity,
                    // @ts-ignore
                    background: 'linear-gradient(180deg, #FAFAF9 0%, rgba(250, 250, 249, 0) 100%)',
                },
            ] }),
        react_1.default.createElement(react_native_1.Animated.View, { style: [
                styles.itemContainer,
                disabled && styles.disabled,
                {
                    transform: [{ scale: scalingAnim }],
                },
            ] },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: press, disabled: !onPress || disabled, activeOpacity: 0.8 },
                react_1.default.createElement(react_native_1.View, { style: styles.centerAlign },
                    react_1.default.createElement(react_native_1.View, { style: [styles.iconContainer, { backgroundColor: 'none' }] },
                        react_1.default.createElement(react_native_1.Image, { style: { height: '100%' }, source: { uri: icon } })),
                    titleComponent ? react_1.default.createElement(react_1.default.Fragment, null, titleComponent) : react_1.default.createElement(Typography_1.default, { type: "body-bold" }, title),
                    descriptionComponent ? (react_1.default.createElement(react_1.default.Fragment, null, descriptionComponent)) : (react_1.default.createElement(Typography_1.default, { type: "info", style: styles.descriptionText }, description))),
                postTextComponent))));
    // If info card is a button, wrap in button tag
    if (onPress) {
        react_1.default.createElement("button", { style: {
                border: 'none',
                cursor: disabled ? 'default' : 'pointer',
                background: 'none',
                padding: 0,
            }, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, disabled: disabled }, innerComponent);
    }
    // If info card is not a button, wrap in a div tag
    return (react_1.default.createElement("div", { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, innerComponent));
}
function ActionCardGroup({ children }) {
    const styles = useStyles();
    const items = Array.isArray(children) ? children : [children];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, items.map(child => (react_1.default.createElement(InfoCardWrapper, { key: child.props.title, infoCard: child })))));
}
exports.default = ActionCardGroup;
const useStyles = (0, theme_1.createStyles)(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    iconContainer: {
        marginBottom: 18,
        height: 18,
        width: 28,
    },
    descriptionText: {
        marginTop: 4,
        color: theme.colors.placeholder,
    },
    itemContainer: {
        height: 290,
        width: 218,
        paddingTop: 36,
        paddingBottom: 36,
        paddingRight: 18,
        paddingLeft: 18,
        margin: 12,
        borderColor: theme.colors.onSurface,
        borderWidth: 1,
        borderRadius: 25,
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
//# sourceMappingURL=InfoCardGroup.js.map