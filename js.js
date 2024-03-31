function btn(){
    let weight=document.getElementById("input1").value;
    let height=document.getElementById("input2").value;
    
    let BMI=(parseInt(weight)*703)/(parseInt(height))**2
    
    document.getElementById("input3").innerHTML=BMI;
}