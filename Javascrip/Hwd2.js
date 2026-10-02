// Viết một chương trình quản lý danh sách sản phẩm với các chức năng:
// - Thêm sản phẩm mới vào danh sách.
// - Hiển thị danh sách sản phẩm.
// - Tìm kiếm sản phẩm theo tên.
// - Tính tổng giá trị các sản phẩm.
let products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];
//Thêm sản phẩm mới vào danh sách
products.push({ name: "Headphones", price: 2438 });
products.unshift({ name: "Smartwatch", price: 342 });
//Hiển thị danh sách sản phẩm
console.log("Danh sách sản phẩm:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - ${product.price}`);
});
//Tìm kiếm sản phẩm theo tên
const searchproduct = products.find((x) => x.name === "Laptop");
if (searchproduct) {
  console.log(
    `Sản phẩm tìm thấy: ${searchproduct.name} - ${searchproduct.price}`,
  );
} else {
  console.log("Không tìm thấy sản phẩm.");
}
//Tính tổng giá trị các sản phẩm - Duyệt mảng
console.log("Tổng giá trị sản phẩm:");
let totalValue = 0;
products.forEach((product) => {
  totalValue += Number(product.price);
});
console.log(`${totalValue}`);

// Bài 1: Đếm số user đang hoạt động;
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];
const activeus = users.filter((x) => x.active === true);
console.log(`Số user đang hoạt động: ${activeus.length}`);

// /**
//  *  Bài 2: Lấy tên từ danh sách user
//  * [
//     {name: "An", age: 20},
//     {name: "Bình", age: 25}
//    ]
//     → ["An", "Bình"]
//  */

const userList = [
  { name: "An", age: 20 },
  { name: "Bình", age: 25 },
];
userList.forEach((user) => {
  console.log(user.name);
});
const names = userList.map((user) => user.name);
console.log(names);

/**
 * Bài 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */

const numbers = [2, -5, 6, -7, -4, 7, -1, -1];
let T = 0;
numbers.forEach((x) => {
  if (x < 0) {
    T += Number(x);
  }
});
let TBC = T / numbers.filter((x) => x < 0).length;
console.log(`Trung bình cộng số âm: ${TBC}`);
numbers.forEach((x) => {
  if (x < 0 && x > TBC) {
    console.log(`Số âm lớn hơn trung bình cộng: ${x}`);
  }
});
let maxA = -100;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0 && numbers[i] > maxA) {
    maxA = numbers[i];
  }
}
console.log(`Số âm lớn nhất: ${maxA}`);

// Bài 4: Đếm số đơn hàng theo trạng thái
// const orders = [
//     { status: "pending" },
//     { status: "completed" },
//     { status: "pending" },
//     { status: "cancelled" }
// ];
// kết quả: {
//     pending: 2,
//     completed: 1,
//     cancelled: 1
// }

const orders1 = [
  { status: "pending" },
  { status: "completed" },
  { status: "pending" },
  { status: "cancelled" },
];

let pendingCount = 0;
let completedCount = 0;
let cancelledCount = 0;
orders1.forEach((order) => {
  if (order.status === "pending") {
    pendingCount++;
  } else if (order.status === "completed") {
    completedCount++;
  } else if (order.status === "cancelled") {
    cancelledCount++;
  }
});
console.log(`Số đơn hàng theo trạng thái:
Pending: ${pendingCount},
Completed: ${completedCount},
Cancelled: ${cancelledCount}`);

// Bài 5: Tìm đơn hàng có giá trị cao nhất

// const orders = [
//     { id: 1, total: 500 },
//     { id: 2, total: 1200 },
//     { id: 3, total: 800 }
// ];
// Kết quả: { id: 2, total: 1200 }

const orders2 = [
  { id: 1, total: 500 },
  { id: 2, total: 1200 },
  { id: 3, total: 800 },
];

let max = orders2[0];
orders2.forEach((order) => {
  if (order.total > max.total) {
    max = order;
  }
});
console.log(max);

/**
 * Bài 6: const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 }
];
- Lấy danh sách sản phẩm không trùng => ["Áo", "Giày", "Quần"]
- Tính tổng số lượng bán ra của từng sản phẩm
kết quả: 
        {
            Áo: 7,
            Giày: 1,
            Quần: 1
        }
- Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
 */

const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 },
];

// Lấy danh sách sản phẩm không trùng
const SP = [];
const seen = [];

for (let i = 0; i < sales.length; i++) {
  if (!seen.includes(sales[i].product)) {
    seen.push(sales[i].product);
    SP.push(sales[i].product);
  }
}
console.log(SP);
// Tính tổng số lượng bán ra của từng sản phẩm
let Ao = 0;
let Giay = 0;
let Quan = 0;
for (let i = 0; i < sales.length; i++) {
  if (sales[i].product === "Áo") {
    Ao += sales[i].qty;
  } else if (sales[i].product === "Giày") {
    Giay += sales[i].qty;
  } else if (sales[i].product === "Quần") {
    Quan += sales[i].qty;
  }
}
console.log(`Áo: ${Ao},
Giày: ${Giay},
Quần: ${Quan}`);
// Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
const Loc = sales
  .filter((sale) => sale.price * sale.qty > 200)
  .map((sale) => sale.user);
console.log(Loc);
