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
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const react_native_1 = require("react-native");
const react_native_paper_1 = require("react-native-paper");
function isPromise(obj) {
    return !!obj && typeof obj === "object" && "then" in obj;
}
function Button({ preTextComponent, title, titleComponent, onPress, disabled, size, fullWidth, color, loading, }) {
    const styles = useStyles();
    const [mouseEntered, setMouseEntered] = (0, react_1.useState)(false);
    const [asyncLoading, setAsyncLoading] = (0, react_1.useState)(false);
    const onMouseEnter = (0, react_2.useCallback)(() => {
        setMouseEntered(true);
    }, []);
    const onMouseLeave = (0, react_2.useCallback)(() => {
        setMouseEntered(false);
    }, []);
    const press = (0, react_2.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
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
    const colorClass = color
        ? `color-${color}`
        : "color-primary";
    if (isLoading) {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [
                styles.container,
                size === "sm" && styles.containerSM,
                styles.loadingButton,
                styles.disabled,
                fullWidth && styles.fullWidth,
                styles[colorClass],
            ], disabled: true },
            react_1.default.createElement(react_native_paper_1.ActivityIndicator, { color: "#fff", size: "small" })));
    }
    return (react_1.default.createElement("button", { style: {
            border: "none",
            cursor: disabled ? "default" : "pointer",
            background: "none",
            width: fullWidth ? "100%" : undefined,
            maxWidth: "330px",
            padding: 0,
        }, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, disabled: disabled },
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: [
                styles.container,
                size === "sm" && styles.containerSM,
                mouseEntered && styles.hover,
                disabled && styles.disabled,
                fullWidth && styles.fullWidth,
                styles[colorClass],
            ], onPress: press, disabled: disabled, activeOpacity: 0.8 },
            preTextComponent,
            titleComponent ? (react_1.default.createElement(react_1.default.Fragment, null, titleComponent)) : (react_1.default.createElement(Typography_1.default, { type: size === "sm" ? "small-button" : "button" }, title)))));
}
exports.default = Button;
const useStyles = (0, theme_1.createStyles)((theme) => ({
    container: {
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        maxWidth: 330,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        flexDirection: "row",
    },
    containerSM: {
        height: 34,
    },
    disabled: {
        opacity: 0.6,
    },
    hover: {
        opacity: 0.85,
    },
    fullWidth: {
        width: "100%",
    },
    text: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 24,
    },
    textSM: {
        fontSize: 13,
    },
    loadingButton: {
        minWidth: 100,
    },
    "color-primary": {
        backgroundColor: theme.colors.primary,
    },
    "color-secondary": {
        backgroundColor: theme.colors.accent,
    },
}));
//# sourceMappingURL=Button.js.map