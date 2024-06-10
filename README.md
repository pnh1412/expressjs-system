# API
API url: /api/xxx
Domain: localhost:3000 -> hosting server vercel -> https:express-sysmtem

-> server: https:express-sysmtem/api/xxx

## Product
- GET -> Get all list products -> GET localhost:3000/api/product?page=1&limit=10
- GET one -> Get one product (product detail) -> GET localhost:3000/api/product/2
- POST -> Create new product -> POST localhost:3000/api/product { name: 'iphone' }
- PUT -> Update product -> PUT localhost:3000/api/product/3 { name: 'ipad' }
- DELETE -> delete product -> DELETE localhost:3000/api/product/3