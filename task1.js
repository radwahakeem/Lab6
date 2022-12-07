/* function box(width,height,books=[])
{
  
    this.width=width; 
   this.height=height;
   this.books=books;
   box.prototype.valueOf = function() {
    var sum_all_Pages = 0;
for (var i = 0; i <  Box.books.length; i++) {
    console.log(Box.books[i])
    sum_all_Pages= sum_all_Pages + Box.books[i].num_pages;
}
return sum_all_Pages;
  };
}
function book(id,name,writer_name,num_pages)
{
    this.id=id; 
   this.name=name;
   this.writer_name=writer_name;
   this.num_pages=num_pages;
}

var book1 = new book(1,"PHP","Peter",100);
var book2 = new book(2,"JAVASCRIP","David",400);
var book3 = new book(3,"C++","Scott",300);
var book4 = new book(4,"C","Alex",200);

var Book=[book1,book2,book3,book4];
var Box=new box(100,200,Book);
var Area = Box.width * Box.height;
console.log(Box)




document.write(Box.valueOf());
document.write("\n");
document.write(Area);




 */