Program factorial; 
var test: int = 1; 
fn factorial(): void {
     var j: int;
     j = 1; 
     var factorial: int; 
     factorial = 1; 
     for(j <= 5) { 
         factorial = j * factorial;  
         j = j + 1; 
         print("FACTORIAL"); 
         print(factorial); 
    } 
    print(factorial);  
} 

fn main(): void {
    factorial(); 
}



