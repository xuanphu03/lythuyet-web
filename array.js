//Array.isArray(): Hàm kiểm tra có phải là mảng hay không. Hàm trả về true or false
var languages = ['Javascript', 'PHP', 'Ruby'];
var number = 10;

console.log(Array.isArray(languages)) //true
console.log(Array.isArray(number)) //false

//toString()  Chuyển dữ liệu array thành string. Mặc định thêm dấu ,
var languages = ['Javascript', 'PHP', 'Ruby'];

console.log(languages.toString()) //Javascript,PHP,Ruby 

//join() Chuyển dữ liệu array thành string nhưng có thể thay đổi ngăn cách
var languages = ['Javascript', 'PHP', 'Ruby'];

console.log(languages.join()) //Javascript,PHP,Ruby 
console.log(languages.join(' ')) //Javascript PHP Ruby 
console.log(languages.join('-')) //Javascript-PHP-Ruby 

