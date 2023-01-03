var G = 6.673e-11;

function force() {   
    var m1f = document.getElementById("mass1_F").value;
    var m2f = document.getElementById("mass2_F").value;
    var rf = document.getElementById("radius_F").value;
    var resultF = ((G*m1f*m2f)/(rf*rf));
    // if(result == "e"){
    //     document.getElementById("output_F").innerHTML = result/10;
    // } else {
        if(document.getElementById("roundF").checked == true){
            document.getElementById("output_F").innerHTML = resultF.toFixed(2) + " N";
        }
        if(document.getElementById("roundF").checked == false){
            document.getElementById("output_F").innerHTML = resultF + " m";
        }
        if(m1f == "" || m2f == "" || rf == ""){
            document.getElementById("output_F").innerHTML = "<span class = 'warn'>One or more fields are blank</span>"
        }
}

function radius() {   
    var m1r = document.getElementById("mass1_R").value;
    var m2r = document.getElementById("mass2_R").value;
    var fr = document.getElementById("force_R").value;
    var resultR = (Math.sqrt(
    (G*m1r*m2r)/(fr)));
    if(document.getElementById("roundR").checked == true){
        document.getElementById("output_R").innerHTML = resultR.toFixed(2) + " m";
    }
    if(document.getElementById("roundR").checked == false){
        document.getElementById("output_R").innerHTML = resultR + " m";
}
}

function mass() {   
    var m2m = document.getElementById("mass2_M").value;
    var rm = document.getElementById("radius_M").value;
    var fm = document.getElementById("force_M").value;
    var resultM = ((fm*(rm*rm))/(G*m2m));
    if(document.getElementById("roundM").checked == true){
        document.getElementById("output_M").innerHTML = resultM.toFixed(2) + " kg";
    }
    if(document.getElementById("roundM").checked == false){
        document.getElementById("output_M").innerHTML = resultM + " kg";
    }

}

