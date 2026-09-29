// Bài 1: Tính tổng các số trong mảng
// Viết một hàm nhận vào một mảng số và trả về tổng các phần tử trong mảng. Gợi ý: Sử
// dụng vòng lặp for hoặc phương thức reduce().
// function sumArray(arr) {
// // Implement here
// }
// console.log(sumArray([1, 2, 3, 4])); // 10
const a = [1, 2, 3, 4];
function sumArray(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}
console.log("Tổng các số trong mảng là: ");
console.log(sumArray(a));

// Bài 2: Tìm số lớn nhất trong mảng
// Viết một hàm để tìm giá trị lớn nhất trong mảng số. Gợi ý: Sử dụng vòng lặp hoặc
// phương thức Math.max().

// function findMax(arr) {
//   // Implement here
// }
// console.log(findMax([10, 20, 30, 5])); // 30

const b = [10, 20, 30, 5];
function findMax(b) {
  let max = b[0];
  for (let i = 1; i < b.length; i++) {
    if (b[i] > max) {
      max = b[i];
    }
  }
  return max;
}
console.log("Số lớn nhất trong mảng là: ");
console.log(findMax(b));

// Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng
// đầu vào. Gợi ý: Sử dụng phương thức filter().

// function filterEvenNumbers(arr) {
// // Implement here
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

const c = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(c) {
  return c.filter((num) => num % 2 === 0);
}
console.log("Các số chẵn trong mảng là: ");
console.log(filterEvenNumbers(c));

// Bài 4: Đếm số lần xuất hiện của một phần tử
// Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng
// vòng lặp hoặc phương thức reduce().

// function countOccurrences(arr, value) {
// // Implement here
// }
// console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3

const d = [1, 2, 3, 2, 1, 2];
function countOccurrences(d, value) {
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] === value) {
      count++;
    }
  }
  return count;
}
console.log("Số lần xuất hiện của phần tử 2 trong mảng là: ");
console.log(countOccurrences(d, 2));

// Bài 5: Đảo ngược mảng
// Viết một hàm để đảo ngược thứ tự các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp
// hoặc phương thức reverse().

// function reverseArray(arr) {
// // Implement here
// }
// console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

const e = [1, 2, 3, 4];
function reverseArray(e) {
  let reversed = [];
  for (let i = e.length - 1; i >= 0; i--) {
    reversed.push(e[i]);
  }
  return reversed;
}
console.log("Mảng sau khi đảo ngược là: ");
console.log(reverseArray(e));

// Bài 6: Loại bỏ phần tử trùng lặp
// Viết một hàm để loại bỏ các phần tử trùng lặp trong mảng. Gợi ý: Sử dụng Set hoặc
// vòng lặp.

// function removeDuplicates(arr) {
// // Implement here
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

const f = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(f) {
  return [...new Set(f)];
}
console.log("Mảng sau khi loại bỏ phần tử trùng lặp là: ");
console.log(removeDuplicates(f));

// Bài 7: Sắp xếp mảng tăng dần
// Viết một hàm để sắp xếp mảng số theo thứ tự tăng dần. Gợi ý: Sử dụng phương thức
// sort().

// function sortArrayAscending(arr) {
// // Implement here
// }
// console.log(sortArrayAscending([5, 2, 9, 1])); // [1, 2, 5, 9]

const g = [5, 2, 9, 1];
function sortArrayAscending(g) {
  return g.sort((a, b) => a - b);
}
console.log("Mảng sau khi sắp xếp tăng dần là: ");
console.log(sortArrayAscending(g));

// Bài 8: Tìm phần tử xuất hiện nhiều nhất
// Viết một hàm để tìm phần tử xuất hiện nhiều nhất trong mảng. Gợi ý: Sử dụng đối
// tượng (object) để lưu tần suất.

// function findMostFrequent(arr) {
// // Implement here
// }
// console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2

const h = [1, 2, 3, 2, 1, 2];
function findMostFrequent(h) {
  const Dem = {};
  let maxCount = 0;
  let mostFrequent;

  for (let i = 0; i < h.length; i++) {
    const Ptu = h[i];
    Dem[Ptu] = (Dem[Ptu] || 0) + 1;
    if (Dem[Ptu] > maxCount) {
      maxCount = Dem[Ptu];
      mostFrequent = Ptu;
    }
  }

  return mostFrequent;
}
console.log("Phần tử xuất hiện nhiều nhất trong mảng là: ");
console.log(findMostFrequent(h));

// Bài 9: Gộp hai mảng và loại bỏ trùng lặp
// Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp.
// Gợi ý: Sử dụng Set hoặc vòng lặp.

// function mergeAndRemoveDuplicates(arr1, arr2) {
// // Implement here
// }
// console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

function mergeAndRemoveDuplicates(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log("Mảng sau khi gộp và loại bỏ trùng lặp là: ");
console.log(mergeAndRemoveDuplicates(arr1, arr2));

// Bài 10: Kiểm tra mảng đối xứng
// Viết một hàm để kiểm tra xem mảng có phải là đối xứng hay không (phần tử đầu bằng phần
// tử cuối, phần tử thứ hai bằng phần tử áp cuối,...). Gợi ý: Sử dụng vòng lặp hoặc so sánh từng
// cặp phần tử.

// function isSymmetricArray(arr) {
// // Implement here
// }
// console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
// console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false

const i = [1, 2, 3, 2, 1];
const j = [1, 2, 3, 4, 5];
function Doixung(i) {
  const len = i.length;
  for (let j = 0; j < len / 2; j++) {
    if (i[j] !== i[len - 1 - j]) {
      return false;
    }
  }
  return true;
}
console.log("Mảng có phải là đối xứng không? ");
console.log(Doixung(i));
console.log(Doixung(j));
