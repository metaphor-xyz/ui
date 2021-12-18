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
exports.useWalletSelector = void 0;
const hooks_1 = require("@metaphor-xyz/hooks");
const web3_provider_1 = __importDefault(require("@walletconnect/web3-provider"));
const react_1 = __importStar(require("react"));
const web3modal_1 = __importDefault(require("web3modal"));
const WalletSelectorContext = (0, react_1.createContext)(null);
let web3Modal = null;
function WalletSelectorProvider({ infuraId, children }) {
    const { connectProvider, connected } = (0, hooks_1.useWalletManager)();
    (0, react_1.useEffect)(() => {
        web3Modal = new web3modal_1.default({
            cacheProvider: true,
            providerOptions: {
                walletconnect: {
                    package: web3_provider_1.default,
                    options: {
                        infuraId,
                    },
                },
            },
        });
    }, []);
    const connect = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        if (web3Modal) {
            const provider = yield web3Modal.connect();
            connectProvider(provider);
        }
    }), []);
    return react_1.default.createElement(WalletSelectorContext.Provider, { value: { connect, connected } }, children);
}
exports.default = WalletSelectorProvider;
function useWalletSelector() {
    const context = (0, react_1.useContext)(WalletSelectorContext);
    if (!context) {
        throw new Error('useWalletSelector must be used inside WalletSelectorProvider');
    }
    return context;
}
exports.useWalletSelector = useWalletSelector;
//# sourceMappingURL=WalletSelectorProvider.js.map