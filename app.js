var d = new Date();
var year = d.getFullYear();
document.getElementById("copy").innerHTML = "<b>" + year + " &copy; Abhijeet Kumar</b>";
document.getElementById("copyright").innerHTML = "<b>" + year + " &copy; Abhijeet Kumar</b>";
alert("*****NOTICE*****\nPlease note: If you enter too high number. You have to wait for a result. It may take a few minute.");

function makerFactor() {
    var n = document.getElementById("num").value;
    var num = Math.floor(n * 1);
    var x = 1;
    var y = 2;
    var factor = [1];
    if (num == 1) {
        document.getElementById("demo").innerHTML = "The factor of 1 are 1.";
    }
    while (num > y) {
        var floor = Math.floor(num / y);
        var ceil = Math.ceil(num / y);
        if (floor == ceil) {
            factor[x] = y;
            x++;
            y++;
        } else if (floor != ceil) {
            y++;
        }
    }
    if (y == num) {
        factor[x] = num;
        var fact = factor;
        document.getElementById("demo").innerHTML = "The factor of " + num + " are " + fact + ".";
    }
}

function makerPronic() {
    var n = document.getElementById("pronic").value;
    var num = Math.floor(n * 1);
    var x = 1;
    var y = 2;
    var factor = [1];
    while (num > y) {
        var floor = Math.floor(num / y);
        var ceil = Math.ceil(num / y);
        if (floor == ceil) {
            factor[x] = y;
            x++;
            y++;
        } else if (floor != ceil) {
            y++;
        }

    }
    if (y == num) {
        factor[x] = num;
        var a = Math.floor((factor.length / 2) - 1);
        var b = Math.floor(factor.length);
        var c = factor[a];
        var d = factor[b];
        var e = Math.floor(d - c);
        if (e == 1) {
            document.getElementById("demo7").innerHTML = num + " is a pronic number! (" + c + "×" + d + ").";
        } else {
            document.getElementById("demo7").innerHTML = num + " is not a pronic number!";
        }
    } else {
        document.getElementById("demo7").innerHTML = num + " is not a pronic number!";
    }
}

function alt() {
    alert("In develop.");
}

function makerDeficient() {
    var n = document.getElementById("deficient").value;
    var num = Math.floor(n * 1);
    var x = 1;
    var y = 2;
    var factor = [1];
    while (num > y) {
        var floor = Math.floor(num / y);
        var ceil = Math.ceil(num / y);
        if (floor == ceil) {
            factor[x] = y;
            x++;
            y++;
        } else if (floor != ceil) {
            y++;
        }
    }
    if (y == num) {
        var fact = factor;
    }
    var sum = 0;
    for (a = 0; a < factor.length; a++) {
        sum += factor[a];
    }
    if (sum < num) {
        document.getElementById("demo2").innerHTML = num + " Is a deficient number!</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " < " + num;
    } else if (num == 1) {
        document.getElementById("demo2").innerHTML = "1 Isn't a deficient number! (Perfect)</br>The factor of 1 are 1.<br/>The sum is 1.<br/>1 < 1";
    } else if (sum == num) {
        document.getElementById("demo2").innerHTML = num + " Isn't a deficient number! (Perfect)</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " = " + num;
    } else {
        document.getElementById("demo2").innerHTML = num + " Isn't a deficient number! (Abundant)</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " > " + num;
    }
}

function makerPrime() {
    var n = document.getElementById("prime").value;
    var num = Math.floor(n * 1);
    var x = 1;
    var y = 2;
    var factor = [1];
    while (num > y) {
        var floor = Math.floor(num / y);
        var ceil = Math.ceil(num / y);
        if (floor == ceil) {
            factor[x] = y;
            x++;
            y++;
        } else if (floor != ceil) {
            y++;
        }
    }
    if (y == num) {
        factor[x] = num;
    }
    var lens = factor.length;
    if (lens == 2) {
        document.getElementById("demo1").innerHTML = num + " Is a prime number!";
    } else {
        document.getElementById("demo1").innerHTML = num + " Isn't a prime number!";
    }
}

function makerConverterTime() {
    var d = document.getElementById("day").value;
    var h = document.getElementById("hour").value;
    var m = document.getElementById("min").value;
    var s = document.getElementById("sec").value;
    var day = Math.floor(d * 1);
    var hour = Math.floor(h * 1);
    var min = Math.floor(m * 1);
    var sec = Math.floor(s * 1);
    var to = document.getElementById("to").value;
    var hours = Math.floor(day * 24);
    var hourss = Math.floor(hours + hour);
    var mins = Math.floor(hourss * 60);
    var minss = Math.floor(mins + min);
    var secs = Math.floor(minss * 60);
    var tosec = Math.floor(secs + sec);
    var now = Math.floor(sec + (min * 60) + (hour * 60 * 60) + (day * 24 * 60 * 60))
    var second = Math.floor(tosec % 60);
    var tomin = Math.floor(tosec / 60);
    var minute = Math.floor(tomin % 60);
    var tohour = Math.floor(tomin / 60);
    var hr = Math.floor(tohour % 24);
    var date = Math.floor(tohour / 24);
    if (to == 4) {
        document.getElementById("demo3").innerHTML = "<b>Day : </b>0";
        document.getElementById("demo4").innerHTML = "<b>Hour : </b>0";
        document.getElementById("demo5").innerHTML = "<b>Minute : </b>0";
        document.getElementById("demo6").innerHTML = "<b>Second : </b>" + tosec;
    } else if (to == 3) {
        document.getElementById("demo3").innerHTML = "<b>Day : </b>0";
        document.getElementById("demo4").innerHTML = "<b>Hour : </b>0";
        document.getElementById("demo5").innerHTML = "<b>Minute : </b>" + tomin;
        document.getElementById("demo6").innerHTML = "<b>Second : </b>" + second;
    } else if (to == 2) {
        document.getElementById("demo3").innerHTML = "<b>Day : </b>0";
        document.getElementById("demo4").innerHTML = "<b>Hour : </b>" + tohour;
        document.getElementById("demo5").innerHTML = "<b>Minute : </b>" + minute;
        document.getElementById("demo6").innerHTML = "<b>Second : </b>" + second;
    } else if (to == 1) {
        document.getElementById("demo3").innerHTML = "<b>Day : </b>" + date;
        document.getElementById("demo4").innerHTML = "<b>Hour : </b>" + hr;
        document.getElementById("demo5").innerHTML = "<b>Minute : </b>" + minute;
        document.getElementById("demo6").innerHTML = "<b>Second : </b>" + second;
    }

}

function makerAbundant() {
    var n = document.getElementById("Abundant").value;
    var num = Math.floor(n * 1);
    var x = 1;
    var y = 2;
    var factor = [1];
    while (num > y) {
        var floor = Math.floor(num / y);
        var ceil = Math.ceil(num / y);
        if (floor == ceil) {
            factor[x] = y;
            x++;
            y++;
        } else if (floor != ceil) {
            y++;
        }
    }
    if (y == num) {
        var fact = factor;
    }
    var sum = 0;
    for (a = 0; a < factor.length; a++) {
        sum += factor[a];
    }
    if (sum < num) {
        document.getElementById("demo8").innerHTML = num + " Isn't a Abundant number! (Deficient)</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " < " + num;
    } else if (num == 1) {
        document.getElementById("demo8").innerHTML = "1 Isn't a Abundant number! (Perfect)</br>The factor of 1 are 1.<br/>The sum is 1.<br/>1 = 1";
    } else if (sum == num) {
        document.getElementById("demo8").innerHTML = num + " Isn't a Abundant number! (Perfect)</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " = " + num;
    } else {
        document.getElementById("demo8").innerHTML = num + " Is a Abundant number!</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " > " + num;
    }
}

function makerRemoveSpace() {
    var str = document.getElementById("remove").value;
    var res = str.split(" ").join("");
    document.getElementById("demo9").innerHTML = res;
}

function makerSort() {
    var str = document.getElementById("sort").value;
    var res = str.split("").sort().join("");
    document.getElementById("demo10").innerHTML = res;
}

function makerAutoCheck() {
    var num = document.getElementById("autocheck").value;
    var number = Math.pow(num, 2);
    var mun = num.split("").reverse();
    var ber = ("" + number).split("").reverse();
    var bet = mun.length;
    var arr = [];
    for (i = 0; i < bet; i++) {
        arr[i] = ber[i];
    }
    var m = arr.join('');
    var n = mun.join('');
    if (m == n) {
        document.getElementById("demo11").innerHTML = num + " Is An Automorphic Number!";
    } else {
        document.getElementById("demo11").innerHTML = num + " Isn't An Automorphic Number!";
    }
}

function makerAutoRange() {
    var fro = document.getElementById("autofrom").value;
    var to = document.getElementById("autoto").value;
    var f = Math.floor(fro * 1);
    var t = Math.floor(to * 1);
    if (f > t) {
        document.getElementById("demo12").innerHTML = "Your Input Number Are Not Valid!";
    }
    var ran = [];
    for (x = 0; fro < to; fro++) {
        var number = Math.pow(fro, 2);
        var mun = ("" + fro).split("").reverse();
        var ber = ("" + number).split("").reverse();
        var bet = mun.length;
        var arr = [];
        for (i = 0; i < bet; i++) {
            arr[i] = ber[i];
        }
        var m = arr.join('');
        var n = mun.join('');
        if (m == n) {
            ran[x] = fro;
            x++
        }
    }
    var nu = ran.length;
    var n = Math.floor(nu * 1);
    if (fro == to) {
        if (n == 0) {
            document.getElementById("demo1").innerHTML = "No Automorphic Number In This Range!";
        } else {
            document.getElementById("demo12").innerHTML = ran;
        }
    }
}

function makerIP() {
    var on = document.getElementById("ipone").value;
    var tw = document.getElementById("iptwo").value;
    var thre = document.getElementById("ipthree").value;
    var fou = document.getElementById("ipfour").value;
    var one = Math.floor(on * 1);
    var two = Math.floor(tw * 1);
    var three = Math.floor(thre * 1);
    var four = Math.floor(fou * 1);
    var o = on.split("");
    var t = tw.split("");
    var thr = thre.split("");
    var fo = fou.split("");
    var e = o.length;
    var w = t.length;
    var th = thr.length;
    var f = fo.length;
    var ans = "";
    var check = ["Is an IP Address!", "Is't an IP Address!"];
    var cause = ["- Contain number that greater than 255.<br/>", "- Contain negative number.<br/>", "- Contain an alphabat or unexpected cheracter.<br/>", "- Leading with zero.<br/>", "- Some octet(s) are blank."];
    if (one > 255 || two > 255 || three > 255 || four > 255) {
        ans = ans + cause[0];
    }
    if (one < 0 || two < 0 || three < 0 || four < 0) {
        ans = ans + cause[1];
    }
    if (one != on || two != tw || three != thre || four != fou) {
        ans = ans + cause[2];
    }
    if (o[0] == 0 && e > 1) {
        ans = ans + cause[3];
    } else if (t[0] == 0 && w > 1) {
        ans = ans + cause[3];
    } else if (thr[0] == 0 && th > 1) {
        ans = ans + cause[3];
    } else if (fo[0] == 0 && f > 1) {
        ans = ans + cause[3];
    }
    if (e == 0 || w == 0 || th == 0 || f == 0) {
        ans = ans + cause[4];
    }
    var an = ans.length;
    if (an == 0) {
        document.getElementById("demo15").innerHTML = on + "." + tw + "." + thre + "." + fou + " Is a valid IP Address!";
    } else if (an != 0) {
        document.getElementById("demo15").innerHTML = on + "." + tw + "." + thre + "." + fou + " Isn't a valid IP Address!<br/>" + ans;
    }
}

function makerSnail() {
    var HH = document.getElementById("snailh").value;
    var AA = document.getElementById("snaila").value;
    var BB = document.getElementById("snailb").value;
    var H = Math.floor(HH * 1);
    var A = Math.floor(AA * 1);
    var B = Math.floor(BB * 1);
    if (A > B) {
        var height = 0;
        var day = 0;
        while (height < H) {
            height += A;
            day += 1;
            if (height >= H) {
                if (day == 1) {
                    document.getElementById("demo17").innerHTML = "A snail will reach the top in " + day + " day.";
                } else if (day > 1) {
                    document.getElementById("demo17").innerHTML = "A snail will reach the top in " + day + " days.";
                }
            } else if (height < H) {
                height -= B;
            }
        }
    } else {
        document.getElementById("demo17").innerHTML = "Your input are <b style='color:red;'>Incorrect</b>.";
    }
}

function makerPerfect() {
    var n = document.getElementById("perfect").value;
    var num = Math.floor(n * 1);
    if (num == 1) {
        document.getElementById("demo16").innerHTML = "1 Is a perfect number!</br>The factor of 1 are 1.<br/>The sum is 1.<br/>1 = 1";
    } else {
        var x = 1;
        var y = 2;
        var factor = [1];
        while (num > y) {
            var floor = Math.floor(num / y);
            var ceil = Math.ceil(num / y);
            if (floor == ceil) {
                factor[x] = y;
                x++;
                y++;
            } else if (floor != ceil) {
                y++;
            }
        }
        if (y == num) {
            var fact = factor;
        }
        var sum = 0;
        for (a = 0; a < factor.length; a++) {
            sum += factor[a];
        }
        if (sum == num) {
            document.getElementById("demo16").innerHTML = num + " Is a perfect number!</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " = " + num;
        } else if (sum < num) {
            document.getElementById("demo16").innerHTML = num + " Isn't a perfect number! (Deficient)</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " < " + num;
        } else {
            document.getElementById("demo16").innerHTML = num + " Isn't a perfect number! (Abundant)</br>The factor of " + num + " are " + fact + ".<br/>The sum is " + sum + ".<br/>" + sum + " > " + num;
        }
    }
} 