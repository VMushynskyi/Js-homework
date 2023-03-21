class A {

    method_1(a) {
        console.log("Hello A")
    }
}

class B extends A{

    method_1(a) {
        console.log("Hello B")
    }
}

let a = new A();

a.method_1(1);
