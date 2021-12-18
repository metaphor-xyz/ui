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
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const Button_1 = __importDefault(require("./Button"));
function AsyncButton(props) {
    const [loading, setLoading] = (0, react_2.useState)(false);
    const [isError, setError] = (0, react_2.useState)(false);
    const _errorText = props.errorText || 'Failed';
    const _errorColor = props.errorColor || 'darkred';
    const _errorDelay = props.errorDelay || 1500;
    const onPress = () => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield props.action();
            if (props.onPress) {
                props.onPress();
            }
        }
        catch (e) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    });
    (0, react_1.useEffect)(() => {
        if (!isError) {
            return;
        }
        const ref = setTimeout(() => setError(false), _errorDelay);
        return () => clearTimeout(ref);
    }, [isError, _errorDelay]);
    return (react_1.default.createElement(Button_1.default, Object.assign({}, props, { onPress: onPress, loading: loading, title: isError ? _errorText : props.title, color: isError ? _errorColor : props.color })));
}
exports.default = AsyncButton;
//# sourceMappingURL=AsyncButton.js.map