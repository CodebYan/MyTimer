function clock() {

    const clock = document.querySelector(".clock")
    let sec = 0
    let timer

    function getTimeFromSeconds(seconds) { 

        const date = new Date(seconds * 1000)

        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function startTimer() { 
        timer = setInterval(function(){
            sec++
            clock.innerHTML = getTimeFromSeconds(sec)
        }, 1000)
    }

    document.addEventListener("click", function(e){
        const element = e.target

        if(element.classList.contains("start")) {
            clearInterval(timer)
            startTimer()
            clock.classList.remove("pause__clock")
        }

        if(element.classList.contains("pause")) {
            clearInterval(timer)
            clock.classList.add("pause__clock")
        }

        if(element.classList.contains("reset")) {
            clearInterval(timer)
            sec = 0
            clock.innerHTML = "00:00:00"
            clock.classList.remove("pause__clock")
        }
    })
}

clock()