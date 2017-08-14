const request = require('request');

function cong (soA, soB){
    return new Promise((resolve, reject) => {
        const isTypeOk = typeof soA !=='number' || typeof soB !== 'number';
        if(isTypeOk) return reject(new Error('Tham so phai la kieu number'));
        const url = `http://localhost:3000/tinh/CONG/${soA}/${soB}`;
        request(url,(err, response, data)=>{
            resolve(data);
        });
    });
}

function nhan(soA, soB) {
    return new Promise((resolve, reject)=>{
        const isTypeOk = typeof soA !=='number' || typeof soB !== 'number';
        if(isTypeOk) return reject(new Error('Tham so phai la kieu number'));
    
        const url = `http://localhost:3000/tinh/NHAN/${soA}/${soB}`;
        request(url,(err, response, data)=>{
            resolve(data);
        });
    });
}

function chia(soA, soB) {
    return new Promise((resolve, reject)=>{
        const isTypeOk = typeof soA !=='number' || typeof soB !== 'number';
        if(isTypeOk) return reject(new Error('Tham so phai la kieu number'));
    
        if(soB === 0) return reject(new Error('Khong the chia cho 0'));
    
        const url = `http://localhost:3000/tinh/CHIA/${soA}/${soB}`;
        request(url,(err, response, data)=>{
            resolve(data);
        });
    })
}

//co the truyen cao callback
// function dienTichHinhThang(a, b, h, cb) { 
//     cong(a, b)
//     .then(tong => nhan(+tong, h))
//     .then(tich => chia(+tich, 2))
//     .then(kq => cb(kq))
//     .catch(err => console.log(err));
// }

function dienTichHinhThang(a, b, h) {
    return cong(a, b)
    .then(tong => nhan(+tong, h))
    .then(tich => chia(+tich, 2));
}

dienTichHinhThang(5,10,2)
.then(kq => console.log(kq))