var canvas, ctx;
var center_x, center_y, radius, bars;
var x_end, y_end, bar_height, bar_width;
var frequency_array;

bars = 360;
bar_width = 2;

function initPage(){
    audio = new Audio();
    context = new (window.AudioContext || window.webkitAudioContext)(); // DOES NOT WORK ON CHROME DUE TO AUTOPLAY POLICY CHANGES; SEE: https://goo.gl/7K7WLu
    analyser = context.createAnalyser();
    
    audio.src = "assets/Gummiband.mp3";
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);

    frequency_array = new Uint8Array(analyser.frequencyBinCount);

    audio.play();
    animationLooper();
}

function animationLooper() {
    // set canvas to size of device
    canvas = document.getElementById("renderer");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    ctx = canvas.getContext("2d");

    // find center of window
    center_x = canvas.width /2;
    center_y = canvas.height / 2;
    radius = 150;

    // style background
    // make dynamic by using highest occuring frequency band
    var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0,"rgba(35,7,77,1)");
    gradient.addColorStop(1,"rgba(204,83,51,1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // draw circle
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    ctx.stroke();

    // draw bars
    analyser.getByteFrequencyData(frequency_array);

    //bar(); // ORIGINAL
    radial();
    window.requestAnimationFrame(animationLooper);
}

function drawBar(ctx,x,y,x_end,y_end,bar_width,frequency) {
    var lineColor = "rgb(" + frequency + "," + frequency + "," + 205 + ")";

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = bar_width;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x_end,y_end);
    ctx.stroke();
}

function bar() {
    for(let i = 0; i < bars; i++) {
        rads = (2 * Math.PI) / bars;
        bar_height = frequency_array[i] * 0.7;

        x = center_x + Math.cos(rads * i) * radius;
        y = center_y + Math.sin(rads * i) * radius;
        x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
        y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

        drawBar(ctx,x,y,x_end,y_end,bar_width,frequency_array[i]);
    }
}

function lowRadial() {
    let band = Math.floor(frequency_array.length / 3);
    let sum = 0;

    for(let freq = 0; freq < Math.floor(band); freq++) {
        sum = sum + frequency_array[freq];
    }

    var loAgg = sum / band;
    return loAgg;
}

function midRadial() {
    let band = Math.floor(frequency_array.length / 3);
    let sum = 0;

    for(let freq = band; freq < (2 * band); freq++) {
        sum = sum + frequency_array[freq]
    }

    var midAgg = sum / band;
    return midAgg;
}

function highRadial() {
    let band = Math.floor(frequency_array.length / 3);
    let sum = 0;

    for(let freq = Math.floor(2 * band); freq < (3 * band); freq++) {
        sum = sum + frequency_array[freq];
    }

    var hiAgg = sum / band;
    return hiAgg;
}

function drawRadialBand(centerX, centerY, totalRadius, color = "rgb(0,0,0)", width = 1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width

    ctx.beginPath();
    ctx.arc(centerX, centerY, totalRadius, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawRadial(hiAgg, midAgg, loAgg) {
    // DRAW A CIRCLE FOR EACH Agg VALUE
    // DRAW FROM hi TO lo
    // NO FILL FOR NOW; SET THICKNESS OF ARC INSTEAD
    // ADD PARAMETER PANEL
    //
    // TODO: UPDATE COLORS WITH FREQUENCY BASED; COMPOSE FORMULA
    
    let loRadius = radius + loAgg;
    let midRadius = loRadius + midAgg;
    let hiRadius = midRadius + hiAgg;

    drawRadialBand(center_x, center_y, hiRadius);
    drawRadialBand(center_x, center_y, midRadius);
    drawRadialBand(center_x, center_y, loRadius);
}

function radial() {
    loAgg = lowRadial();
    midAgg = midRadial();
    hiAgg = highRadial();

    drawRadial(loAgg, midAgg, hiAgg);
}
