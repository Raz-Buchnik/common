"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsRouter = void 0;
var express_1 = __importDefault(require("express"));
var errorsRouter = express_1.default.Router();
exports.errorsRouter = errorsRouter;
errorsRouter.use(function (err, req, res, next) {
    if (err) {
        console.log("[err]:", err);
        return res.send('error');
    }
    next();
});
