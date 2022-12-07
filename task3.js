 function course(id,name)
{
    this.id=id; 
    this.name=name;
    this.grade = 0;
}

function student(id,name,age,course=[])
{
    this.id=id; 
    this.name=name;
    this.age=age; 
    this.course=course;
}
var course1 = new course(1,"PHP");
var course2 = new course(2,"JAVASCRIP");
var course3 = new course(3,"C++");
var course4 = new course(4,"C");

courses=[course1,course2,course3,course4];

var student1 = new student(1,"peter",20,courses);

student.prototype.Display=function(){
    
    document.write("Student_Name :" + this.name);
    document.write(" <br>");
    document.write("Student_age :" + this.age);
    document.write("<br> ");
    document.write("Courses:" );
    document.write("<br> ");
    for(var i=0; i < this.course.length; i++){
        document.write(this.course[i].name)
        document.write("<br> ");
        document.write(this.course[i].grade)
    }
}


student.prototype.grade=function()
        {
            for(var i=0; i < this.course.length; i++){
                var c = parseInt(prompt("Enter grade : "+this.course[i].name))
                this.course[i].grade = c
            }
        }

/* student.prototype.sum_grade=function()
        {
            var sum = 0
            for(var i=0; i < this.course.length; i++){
                sum += this.course[i].grade            }
            return sum
        } */

student1.Display();
student1.grade();
