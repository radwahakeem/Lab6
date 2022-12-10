 function student (courses){

    this.courses=courses



    student.prototype.display=function()
    {    
                for(var i=0 ;i<=courses.length-1;i++){

                    if(courses[i].Age==20)

          document.write( "courses : "+ this.courses[i].course)
          document.write("<br>")
          document.write( "Name : "+ this.courses[i].Name)
          document.write("<br>")
          document.write( "id : "+ this.courses[i].id)
          document.write("<br>")


        }

    }
       


    student.prototype.sum_grade=function(){
         
        var sum=0;
       

        for(var i=0 ;i<=courses.length-1;i++){
                  
            if(courses[i].Age==20)
            
             sum=sum+courses[i].Grades
                
            
  
          }

          return sum;
    }





}


s2=new student ([{"id":2,"Name":"scott","Age":20,"course":"JAVASCRIPT","Grades":100},
{"id":3,"Name":"david","Age":20,"course":"HTML","Grades":50}])

s2.display()
s2.sum_grade()
document.write("<br>")
document.write( "Total Grads :"+ s2.sum_grade())
