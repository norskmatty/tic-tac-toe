$(document).ready(function() {

	var turn = 0;
	var xwin = 0;
	var owin = 0;
	var ties = 0;

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
			owin++;
			newGame();
		}
		else if($('.row1 .column2').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row3 .column2').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row1 .column3').hasClass('O') && $('.row2 .column3').hasClass('O') && $('.row3 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row1 .column1').hasClass('O') && $('.row1 .column2').hasClass('O') && $('.row1 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row2 .column1').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row2 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row3 .column1').hasClass('O') && $('.row3 .column2').hasClass('O') && $('.row3 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row1 .column1').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row3 .column3').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row1 .column3').hasClass('O') && $('.row2 .column2').hasClass('O') && $('.row3 .column1').hasClass('O')) {
			alert(" 'O' wins!");
			owin++;
			newGame();
		}
		else if($('.row1 .column1').hasClass('X') && $('.row2 .column1').hasClass('X') && $('.row3 .column1').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row1 .column2').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row3 .column2').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row1 .column3').hasClass('X') && $('.row2 .column3').hasClass('X') && $('.row3 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row1 .column1').hasClass('X') && $('.row1 .column2').hasClass('X') && $('.row1 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row2 .column1').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row2 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row3 .column1').hasClass('X') && $('.row3 .column2').hasClass('X') && $('.row3 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row1 .column1').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row3 .column3').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row1 .column3').hasClass('X') && $('.row2 .column2').hasClass('X') && $('.row3 .column1').hasClass('X')) {
			alert(" 'X' wins!");
			xwin++;
			newGame();
		}
		else if($('.row1 .column1').is('.X, .O') && $('.row1 .column2').is('.X, .O') && $('.row1 .column3').is('.X, .O') && $('.row2 .column1').is('.X, .O') && $('.row2 .column2').is('.X, .O') && $('.row2 .column3').is('.X, .O') && $('.row3 .column1').is('.X, .O') && $('.row3 .column2').is('.X, .O') && $('.row3 .column3').is('.X, .O'))  {
			alert(" It's a tie!  Surprise.");
			ties++;
			newGame();
		}
	
	})

	$('button').on('click', function () {
		$('.box').removeClass("X");
		$('.box').removeClass("O");
	})


})

function newGame() {
	$('.box').removeClass("X");
	$('.box').removeClass("O");
}

