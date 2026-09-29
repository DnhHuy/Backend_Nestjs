"use strict";
// Định nghÆa v ̃ à export một lớp tên là product .
// Lớp này gồm 3 thuộc tính công khai ( public ):
// id : kiêủ string (Mã sản phâm) ̉
// name : kiêủ string (Tên sản phâm) ̉
// price : kiêủ number (Giá tiên) ̀
// Viêt hàm kh ́ ởi tạo constructor đê gán giá trị cho 3 thu ̉ ộc tính này khi khởi tạo một đối
// tượng sản phâm m ̉ ới.
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
class product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
exports.product = product;
//# sourceMappingURL=product.js.map