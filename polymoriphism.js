class human{
    show(){
        console.log("human")
    }
}
class student extends human{
    show(){
        console.log("student")
    }
}
class son extends human{
    show(){
        console.log("son")
    }
}
class father extends human{
    show(){
        console.log("father")
    }
}
person1=new human;
person1.show();
person1=new student;
person1.show()
person1=new son;
person1.show()
person1=new father;
person1.show()
