"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUserAgent = void 0;
const ua_json_1 = __importDefault(require("../data/ua.json"));
class CommonUserAgent {
    static getRandom() {
        const randomIndex = Math.floor(Math.random() * ua_json_1.default.length);
        return ua_json_1.default[randomIndex].ua;
    }
}
exports.CommonUserAgent = CommonUserAgent;
//# sourceMappingURL=common-user-agent.js.map