function createStars(){
    var stars = [];

    var amountOfStars = 5000;

    for (var i = 0; i < amountOfStars; i++) {
    var li = document.createElement('li');
    li.className = 'star';
    stars.push(li);
    }

    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    //generating the opacity, top, left, values randomly
    var topUpperBound = viewportWidth/2 + viewportWidth*0.8;
    //GET THE DISTANCE FROM CENTER TO CORNER WITH 
    //SQRT(viewportWidth^2 + viewportHeight^2)
    //and work on making the picture rotate from center of page
    var topLowerBound = topUpperBound * -1;

    var skyHeight = viewportHeight/2 + 'px';
    console.log(skyHeight);
    $('.sky').css('height', skyHeight);

    _.each(stars, function (i) {
    
    var top = _.random(topLowerBound,topUpperBound);
    var left = _.random(0,999)/10;
    var backgroundOpacity = _.random(1,10)/10;
    
    i.style.left = left + "%";
    i.style.top = top + "px";
    i.style.background = "rgba(255,255,255," + backgroundOpacity + ")";
    
    //if it's bright enough, give it a glow
    if (backgroundOpacity >= 0.7) {
        i.style.boxShadow = '0 0 5px white';
    }
    });
    let starrySky = document.getElementById(sky);
    // render them onto the page
    stars.forEach((star) => {
        starrySky.appendChild(star);
    })
};
