-- Bài 1: Tạo và thao tác với bảng
-- Tạo một bảng Employees với các cột:
-- - EmployeeID (INT, khóa chính)
-- - Name (VARCHAR(100))
-- - Age (INT)
-- - Department (VARCHAR(50))
-- - Salary (DECIMAL(10, 2))
-- Thực hiện các thao tác:
-- - Thêm 5 nhân viên với thông tin bất kỳ.
-- - Lấy tất cả thông tin của nhân viên thuộc phòng ban "IT".
-- - Cập nhật lương của nhân viên có EmployeeID = 2 thành 8,500.00.
-- - Xóa nhân viên có EmployeeID = 4.

Create database Company;
use Company;

Create table Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Department VARCHAR(50),
    Salary DECIMAL(10, 2)
);

Insert into Employees (EmployeeID, Name, Age, Department, Salary)
Values
(1, 'Nguyen Van A', 23, 'IT', 3423.00),
(2, 'Tran Thi V', 30, 'Sales', 5000.00),
(3, 'Le Van C', 28, 'Sales', 4500.00),
(4, 'Pham Thi S', 35, 'IT', 6000.00),
(5, 'Hoang Van I', 40, 'Marketing', 5500.00),
(6, 'Nguyen Van B', 29, 'IT', 4800.00),
(7, 'Tran Van D', 32, 'Sales', 5200.00);

Select *
from Employees
where Department = 'IT';

Update Employees
Set Salary = 8500.00
where EmployeeID = 2;

Delete from Employees
where EmployeeID = 4;

-- Tạo bảng Sales với các cột:
-- - SaleID (INT, khóa chính)
-- - EmployeeID (INT, khóa ngoại tham chiếu đến bảng Employees.EmployeeID)
-- - SaleAmount (DECIMAL(10, 2))
-- - SaleDate (DATE)
-- Thêm dữ liệu giả lập:
-- - 5 bản ghi bán hàng với EmployeeID trùng khớp bảng Employees.
-- Thực hiện các truy vấn:
-- - Tính tổng doanh thu từ tất cả các giao dịch.
-- - Tìm doanh thu trung bình của nhân viên trong phòng ban "Sales".
-- - Liệt kê tất cả các nhân viên chưa thực hiện giao dịch bán hàng.

Create table Sales (
    SaleID INT PRIMARY KEY,
    EmployeeID INT,
    SaleAmount DECIMAL(10, 2),
    SaleDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

Insert into Sales (SaleID, EmployeeID, SaleAmount, SaleDate)
Values
(1, 2, 1500.00, '2026-08-15'),
(2, 2, 2300.00, '2026-08-20'),
(3, 7, 3100.00, '2026-08-10'),
(4, 7, 2500.00, '2026-08-05'),
(5, 2, 3100.00, '2026-08-12');

Select SUM(SaleAmount) as Total
from Sales;

Select AVG(SaleAmount) as Avg
from Sales s
Join Employees e on s.EmployeeID = e.EmployeeID
where e.Department = 'Sales';

Select *
from Employees e
where e.EmployeeID not in (Select EmployeeID from Sales);

-- Bài 3: Thao tác với khóa ngoại và JOIN
-- Tạo bảng Projects với các cột:
-- - ProjectID (INT, khóa chính)
-- - ProjectName (VARCHAR(100))
-- - Department (VARCHAR(50))
-- Tạo bảng Assignments với các cột:
-- - AssignmentID (INT, khóa chính)
-- - EmployeeID (INT, khóa ngoại tham chiếu Employees.EmployeeID)
-- - ProjectID (INT, khóa ngoại tham chiếu Projects.ProjectID)
-- Thêm dữ liệu:
-- - 3 dự án cho bảng Projects.
-- - 5 bản ghi vào bảng Assignments.
-- Thực hiện các truy vấn:
-- - Lấy danh sách nhân viên và dự án mà họ tham gia.
-- - Liệt kê các nhân viên không tham gia dự án nào.
-- - Tìm số lượng nhân viên trong mỗi dự án.

Create table Projects (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(100),
    Department VARCHAR(50)
);

Insert into Projects (ProjectID, ProjectName, Department)
Values
(1, 'Web', 'IT'),
(2, 'Training', 'Sales'),
(3, 'Product Launch', 'Marketing');

Create table Assignments (
    AssignmentID INT PRIMARY KEY,
    EmployeeID INT,
    ProjectID INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);

Insert into Assignments (AssignmentID, EmployeeID, ProjectID)
Values  
(1, 1, 1),
(2, 2, 2),
(3, 3, 2),
(4, 4, 3),
(5, 6, 1);

Select e.Name, p.ProjectName
from Employees e
join Assignments a on e.EmployeeID = a.EmployeeID
join Projects p on a.ProjectID = p.ProjectID;

select *
from Employees e
where e.EmployeeID not in (Select EmployeeID from Assignments);

Select p.ProjectName, COUNT(a.EmployeeID) as ECount
from Projects p
left join Assignments a on p.ProjectID = a.ProjectID
group by p.ProjectName;

-- Bài 4: Sắp xếp và lọc dữ liệu
-- Với bảng Employees, thực hiện:
-- - Lấy thông tin nhân viên có lương cao nhất.
-- - Lấy danh sách nhân viên thuộc phòng ban "HR" sắp xếp theo tuổi giảm dần.
-- - Tìm nhân viên có lương nằm trong khoảng từ 5,000.00 đến 10,000.00.
-- Với bảng Sales, thực hiện:
-- - Lấy 3 giao dịch có giá trị cao nhất.
-- - Tìm tất cả các giao dịch được thực hiện trong tháng hiện tại.

Select *
from Employees
order by Salary desc
limit 1;

Select *
from Employees
where Department = 'HR'
order by Age desc;

Select *
from Employees
where Salary between 5000.00 and 10000.00;

Select *
from Sales
order by SaleAmount desc
limit 3;

Select *
from Sales
where MONTH(SaleDate) = MONTH(CURRENT_DATE())
  and YEAR(SaleDate) = YEAR(CURRENT_DATE());