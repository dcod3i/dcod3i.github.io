var player1 = prompt("Enter your name, Player 1: ");
var player2 = prompt("Enter your name, Player 2: ");

var p1Score =  0;
var p2Score =  0;
var pClks = []
var p1Clks = []
var p2Clks = []

var tds = document.getElementsByTagName("td");
var trs = document.getElementsByTagName("tr");
var pTag = document.getElementsByTagName('p');

function tic() {

    var count = 0
    var h2Tag = document.getElementsByTagName('h2');
    h2Tag[1].textContent =  player1
    h2Tag[3].textContent =  player2
    var tdTag = document.getElementsByTagName("td");

    for (var i = 0; i < tdTag.length; i++) {

        tdTag[i].onclick = function() {
            var tdTagID = this.getAttribute('id')

            if (this.style.backgroundColor != "") {
                return
            }

            count += 1
            var color1 = this.style.backgroundColor = "#fbbc05";
            var tdArr = pClks.push(tdTagID)
            count % 2 == 0 ? (color1, this.append("p2"),p1Clks.push(tdTagID)) : (this.style.backgroundColor = "#8ddf10", this.append("p1"),p2Clks.push(tdTagID));
            console.log(p1Clks,p2Clks)

            row1()
            col1()
            diag()
            drawMatch()
        }
    }
}

countID = 0;
function createTable(trSize,tdSize,tblSiz){
	var tbl = document.createElement('table');
    var conMain = document.getElementById('con_main');
	tbl.id = "tbl" + tblSiz
	tbl.className = "layout";
    conMain.insertBefore(tbl, conMain.childNodes[2]);
	for (var i = 0; i < trSize; i++ ){
		var newRow = tbl.insertRow()
	    newRow.className = "tbl" + tblSiz
		for (var j = 0; j < tdSize; j++){
				var newCell = newRow.insertCell()
	            newCell.className = "tbl" + tblSiz
				countID = countID + 1;
				newCell.id = countID
		}
	}
	countID = 0;
}

function row1() {
    for (var i = 0; i < tds.length; i += 3) {
        if ("p1" == tds[i].innerText && "p1" == tds[i + 1].innerText && "p1" == tds[i + 2].innerText) {
            alert(player1 + " wins")
            p1Score += 1
            pTag[0].innerHTML = "SCORE " + p1Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
        } else if ( "p2" == tds[i].innerText && "p2" == tds[i + 1].innerText && "p2" == tds[i + 2].innerText) {
            alert(player2 + " wins")
            p2Score += 1
            pTag[1].innerHTML = "SCORE " + p2Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
        }
    }
}

function col1() {
    for (var i = 0; i < trs.length; i++) {
        if ("p1" == tds[i].innerText && "p1" == tds[i + 3].innerText && "p1" == tds[i + 6].innerText) {
            alert(player1 + " wins")
            p1Score += 1
            pTag[0].innerHTML = "SCORE " + p1Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
        } else if ("p2" == tds[i].innerText && "p2" == tds[i + 3].innerText && "p2" == tds[i + 6].innerText) {
            alert(player2 + " wins")
            p2Score += 1
            pTag[1].innerHTML = "SCORE " + p2Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
        }
    }
}

function diag() {
    var i = 0;
    var j = 2;
    if ( "p1" == tds[i].innerText && "p1" == tds[i + 4].innerText && "p1" == tds[i + 8].innerText) {
        alert(player1 + " wins")
            p1Score += 1
            pTag[0].innerHTML = "SCORE " + p1Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
    } else if ( "p2" == tds[i].innerText && "p2" == tds[i + 4].innerText && "p2" == tds[i + 8].innerText) {
        alert(player2 + " wins")
            p2Score += 1
            pTag[1].innerHTML = "SCORE " + p2Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
    } else if ( "p1" == tds[j].innerText && "p1" == tds[j + 2].innerText && "p1" == tds[j + 4].innerText) {
        alert(player1 + " wins")
            p1Score += 1
            pTag[0].innerHTML = "SCORE " + p1Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
    } else if ( "p2" == tds[j].innerText && "p2" == tds[j + 2].innerText && "p2" == tds[j + 4].innerText) {
        alert(player2 + " wins")
            p2Score += 1
            pTag[1].innerHTML = "SCORE " + p2Score
            scoreAud()
            pClks.splice(0,pClks.length+1)
            tdReset()
    }
}

function drawMatch() {
  if ( tds.length == 9 ){
              if ( pClks.length == 9 ){
                alert("draw")
                pClks.splice(0,pClks.length+1)
                tdReset()
              }
            }else{
              if ( pClks.length == 36 ){
                alert("it's a tie")
                pClks.splice(0,pClks.length+1)
                tdReset()
              }
            }
}

function drawGrid() {
var opt = document.getElementById('grid')
var optVal = opt.options[opt.selectedIndex].value

    document.getElementById('con_grid').style.display = "none"
    startAudio()
    if ( optVal == "3" ) {
        createTable(3,3,1)
    }
    else { createTable(6,6,2) }
    
    tic()  
}

function startAudio(){
    let audio = new Audio("sounds/click.mp3");
    audio.play();
}
function scoreAud(){
    let audio = new Audio("sounds/bonus.wav");
    audio.play();
}

function tdReset() {
  for ( var i = 0; i < tds.length; i++ ){  
      if ( tds.length == 9 ) {
        document.getElementById("tbl1").querySelectorAll('td')[i].style.backgroundColor = "" 
        document.getElementById("tbl1").querySelectorAll('td')[i].innerHTML = ""
      }else{
        document.getElementById("tbl2").querySelectorAll('td')[i].style.backgroundColor = "" 
        document.getElementById("tbl2").querySelectorAll('td')[i].innerHTML = ""
      }
  }
}
