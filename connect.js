const sql = require('mssql');

// Cấu hình kết nối
const config = {
    server: 'localhost', // hoặc tên server, ví dụ: DESKTOP-251HPIA
    database: 'shopgiay', // Tên cơ sở dữ liệu
    options: {
        encrypt: false, // Nếu không sử dụng SSL
        trustServerCertificate: true // Bỏ qua chứng chỉ (tùy chọn)
    },
    authentication: {
        type: 'ntlm', // Sử dụng Windows Authentication
        options: {
            domain: '', // Để trống nếu không thuộc domain
            userName: '', // Để trống để dùng tài khoản Windows hiện tại
            password: '' // Không cần mật khẩu
        }
    }
};

// Kết nối đến SQL Server
sql.connect(config)
    .then(pool => {
        console.log('Kết nối thành công!');
        return pool.request().query('SELECT * FROM test'); // Thực thi query
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error('Lỗi kết nối:', err);
    });
