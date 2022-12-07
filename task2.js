/* function Point3D (x=0,y=0,z=0){
   this.x=x; 
   this.y=y;
   this.z=z;
}

Point3D.prototype.print3DPoint=function(){
    
    document.write("3DPoint:"+"X="+ this.x +"Y="+ this.y+"Z="+ this.z);
}

Point3D.prototype.calculateDistance=function(pp){
     cal=Math.sqrt((pp.x-this.x)^2+(pp.y-this.y)^2+(pp.z-this.z)^2);
     return cal;
}


p=new Point3D();
pp= new Point3D(1,2,3)
pp.print3DPoint();
document.write(p.calculateDistance(pp)); */