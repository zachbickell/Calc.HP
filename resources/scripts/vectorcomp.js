var pi = Math.PI;

function comp() {
    mag = document.getElementById("mag").value;
    dirDEG = document.getElementById("dir").value;
    dirRAD = dirDEG*(pi/180);
    unit = document.getElementById("unit").value;
    X = mag*Math.cos(dirRAD);
    Y = mag*Math.sin(dirRAD);
    document.getElementById("output_X").innerHTML = X + " " + unit;
    document.getElementById("output_Y").innerHTML = Y + " " + unit;
    
}

function int() {
        document.getElementById("output_Int").innerHTML = "Of a vector with a magnitude of " + mag + " " + unit + " oriented at " + dirDEG + "<sup>o</sup>" + ", it has an influence of " + X.toFixed(3) + " " + unit + " in the horizontal (x) direction and an influence of " + Y.toFixed(3) + " " + unit + " in the vertical (y) direction."  
    }
