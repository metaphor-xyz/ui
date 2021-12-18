"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyles = void 0;
const react_native_paper_1 = require("react-native-paper");
const createStyles = (styles) => {
    return () => {
        const theme = (0, react_native_paper_1.useTheme)();
        return styles(theme);
    };
};
exports.createStyles = createStyles;
//# sourceMappingURL=theme.js.map