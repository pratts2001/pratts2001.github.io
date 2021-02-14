function Image (year) {
   
    var ActiveButtonYear = year + "button";
            
    $('.YearsButton').removeClass('active');
    $('.' + ActiveButtonYear).addClass(' active');

    $('.MainImageContainer').hide();
    
    $('.' + year).show();

    $('.' + year + " .buttonrow .AllButton").click();
}

function Cards (year,attr) {

    var ActiveButton = attr + "Button";

    $('.ImageNavButton').removeClass('active');
    $('.' + ActiveButton ).addClass(' active');

    $('.FinalImageContainer').hide();
    
    $('.' + year + ' .' + attr).show();
        
}

$(document).ready(function() {
    
    $('.2020button').click();
    
});






    