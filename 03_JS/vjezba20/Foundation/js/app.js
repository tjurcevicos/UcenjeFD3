$(document).foundation()

$('#promjeniNaslov').click(function(){
    $('#naslov').text('Dobrodošli')
    return false
})

$('#promjeniBoju').dblclick(function(){
    $('.callout.primary').css('background-color','gray')
    return false
})
