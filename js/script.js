function onMouseOver() {
    document.getElementById('startBlue').style.display = 'block';
    document.getElementById('startBtn').style.display = 'none';
}

function onMouseOut() {
    document.getElementById('startBlue').style.display = 'none';
    document.getElementById('startBtn').style.display = 'block';
}

// start animation-------------
function animationStart() {
    // buttons -------------
    document.getElementById('startBlue').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'block';
    document.getElementById('resetBtn').style.display = 'block';
    document.getElementById('firstresumebtn').style.display = 'none';


    document.getElementById('reset_inactive_Btn').style.display = 'none';

    // cups -------------
    document.getElementById('side-cup').style.display = 'block';
    document.getElementById('side-cup-1').style.display = 'block';
    document.getElementById('side-cup-2').style.display = 'block';
    document.getElementById('side-cup-3').style.display = 'block';
    document.getElementById('side-cup-4').style.display = 'block';
    document.getElementById('dropping-water').style.display = 'block';
    document.getElementById('filling-water').style.display = 'block';
    document.getElementById('egg-shape-ball-2-text').style.display = 'block';
    document.getElementById('egg-shape-ball-2-text-1').style.display = 'none';
    // egg shape ball ----------
    document.getElementById('egg-shape-ball-1').style.display = 'block';
    document.getElementById('egg-shape-ball-1-2').style.display = 'none';
    document.getElementById('egg-shape-ball-2').style.display = 'block';
    document.getElementById('egg-shape-ball-2-2').style.display = 'none';

    // blue balls ----------------
    document.getElementById('blue-ball-1').style.display = 'block';
    document.getElementById('blue-ball-1-2').style.display = 'none';

    document.getElementById('blue-ball-2').style.display = 'block';
    document.getElementById('blue-ball-2-2').style.display = 'none';
    document.getElementById('blue-ball-3').style.display = 'block';
    document.getElementById('blue-ball-3-2').style.display = 'none';

    // texts -----------------
    document.getElementById('explain-text').style.display = 'block';
    document.getElementById('hplus').style.display = 'block';
    document.getElementById('ch2coo2').style.display = 'block';
    document.getElementById('bracket').style.display = 'block';
    document.getElementById('ch3cooh').style.display = 'block';
    document.getElementById('textna').style.display = 'block';
    document.getElementById('textoh').style.display = 'block';
    document.getElementById('textinborder').style.display = 'block';
    document.getElementById('ch3coo_').style.display = 'block';
    document.getElementById('h2o').style.display = 'block';
    document.getElementById('naplus').style.display = 'block';
    document.getElementById('labelch3coo_').style.display = 'block';


    // //  rocket section -------------
    document.getElementById('rocket-sec').style.display = 'block';

    // blueball add
    document.getElementById('b12').style.display = 'block';
    document.getElementById('b13').style.display = 'block';
    document.getElementById('b22').style.display = 'none';
    // document.getElementById('b23').style.display = 'block';
    document.getElementById('bubblelight').style.display = 'block';
    document.getElementById('lighttext').style.display = 'block';
    document.getElementById('b24').style.display = 'block';
    document.getElementById('blue-ball-3').style.display = 'block';



}

// pause animation ---------------
function animationPause() {
    document.getElementById('startBlue').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('firstresumebtn').style.display = 'block';
    document.getElementById('side-cup').style.animationPlayState = 'paused';
    document.getElementById('side-cup-1').style.animationPlayState = 'paused';
    document.getElementById('side-cup-2').style.animationPlayState = 'paused';
    document.getElementById('side-cup-3').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'paused';
    document.getElementById('side-cup-4').style.animationPlayState = 'paused';
    document.getElementById('dropping-water').style.animationPlayState = 'paused';
    document.getElementById('filling-water').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-1-2').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2-2').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2-text').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2-text-1').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-1').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-1-2').style.animationPlayState = 'paused';

    document.getElementById('blue-ball-2').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-3').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-3-2').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-2-2').style.animationPlayState = 'paused';

    document.getElementById('b12').style.animationPlayState = 'paused';
    document.getElementById('b13').style.animationPlayState = 'paused';
    document.getElementById('b22').style.animationPlayState = 'paused';
    // document.getElementById('b23').style.animationPlayState = 'paused';
    document.getElementById('bubblelight').style.animationPlayState = 'paused';
    document.getElementById('lighttext').style.animationPlayState = 'paused';

    document.getElementById('illutube').style.animationPlayState = 'paused';

    document.getElementById('illutube3').style.animationPlayState = 'paused';
    document.getElementById('illutube3-f').style.animationPlayState = 'paused';

    document.getElementById('texttube').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop1').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop3').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop1-2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop2-2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop3-2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop1-3').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop2-3').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop3-3').style.animationPlayState = 'paused';
    document.getElementById('b11').style.animationPlayState = 'paused';
    document.getElementById('na1').style.animationPlayState = 'paused';
    document.getElementById('oh1').style.animationPlayState = 'paused';
    document.getElementById('b11-2').style.animationPlayState = 'paused';
    document.getElementById('na1-2').style.animationPlayState = 'paused';
    document.getElementById('oh1-2').style.animationPlayState = 'paused';
    document.getElementById('b11-3').style.animationPlayState = 'paused';
    document.getElementById('na1-3').style.animationPlayState = 'paused';
    document.getElementById('oh1-3').style.animationPlayState = 'paused';
    document.getElementById('texttube1').style.animationPlayState = 'paused';
    document.getElementById('texttube-f').style.animationPlayState = 'paused';
    document.getElementById('textna').style.animationPlayState = 'paused';
    document.getElementById('textoh').style.animationPlayState = 'paused';
    document.getElementById('textinborder').style.animationPlayState = 'paused';
    document.getElementById('finaltext').style.animationPlayState = 'paused';
    document.getElementById('ch3coo_').style.animationPlayState = 'paused';
    document.getElementById('naplus').style.animationPlayState = 'paused';
    document.getElementById('h2o').style.animationPlayState = 'paused';
    document.getElementById('labelch3coo_').style.animationPlayState = 'paused';

    document.getElementById('b24').style.animationPlayState = 'paused';
    document.getElementById('explain-text').style.animationPlayState = 'paused';
    document.getElementById('hplus').style.animationPlayState = 'paused';
    document.getElementById('ch2coo2').style.animationPlayState = 'paused';
    document.getElementById('bracket').style.animationPlayState = 'paused';
    document.getElementById('ch3cooh').style.animationPlayState = 'paused';

}

// resume animation ---------------
function firstroundResume() {
    document.getElementById('pauseBtn').style.display = 'block';
    document.getElementById('firstresumebtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('side-cup').style.animationPlayState = 'running';
    document.getElementById('side-cup-1').style.animationPlayState = 'running';
    document.getElementById('side-cup-2').style.animationPlayState = 'running';
    document.getElementById('side-cup-3').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'running';
    document.getElementById('side-cup-4').style.animationPlayState = 'running';
    document.getElementById('dropping-water').style.animationPlayState = 'running';
    document.getElementById('filling-water').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-1-2').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2-2').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2-text').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2-text-1').style.animationPlayState = 'running';
    document.getElementById('blue-ball-1').style.animationPlayState = 'running';
    document.getElementById('blue-ball-1-2').style.animationPlayState = 'running';

    document.getElementById('blue-ball-2').style.animationPlayState = 'running';
    document.getElementById('blue-ball-3').style.animationPlayState = 'running';
    document.getElementById('blue-ball-2-2').style.animationPlayState = 'running';

    document.getElementById('b12').style.animationPlayState = 'running';
    document.getElementById('b13').style.animationPlayState = 'running';
    document.getElementById('b22').style.animationPlayState = 'running';
    // document.getElementById('b23').style.animationPlayState = 'running';
    document.getElementById('bubblelight').style.animationPlayState = 'running';
    document.getElementById('lighttext').style.animationPlayState = 'running';
    document.getElementById('ch3coo_').style.animationPlayState = 'running';
    document.getElementById('h2o').style.animationPlayState = 'running';
    document.getElementById('naplus').style.animationPlayState = 'running';
    document.getElementById('labelch3coo_').style.animationPlayState = 'running';

    document.getElementById('illutube').style.animationPlayState = 'running';

    document.getElementById('illutube3').style.animationPlayState = 'running';
    document.getElementById('illutube3-f').style.animationPlayState = 'running';

    document.getElementById('texttube').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop1').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop3').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop1-2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop2-2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop3-2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop1-3').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop2-3').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop3-3').style.animationPlayState = 'running';
    document.getElementById('b11').style.animationPlayState = 'running';
    document.getElementById('na1').style.animationPlayState = 'running';
    document.getElementById('oh1').style.animationPlayState = 'running';
    document.getElementById('b11-2').style.animationPlayState = 'running';
    document.getElementById('na1-2').style.animationPlayState = 'running';
    document.getElementById('oh1-2').style.animationPlayState = 'running';
    document.getElementById('b11-3').style.animationPlayState = 'running';
    document.getElementById('na1-3').style.animationPlayState = 'running';
    document.getElementById('oh1-3').style.animationPlayState = 'running';
    document.getElementById('texttube1').style.animationPlayState = 'running';
    document.getElementById('texttube-f').style.animationPlayState = 'running';
    document.getElementById('textna').style.animationPlayState = 'running';
    document.getElementById('textoh').style.animationPlayState = 'running';
    document.getElementById('finaltext').style.animationPlayState = 'running';
    document.getElementById('textinborder').style.animationPlayState = 'running';
    document.getElementById('b24').style.animationPlayState = 'running';
    document.getElementById('explain-text').style.animationPlayState = 'running';
    document.getElementById('hplus').style.animationPlayState = 'running';
    document.getElementById('ch2coo2').style.animationPlayState = 'running';
    document.getElementById('bracket').style.animationPlayState = 'running';
    document.getElementById('ch3cooh').style.animationPlayState = 'running';

}

// firstresume animation

function animationResume() {
    document.getElementById('pauseBtn').style.display = 'block';
    document.getElementById('firstresumebtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('top-left-text').style.display = 'none';
    document.getElementById('nextstext').style.display = 'block';
    document.getElementById('side-cup').style.animationPlayState = 'running';
    document.getElementById('side-cup-1').style.animationPlayState = 'running';
    document.getElementById('side-cup-2').style.animationPlayState = 'running';
    document.getElementById('side-cup-3').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'running';
    document.getElementById('side-cup-4').style.animationPlayState = 'running';
    document.getElementById('dropping-water').style.animationPlayState = 'running';
    document.getElementById('filling-water').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-1-2').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2-2').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2-text').style.animationPlayState = 'running';
    document.getElementById('egg-shape-ball-2-text-1').style.animationPlayState = 'running';
    document.getElementById('blue-ball-1').style.animationPlayState = 'running';
    document.getElementById('blue-ball-1-2').style.animationPlayState = 'running';

    // document.getElementById('blue-ball-2').style.animationPlayState = 'running';
    document.getElementById('blue-ball-2').style.display = 'none';
    document.getElementById('blue-ball-3').style.animationPlayState = 'running';
    document.getElementById('blue-ball-2-2').style.animationPlayState = 'running';

    document.getElementById('b12').style.animationPlayState = 'running';
    document.getElementById('b13').style.animationPlayState = 'running';
    document.getElementById('b22').style.animationPlayState = 'running';
    document.getElementById('b22').style.display = 'block';
    // document.getElementById('b23').style.animationPlayState = 'running';
    document.getElementById('bubblelight').style.animationPlayState = 'running';
    document.getElementById('lighttext').style.animationPlayState = 'running';
    document.getElementById('ch3coo_').style.animationPlayState = 'running';
    document.getElementById('h2o').style.animationPlayState = 'running';
    document.getElementById('naplus').style.animationPlayState = 'running';
    document.getElementById('labelch3coo_').style.animationPlayState = 'running';

    document.getElementById('illutube').style.animationPlayState = 'running';

    document.getElementById('illutube3').style.animationPlayState = 'running';
    document.getElementById('illutube3-f').style.animationPlayState = 'running';

    document.getElementById('texttube').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop1').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop3').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop1-2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop2-2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop3-2').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop1-3').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop2-3').style.animationPlayState = 'running';
    document.getElementById('bubblecoverop3-3').style.animationPlayState = 'running';
    document.getElementById('b11').style.animationPlayState = 'running';
    document.getElementById('na1').style.animationPlayState = 'running';
    document.getElementById('oh1').style.animationPlayState = 'running';
    document.getElementById('b11-2').style.animationPlayState = 'running';
    document.getElementById('na1-2').style.animationPlayState = 'running';
    document.getElementById('oh1-2').style.animationPlayState = 'running';
    document.getElementById('b11-3').style.animationPlayState = 'running';
    document.getElementById('na1-3').style.animationPlayState = 'running';
    document.getElementById('oh1-3').style.animationPlayState = 'running';
    document.getElementById('texttube1').style.animationPlayState = 'running';
    document.getElementById('texttube-f').style.animationPlayState = 'running';
    document.getElementById('textna').style.animationPlayState = 'running';
    document.getElementById('textinborder').style.animationPlayState = 'running';
    document.getElementById('textoh').style.animationPlayState = 'running';
    document.getElementById('finaltext').style.animationPlayState = 'running';
    document.getElementById('b24').style.animationPlayState = 'running';
    document.getElementById('explain-text').style.animationPlayState = 'running';
    document.getElementById('hplus').style.animationPlayState = 'running';
    document.getElementById('ch2coo2').style.animationPlayState = 'running';
    document.getElementById('bracket').style.animationPlayState = 'running';
    document.getElementById('ch3cooh').style.animationPlayState = 'running';

}
// first round pause
$('#textinborder').on('animationend webkitAnimationEnd oAnimationEnd', function() {
    document.getElementById('startBlue').style.display = 'none';
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('top-left-text').style.display = 'block';
    document.getElementById('nextstext').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'block';
    document.getElementById('firstresumebtn').style.display = 'none';
    document.getElementById('side-cup').style.animationPlayState = 'paused';
    document.getElementById('side-cup-1').style.animationPlayState = 'paused';
    document.getElementById('side-cup-2').style.animationPlayState = 'paused';
    document.getElementById('side-cup-3').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'paused';
    document.getElementById('side-cup-4').style.animationPlayState = 'paused';
    document.getElementById('dropping-water').style.animationPlayState = 'paused';
    document.getElementById('filling-water').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-1').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-1-2').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2-2').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2-text').style.animationPlayState = 'paused';
    document.getElementById('egg-shape-ball-2-text-1').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-1').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-1-2').style.animationPlayState = 'paused';

    document.getElementById('blue-ball-2').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-3').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-3-2').style.animationPlayState = 'paused';
    document.getElementById('blue-ball-2-2').style.animationPlayState = 'paused';

    document.getElementById('b12').style.animationPlayState = 'paused';
    document.getElementById('b13').style.animationPlayState = 'paused';
    document.getElementById('b22').style.animationPlayState = 'paused';
    // document.getElementById('b23').style.animationPlayState = 'paused';
    document.getElementById('bubblelight').style.animationPlayState = 'paused';
    document.getElementById('lighttext').style.animationPlayState = 'paused';

    document.getElementById('illutube').style.animationPlayState = 'paused';

    document.getElementById('illutube3').style.animationPlayState = 'paused';
    document.getElementById('illutube3-f').style.animationPlayState = 'paused';

    document.getElementById('texttube').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop1').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop3').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop1-2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop2-2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop3-2').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop1-3').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop2-3').style.animationPlayState = 'paused';
    document.getElementById('bubblecoverop3-3').style.animationPlayState = 'paused';
    document.getElementById('b11').style.animationPlayState = 'paused';
    document.getElementById('na1').style.animationPlayState = 'paused';
    document.getElementById('oh1').style.animationPlayState = 'paused';
    document.getElementById('b11-2').style.animationPlayState = 'paused';
    document.getElementById('na1-2').style.animationPlayState = 'paused';
    document.getElementById('oh1-2').style.animationPlayState = 'paused';
    document.getElementById('b11-3').style.animationPlayState = 'paused';
    document.getElementById('na1-3').style.animationPlayState = 'paused';
    document.getElementById('oh1-3').style.animationPlayState = 'paused';
    document.getElementById('texttube1').style.animationPlayState = 'paused';
    document.getElementById('texttube-f').style.animationPlayState = 'paused';
    document.getElementById('textna').style.animationPlayState = 'paused';
    document.getElementById('textoh').style.animationPlayState = 'paused';
    document.getElementById('ch3coo_').style.animationPlayState = 'paused';
    document.getElementById('h2o').style.animationPlayState = 'paused';
    document.getElementById('naplus').style.animationPlayState = 'paused';
    document.getElementById('labelch3coo_').style.animationPlayState = 'paused';
    document.getElementById('finaltext').style.animationPlayState = 'paused';
    document.getElementById('b24').style.animationPlayState = 'paused';
    document.getElementById('explain-text').style.animationPlayState = 'paused';
    document.getElementById('hplus').style.animationPlayState = 'paused';
    document.getElementById('ch2coo2').style.animationPlayState = 'paused';
    document.getElementById('bracket').style.animationPlayState = 'paused';
    document.getElementById('ch3cooh').style.animationPlayState = 'paused';

})


$('#oh1-3').on('animationend webkitAnimationEnd oAnimationEnd', function() {
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('firstresumebtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('inactivepausebtn').style.display = 'block';


})





// reset all ------
function reset() {
    location.reload();
}