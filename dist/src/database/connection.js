"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knexfile_1 = __importDefault(require("../../knexfile"));
var knex_db = process.env.DB == 'local'
    ? 'development'
    : 'production';
exports.default = knex_1.default(knexfile_1.default[knex_db]);
