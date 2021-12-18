"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
function useIsMoWeb() {
    const { width } = react_native_1.Dimensions.get('window');
    return width <= 600;
}
exports.default = useIsMoWeb;
//# sourceMappingURL=useIsMoWeb.js.map