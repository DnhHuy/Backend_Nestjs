// import lớp product và lớp cart vào file này.
// Thực hiện các bước test logic sau:
// 1. Khởi tạo ít nhât 3 sản ph ́ âm khác nhau ( ̉ Ví dụ: iPhone giá 1000, Tai nghe giá 100,
// Ốp lưng giá 20).
// 2. Khởi tạo 1 thực thê giỏ hàng t ̉ ừ lớp cart .
// 3. Gọi hàm addToCart đê thêm các sản ph ̉ âm tr ̉ ên vào giỏ với số lượng tùy ý.
// 4. Thử gọi lại hàm addToCart một lần nữa với một sản phâm̉ đã có sẵn đê ki ̉ êm tr ̉ a
// tính năng cộng dồn số lượng.
// 5. Dùng console.log() gọi hàm getTotalPrice() đê in r ̉ a tổng số tiên cu ̀ ối cùng của giỏ
// hàng và kiêm tr ̉ a xem tính toán chính xác chưa

import { product } from "./product";
import { cart } from "./cart";

const product1 = new product("1", "Lê", 72);
const product2 = new product("2", "Mận", 80);
const product3 = new product("3", "Hoa", 94);

const shoppingCart = new cart();

shoppingCart.addToCart(product1, 83);
shoppingCart.addToCart(product2, 67);
shoppingCart.addToCart(product3, 99);
shoppingCart.addToCart(product1, 17);

console.log("Tổng tiền:", shoppingCart.getTotalPrice());
