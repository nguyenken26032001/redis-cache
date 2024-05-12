# mục đích: Test chức năng cache dữ liệu của redis

# triển khai:

# 1 cấu trúc ứng dụng:

# SERVER

# file app.js:

# - import các module, thư viện để khởi tạo server

# - sử dụng các middleware để định nghĩa respose data của server

# - set default endpoint /api cho server

# - import module redisService để connect tới redis server

# - start server

# ROUTER

# file index.router.js

# - định nghĩa router từ express

# - import các subRouter

# - sử dụng middleware để định nghĩa endpoint cho subRouter

# vd: const userRouter = require("./apiRouter/userRouter");

# router.use("/user", userRouter);

# file userRouter.js

# - nơi chứa các detail endpoint của endpoint /user đi vào

# - ở đây định nghĩa các method của endpoint /api/user

# - từ các method sẽ require vào các controller phù hợp để xử lý logic và response data

# MIDDLEWARE

# - là function đứng sau trước controller để handel dữ liệu hoặc reject request trước khi vào controller xử lý

# file redis.middleware.js

# - là file kiểm tra key trong redis --> nếu có key thì response ngay data cho user, ngược lại nếu không có data trong redis thì middleware này sẽ chuyển tiếp request tới controller để xử lý và response data cho user

# SERVICE

# redis.service.js

# - là file config, connect và khởi tạo instance redis cho ứng dụng

# có thể được import vào nhiều file khác nhau cho tiện

# HELPERS

# file keyRedis.js

# - là function chứa logic set key cho redis

# những thứ cần setup

# 1 cài đặt thư viện express

# 2 run docker container redis
