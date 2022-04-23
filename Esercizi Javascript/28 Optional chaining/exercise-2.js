const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

if (!order.customer?.address?.city) {
  console.log('City is required')
}