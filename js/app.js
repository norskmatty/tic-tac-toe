var turn = 0;
var game = 0;
var xwin = 0;
var owin = 0;
var tiecount = 0;

$(document).ready(function() {

	

	$('.box').on('click', function() {
		if($(this).hasClass('X') || $(this).hasClass('O')) {
			alert("Choose an empty square");
		}
		else {
			if(turn == 0) {
				$(this).toggleClass('O');
				turn = 1;
			}
			else {
				$(this).toggleClass('X');
				turn = 0;
			}
		}

		if($('.row1 .column1').hasClass('O') && $('.row2 .column1').hasClass('O') && $('.row3 .column1').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row1 .column2').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row3 .column2').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row1 .column3').hasClass('O') && $('.row2 .column3').hasClass('O') && $('.row3 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row1 .column1').hasClass('O') && $('.row1 .column2').hasClass('O') && $('.row1 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row2 .column1').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row2 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row3 .column1').hasClass('O') && $('.row3 .column2').hasClass('O') && $('.row3 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row1 .column1').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row3 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row1 .column3').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row3 .column1').hasClass('O')) {
			alert(" 'O' wins!");
			owins();
			newGame();
		}
		else if($('.row1 .column1').hasClass('X') && $('.row2 .column1').hasClass('X') && $('.row3 .column1').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row1 .column2').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row3 .column2').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row1 .column3').hasClass('X') && $('.row2 .column3').hasClass('X') && $('.row3 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwins(x);
			newGame();
		}
		else if($('.row1 .column1').hasClass('X') && $('.row1 .column2').hasClass('X') && $('.row1 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row2 .column1').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row2 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row3 .column1').hasClass('X') && $('.row3 .column2').hasClass('X') && $('.row3 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row1 .column1').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row3 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row1 .column3').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row3 .column1').hasClass('X')) {
			alert(" 'X' wins!");
			xwins();
			newGame();
		}
		else if($('.row1 .column1').is('.X, .O') && $('.row1 .column2').is('.X, .O') && $('.row1 .column3').is('.X, .O') && $('.row2 .column1').is('.X, .O') && $('.row2 .column2').is('.X, .O') && $('.row2 .column3').is('.X, .O') && $('.row3 .column1').is('.X, .O') && $('.row3 .column2').is('.X, .O') && $('.row3 .column3').is('.X, .O'))  {
			alert(" It's a tie!  Surprise.");
			ties();
			newGame();
		}
	
	})

	$('button').on('click', function () {
		newGame();
		owin = 0;
		xwin = 0;
		tiecount = 0;
		$('.ocount').text(owin);
		$('.xcount').text(xwin);
		$('.tiecount').text(tiecount);
	});


})

function newGame() {
	$('.box').removeClass("X");
	$('.box').removeClass("O");
	if (game == 0) {
		turn = 1;
		game = 1;
	}
	else {
		turn = 0;
		game = 0;
	}
	

}

function owins() {
	owin++;
	$('.ocount').text(owin);
}

function xwins() {
	xwin++;
	$('.xcount').text(xwin);
}

function ties() {
	tiecount++;
	$('.tiecount').text(ties);
}
