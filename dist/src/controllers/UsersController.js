"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, birthday, date, currentMonth, currentDay, trx, emailExist;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(request.body);
                        return [4 /*yield*/, request.body];
                    case 1:
                        _a = _b.sent(), email = _a.email, birthday = _a.birthday;
                        date = new Date();
                        currentMonth = date.getMonth() + 1;
                        currentDay = date.getDate();
                        request.body.create_at = "" + date.toISOString();
                        console.log(request.body.create_at);
                        if (birthday != '') {
                            if (currentMonth > birthday.split('-')[1]) {
                                request.body.age = "" + (date.getFullYear() - birthday.split('-')[0]);
                            }
                            else if (currentMonth == birthday.split('-')[1]) {
                                if (currentDay >= birthday.split('-')[2]) {
                                    request.body.age = "" + (date.getFullYear() - birthday.split('-')[0]);
                                }
                                else {
                                    request.body.age = "" + ((date.getFullYear() - birthday.split('-')[0]) - 1);
                                }
                            }
                            else {
                                request.body.age = "" + ((date.getFullYear() - birthday.split('-')[0]) - 1);
                            }
                        }
                        return [4 /*yield*/, connection_1.default.transaction()];
                    case 2:
                        trx = _b.sent();
                        return [4 /*yield*/, trx('users').where('email', email).first()];
                    case 3:
                        emailExist = _b.sent();
                        if (!(emailExist && email != '')) return [3 /*break*/, 5];
                        return [4 /*yield*/, trx.rollback()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, response.status(400).json({ status: 400, msg: 'Email já cadastrado!' })];
                    case 5: return [4 /*yield*/, trx('users').insert(request.body)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, trx.commit()];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, response.status(200).json({ status: 200, msg: 'Cadastro realizado com sucesso!' })];
                }
            });
        });
    };
    Users.prototype.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var allUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection_1.default.select('users.*')];
                    case 1:
                        allUsers = _a.sent();
                        return [2 /*return*/, response.json(allUsers)];
                }
            });
        });
    };
    return Users;
}());
exports.default = Users;
