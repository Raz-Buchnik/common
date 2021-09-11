"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRouter = void 0;
var express_1 = __importDefault(require("express"));
var notFoundRouter = express_1.default.Router();
exports.notFoundRouter = notFoundRouter;
notFoundRouter.use(function (req, res) {
    res.status(404).send('not found');
});
