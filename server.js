const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let orders = [];

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.emit('orders', orders);

  socket.on('updateOrder', (order) => {
    const existing = orders.find(o => o.id === order.id);
    if (existing) {
      existing.status = order.status;
    } else {
      orders.push(order);
    }
    io.emit('orders', orders);
  });

  socket.on('clearOrders', () => {
    orders = orders.filter(order => order.status !== 'bereit');
    io.emit('orders', orders);
  });
});

http.listen(3000, '0.0.0.0', () => {
  console.log('Server läuft im WLAN auf Port 3000');
});
