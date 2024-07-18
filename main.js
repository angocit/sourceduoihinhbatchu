var questions = [
    {imgURL:"./images/1.webp",answer:"phuyen",display:"Phú Yên"},
    {imgURL:"./images/2.jpg",answer:"choide",display:"Chọi dế"},
    {imgURL:"./images/3.jpg",answer:"bodaonha",display:"Bồ Đào Nha"},
    {imgURL:"./images/4.jpg",answer:"dongnai",display:"Đồng Nai"},
    {imgURL:"./images/5.jpg",answer:"soctrang",display:"Sóc Trăng"},
    {imgURL:"./images/6.jpg",answer:"tienganh",display:"Tiếng Anh"},
    {imgURL:"./images/7.jpg",answer:"cadao",display:"Ca Dao"},
    {imgURL:"./images/8.jpg",answer:"mangcut",display:"Măng Cụt"},
]
var position = 0,score = 0,time = 30
var background = document.getElementById("background")
var answer = document.getElementById("answer")
var btnplay = document.getElementById("btn-play")
var btnanswer = document.getElementById("btn-answer")
var timmer = document.getElementById("timmer")
var timecounter
function countdown(){
    timecounter = setInterval(function(){
        time--
        timmer.innerHTML = time
        if (time <0){
            next()
        }
    },1000)
}
function play(){
    countdown()
    btnplay.classList.add("hide")
    // Remove class hide của button answer
    btnanswer.classList.remove("hide")
    var imgURLcurent = questions[position].imgURL
    background.innerHTML = '<img src = "'+imgURLcurent+'"/>'
    var lengthanser = questions[position].answer.length
    for (var i = 0; i < lengthanser; i++){
        //Tạo thẻ input
        var input = document.createElement('input')
        input.setAttribute('maxlength',1)
        answer.appendChild(input)
    }
}
function answerfn(){
    var inputs = document.querySelectorAll('#answer input')
    var answer = ''
    inputs.forEach(function(input){
        // console.log(input.value);
        answer+=input.value
    })
    answer = answer.toLowerCase()
    if (answer==questions[position].answer){
        var scorebytime = Math.ceil(time/10)
        score +=scorebytime
        alert('Bạn đã trả lời chính xác. Đáp án là: '+questions[position].display)
    }
    else {
        alert('Bạn đã trả lời chưa chính xác. Đáp án là: '+questions[position].display)
    }
    next()
}
function next(){
    position++
    clearInterval(timecounter)
    time = 30
    answer.innerHTML = ''
    if (position<questions.length)
        {
            play()
        }
    else {
        background.innerHTML = 'Trò chơi kết thúc. Số điểm của bạn là: '+score 
        btnanswer.classList.add("hide")
        btnplay.classList.remove("hide")
        position = 0
    }
    
    
}
