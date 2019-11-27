Program fibonacci; 
var test: int = 1; 
fn fibo(): void { 
    var t1: int; 
    var t2: int; 
    var t3: int; 
    t1 = 0; 
    t2 = 1; 
    t3 = 0; 
    for(t3 <= 20) { 
        print(t3); 
        t1 = t2; 
        t2 = t3; 
        t3 = t1 + t2;
    } 
} 
fn main(): void { 
    fibo(); 
}


