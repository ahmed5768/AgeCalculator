var calculates = document.getElementById('cal')
var months = document.getElementById('month')
var day = document.getElementById('days')
var years = document.getElementById('year')

function calculate(value){
var birthDate = document.getElementById('date')
if(birthDate.value){
    var dateOfBirth = new Date(birthDate.value)
    var newDate = new Date()
    var age = newDate - dateOfBirth 
    var finalAge = Math.floor(age / (365.25 * 24* 60* 60* 1000))
    years.innerHTML = finalAge
    
    var ageMonth = Math.floor(finalAge * 12)
    months.innerHTML = ageMonth

    var ageDay = Math.floor(
        finalAge * 365.5 + (newDate.getDate() - dateOfBirth.getDate()))
        day.innerHTML = ageDay
}else{
    alert("Invald Date")
}
}

