CREATE DATABASE my_Database;

use my_Database;

DROP TABLE IF EXISTS students;

CREATE TABLE students (
	Student_id INT PRIMARY KEY,
	Ten VARCHAR(100),
	Tuoi INT,
	Nghanh VARCHAR(50)
);

SELECT * FROM students;

INSERT INTO students (Student_id, Ten, Tuoi, Nghanh)
VALUES
(1, 'Tran Minh Quan', 19, 'Cong nghệ thông tin'),
(2, 'Pham Thi Mai', 20, 'Quan trị kinh doanh'),
(3, 'Hoang Van Duc', 18, 'Kỹ thuật điện tử viễn thông'),
(4, 'Vuong Thuy Linh', 21, 'Ngôn ngữ Anh'),
(5, 'Dang Hoang Nam', 18, 'Kế toán'),
(6, 'Bui Thi Ha', 20, 'Tài chính - Ngân hàng'),
(7, 'Ngo Quang Huy', 22, 'Kỹ thuật cơ khí'),
(8, 'Doan Thi Phuong', 19, 'Y đa khoa'),
(9, 'Trinh Gia Bao', 18, 'Marketing'),
(10, 'Phan Thanh Tung', 21, 'Luật kinh tế');

DELETE FROM students WHERE Student_id = 5;
DELETE FROM students WHERE Student_id = 8;



INSERT INTO students (Student_id, Ten, Tuoi, Nghanh)
VALUES
(11, 'Le Hoang Long', 22, 'Hệ thống thông tin'),
(12, 'Nguyen Thi Thao', 20, 'Kỹ thuật phần mềm');

UPDATE my_Database.students s SET Tuoi = 18, Ten = 'Nguyen van A' WHERE s.Student_id = 5;
UPDATE my_Database.students s SET Nghanh = 'Điều dưỡng' WHERE s.Student_id = 10;

SELECT * FROM students;
