// Sử dụng từ khóa import đê l ̉ ây l ́ ớp product từ file product.ts .
// Định nghÆa v ̃ à export một lớp tên là cart .
// Thuộc tính:
// Tạo một thuộc tính ân̉ private items: { product: product; quantity: number }[] = [];
// Giải thích: Đây là một mảng chứa các đối tượng. Mỗi đối tượng đại diện cho một
// dòng hàng trong giỏ, gồm thông tin sản phâm ( ̉ product ) và số lượng mua( quantity ). Mặc định ban đầu là mảng rỗng.
// Phương thức (Methods):
// addToCart(product: product, quantity: number): void
// Thêm sản phâm v ̉ à số lượng tương ứng vào mảng items .
// Logic nâng cao một chút: Kiêm tr ̉ a xem sản phâm̉ đó đã tồn tại trong giỏ
// hàng chưa (dựa vào id ). Nêú đã có, hãy cộng dồn số lượng ( quantity ) mới
// vào số lượng cũ chứ không thêm phần tử mới. Nêu ch ́ ưa có, tiên hành thêm ́
// mới phần tử vào mảng.
// getTotalPrice(): number
// Duyệt qua toàn bộ mảng items .
// Tính tổng số tiên của t ̀ oàn bộ giỏ hàng theo công thức: Tổ ng tiề n = Σ (Giá
// sả n phẩ m * Số lượng) .
// Trả vê k ̀ êt quả là m ́ ột số ( number ).

import { product } from "./product";

export class cart {
  private items: { product: product; quantity: number }[] = [];

  constructor() {}

  addToCart(product: product, quantity: number): void {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id,
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  getTotalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }
}
