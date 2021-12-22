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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Typography_1 = __importDefault(require("./Typography"));
const theme_1 = require("./theme");
function TopNavItemView({ item, onClick }) {
    const styles = useStyles();
    const onPress = (0, react_1.useCallback)(() => onClick(item.id), [item, onClick]);
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, activeOpacity: 0.8, style: styles.item },
        react_1.default.createElement(Typography_1.default, { type: "small-button" }, item.label)));
}
function TopNav({ items, onClick, infoComponent }) {
    const styles = useStyles();
    const clickItem = (0, react_1.useCallback)((id) => {
        if (onClick) {
            onClick(id);
        }
    }, [onClick]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.brandContainer }),
        react_1.default.createElement(react_native_1.View, { style: styles.itemContainer }, items.map(i => (react_1.default.createElement(TopNavItemView, { key: i.id, item: i, onClick: clickItem })))),
        react_1.default.createElement(react_native_1.View, { style: styles.infoContainer }, infoComponent)));
}
exports.default = TopNav;
const useStyles = (0, theme_1.createStyles)(theme => ({
    container: {
        height: 61,
        borderBottomColor: theme.colors.onSurface,
        borderBottomWidth: 1,
        padding: 11,
        flexDirection: 'row',
    },
    brandContainer: {
        width: 100,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        padding: 4,
        alignItems: 'center',
    },
    item: {
        marginRight: 16,
    },
    infoContainer: {
        alignSelf: 'flex-end',
    },
}));
//# sourceMappingURL=TopNav.js.map