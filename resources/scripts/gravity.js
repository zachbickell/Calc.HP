var G = 6.673e-11;

function force() {   
    m1f = document.getElementById("mass1_F").value;
    m2f = document.getElementById("mass2_F").value;
    rf = document.getElementById("radius_F").value;
    resultF = ((G*m1f*m2f)/(rf*rf));
        if(document.getElementById("roundF").checked == true){
            document.getElementById("output_F").innerHTML = resultF.toFixed(2) + " N";
        }
        if(document.getElementById("roundF").checked == false){
            document.getElementById("output_F").innerHTML = resultF + " N";
        }
        if(m1f == "" || m2f == "" || rf == ""){
            document.getElementById("output_F").innerHTML = "<span class = 'warn'>One or more fields are blank</span>"
        }
}

function radius() {   
    m1r = document.getElementById("mass1_R").value;
    m2r = document.getElementById("mass2_R").value;
    fr = document.getElementById("force_R").value;
    resultR = (Math.sqrt(
    (G*m1r*m2r)/(fr)));
    if(document.getElementById("roundR").checked == true){
        document.getElementById("output_R").innerHTML = resultR.toFixed(2) + " m";
    }
    if(document.getElementById("roundR").checked == false){
        document.getElementById("output_R").innerHTML = resultR + " m";
}
}

function mass() {   
    m2m = document.getElementById("mass2_M").value;
    rm = document.getElementById("radius_M").value;
    fm = document.getElementById("force_M").value;
    resultM = ((fm*(rm*rm))/(G*m2m));
    if(document.getElementById("roundM").checked == true){
        document.getElementById("output_M").innerHTML = resultM.toFixed(2) + " kg";
    }
    if(document.getElementById("roundM").checked == false){
        document.getElementById("output_M").innerHTML = resultM + " kg";
    }

}

function intF() {
    document.getElementById("output_IntF").innerHTML = "Two objects of masses " + m1f + "kg and " + m2f + "kg positioned " + rf + "m away from eachother are attracted together by a constant force of " + resultF + "N."
}

function intR() {
    document.getElementById("output_IntR").innerHTML = "Two objects of masses " + m1r + "kg and " + m2r + "kg that are attracted together by a constant force of " + fr + "N are positioned " + resultR.toFixed(3) + "m away from eachother."
}

function intM() {
    document.getElementById("output_IntM").innerHTML = "Of objects that are " + rm + "m apart and exert a constant force of " + fm + "N on eachother, "
}
