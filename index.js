const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

const dataSource = [
  { id: 1, name: 'iphone' },
  { id: 2, name: 'samsung' },
  { id: 3, name: 'ipad' }
];


// config
app.use(cors());
app.use(express.json({ extend: true }));
app.use(express.urlencoded({ extended: true }))

// GET all list products:
// GET -> localhost:3000/api/product
app.get('/api/product', (_, response) => {
  const products = [...dataSource];
  
  response.status(200).json({
    data: products,
    msg: 'Get successfully',
    isSuccess: true
  })
})

// GET one products:
// GET -> localhost:3000/api/product/1
app.get('/api/product/:id', (request, response) => {
  const { id } = request.params;
  const product = dataSource.find(product => product.id.toString() === id);
  console.log('product: ', product)

  if(!product) {
    response.status(404).json({
      data: null,
      isSuccess: false,
      msg: 'Not found'
    })
    return;
  }
  response.status(200).json({
    data: product,
    msg: 'Get successfully',
    isSuccess: true
  })
})

// Creat product:
// POST -> localhost:3000/api/product
// body data: { name: xxx }
app.post('/api/product', (request, response) => {
  const bodyData = request.body.data;

  if(!bodyData) {
    response.status(400).json({
      data: null,
      isSuccess: false,
      msg: 'Please send JSON Object Name'
    })
    return;
  }

  const product = {
    id: Date.now(),
    name: bodyData.name
  }

  dataSource.push(product);
  response.status(200).json({
    data: dataSource,
    msg: 'Create successfully',
    isSuccess: true
  })

});

// Update product:
// PUT -> localhost:3000/api/product/1
// body data: { name: xxx }
app.put('/api/product/:id', (request, response) => {
  const { id } = request.params;
  const name = request.body.data.name;

  if(!name) {
    response.status(400).json({
      data: null,
      isSuccess: false,
      msg: 'Name is required'
    })
    return;
  }

  const productIndex = dataSource.findIndex(product => product.id.toString() === id);
  console.log('response: ', request.body)

  if(productIndex < 0) {
    response.status(404).json({
      data: null,
      isSuccess: false,
      msg: 'Not found'
    })
    return;
  }

  dataSource[productIndex].name = request.body.data.name;

  response.status(200).json({
    data: dataSource,
    msg: 'Update successfully',
    isSuccess: true
  })
})

// Delete product:
// DELETE -> localhost:3000/api/product/1
app.delete('/api/product/:id', (request, response) => {
  const { id } = request.params;
  const productIndex = dataSource.findIndex(product => product.id.toString() === id);

  if(productIndex < 0) {
    response.status(400).json({
      data: null,
      msg: 'No found',
      isSuccess: false
    })
    return;
  }

  dataSource.splice(productIndex, 1);
  response.status(200).json({
    data: dataSource,
    msg: 'Delete successfully',
    isSuccess: true
  })
})


app.listen(port, () => {
  console.log(`Run localhost:${port}`)
})