var pi = Math.PI;

function res() {
    Vx = document.getElementById("Vx").value;
    Vy = document.getElementById("Vy").value;
    unit = document.getElementById("unit").value;
    R = Math.sqrt((Vx*Vx)+(Vy*Vy));
    RAng = (Math.atan(Vy/Vx))*(180/pi);
    if(document.getElementById("roundR").checked == true){
        document.getElementById("outputR").innerHTML = R.toFixed(2) + " " + unit;
        document.getElementById("outputTheta").innerHTML = RAng.toFixed(2) + "&deg;"
    }
    if(document.getElementById("roundR").checked == false){
        document.getElementById("outputR").innerHTML = R + " " + unit;
        document.getElementById("outputTheta").innerHTML = RAng + "&deg;"
        }
}

function int() {
    document.getElementById("output_Int").innerHTML = "Two components with magnitude " + Vx + " " + unit + " and " + Vy + " " + unit + "    form a resultant vector of "
    + R.toFixed(2) + " " + unit + ", oriented at an angle of " + RAng.toFixed(2) + " &deg;.";
}
