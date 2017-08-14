const request = require('request');

function cong(soA, soB, cb) {
    const isTypeOk = typeof soA !=='number' || typeof soB !== 'number';
    if(isTypeOk) return cb(new Error('Tham so phai la kieu number'));

    const url = `http://localhost:3000/tinh/CONG/${soA}/${soB}`;
    request(url,(err, response, data)=>{
        cb(err, data);
    });
}

function nhan(soA, soB, cb) {
    const isTypeOk = typeof soA !=='number' || typeof soB !== 'number';
    if(isTypeOk) return cb(new Error('Tham so phai la kieu number'));

    const url = `http://localhost:3000/tinh/NHAN/${soA}/${soB}`;
    request(url,(err, response, data)=>{
        cb(err, data);
    });
}

function chia(soA, soB, cb) {
    const isTypeOk = typeof soA !=='number' || typeof soB !== 'number';
    if(isTypeOk) return cb(new Error('Tham so phai la kieu number'));

    if(soB === 0) return new Error('Khong the chia cho 0');

    const url = `http://localhost:3000/tinh/CHIA/${soA}/${soB}`;
    request(url,(err, response, data)=>{
        cb(err, data);
    });
}

function tinhDienTichHT(a, b, h, cb) {
    cong(a, b, (err, res)=>{
        if(err) return cb(err);
        nhan(+res, h, (err, res)=>{
            if(err) return cb(err);
            chia(+res, 2, (err, dientich)=>{
                if(err) return cb(err);
                cb(dientich);
            });
        });
    });
}

tinhDienTichHT(10, 5, 2, (err, square)=>{
    if(err) return console.log(err);
    console.log(square);
})