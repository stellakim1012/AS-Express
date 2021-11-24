"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const router = express_1.default.Router();
const dbc = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql1234',
    database: 'gunpladb'
});
dbc.connect();
router.get('/mechanic', (req, res) => {
    const query = 'select * from mechanic';
    dbc.query(query, (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
router.get('/gunpla', (req, res) => {
    const query = 'select * from gunpla';
    dbc.query(query, (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
router.get('/image', (req, res) => {
    const query = 'select * from image';
    dbc.query(query, (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
router.get('/select', (req, res) => {
    // NOTE: template literal 사용시 backticks ` (grave accents) 사용. (따옴표 아님 주의)
    //       키보드 esc 아래, ~ (Shift 안 누르고 입력), 1 왼쪽
    // 예제 http://localhost:8080/select?id=1
    const query = `select * from mechanic where id = ${req.query.id}`;
    dbc.query(query, (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
router.get('/select_id', (req, res) => {
    const query = "select * from mechanic where id = ?";
    dbc.query(query, [req.query.id], (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
router.get('/gunpla/:id', (req, res) => {
    const query = "select * from gunpla where id = ?";
    dbc.query(query, [req.params.id], (err, rows) => {
        if (err)
            throw err;
        res.send(rows);
    });
});
router.post('/mechanic/', (req, res) => {
    const query = "insert into mechanic values (?)";
    const mechanic = [
        req.body.id,
        req.body.name,
        req.body.model,
        req.body.manufacturer,
        req.body.armor,
        req.body.height,
        req.body.weight
    ];
    dbc.query(query, [mechanic], (err, rows) => {
        if (err)
            throw err;
        res.json({
            status: 200,
            message: "Success: Add new mechanic"
        });
    });
});
exports.default = router;
