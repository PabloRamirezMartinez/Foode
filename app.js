
        //valores originales
       
                //valores modificados
        var x2 = document.getElementById("tabla1").rows[1].innerHTML;
        
  



document.getElementById("boton1").addEventListener("click", function() {
        var x = document.getElementById("X").value;
        var r = document.getElementById("R").value;
        var y = document.getElementById("Y").value;
        var s = document.getElementById("S").value;
        var l = document.getElementById("L").value;
        var p = document.getElementById("P").value;
        var t = document.getElementById("T").value;
        var g = document.getElementById("G").value;
        var a = document.getElementById("A").value;
        var j = document.getElementById("J").value;
        var w = document.getElementById("W").value;
        var z = document.getElementById("Z").value;

        //convertimos nuestras variables a números enteros.
        var x = parseInt(x);
        var r = parseInt(r);
        var y = parseInt(y);
        var s = parseInt(s);
        var l = parseInt(l);
        var p = parseInt(p);
        var t = parseInt(t);
        var g = parseInt(g);
        var a = parseInt(a);
        var j = parseInt(j);
        var w = parseInt(w);
        var z = parseInt(z);
        // asignamos una variable al valor de cada celda.

        var x2 = document.getElementById("tabla1").rows[1].cells[0];
        var r2 = document.getElementById("tabla1").rows[1].cells[1];
        var y2 = document.getElementById("tabla1").rows[1].cells[2];
        var s2 = document.getElementById("tabla1").rows[1].cells[3];
        var l2 = document.getElementById("tabla1").rows[1].cells[4];
        var p2 = document.getElementById("tabla1").rows[1].cells[5];
        var t2 = document.getElementById("tabla2").rows[1].cells[0];
        var g2 = document.getElementById("tabla2").rows[1].cells[1];
        var a2 = document.getElementById("tabla2").rows[1].cells[2];
        var j2 = document.getElementById("tabla2").rows[1].cells[3];
        var w2 = document.getElementById("tabla2").rows[1].cells[4];
        var z2 = document.getElementById("tabla2").rows[1].cells[5];

      
   
var operacion = document.getElementById("operacion").value;

if (operacion == 1){
//operaciones ejercicio 1:
x = g+5;
w = a*x;
t = s+p-j;
j = t+l;
z = (p*r)+y;
y = y+z;
y = y+1;
}
   //operaciones ejercicio 2;
if (operacion ==2 ){
    x = x+a-w;
    s = x-j*z;
    r = r+1;
    y = r-x+2;
    l = y+l;
    t = g+j-z*3;
    w = w+5;
    j = j+z/x+2;
}

    //resultados finales


    x2.innerHTML = x.toString();
    r2.innerHTML = r.toString();
    y2.innerHTML = y.toString();
    s2.innerHTML = s.toString();
    l2.innerHTML = l.toString();
    p2.innerHTML = p.toString();
    t2.innerHTML = t.toString();
    g2.innerHTML = g.toString();
    a2.innerHTML = a.toString();
    j2.innerHTML = j.toString();
    w2.innerHTML = w.toString();
    z2.innerHTML = z.toString();
        });





