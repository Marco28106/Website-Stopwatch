const display = document.getElementById("tampilan")
let timer = null
let mulaiTimer = 0
let timerBerlalu = 0
let timerBerjalan = false

function start () {
    if (!timerBerjalan) {
        mulaiTimer = Date.now() - timerBerlalu
        timer = setInterval (update, 10)
        timerBerjalan = true
    }
}

function stop () {
    if (timerBerjalan)
        clearInterval(timer)
        timerBerjalan = false
}

function reset () {
    clearInterval(timer);
    timerBerjalan = false;
    timerBerlalu = 0;
    display.textContent = "00:00:00:00"
}

function update() {
    const timerSekarang = Date.now()
    timerBerlalu = timerSekarang - mulaiTimer

    let jam = Math.floor(timerBerlalu / (1000 * 60 * 60))
    let menit = Math.floor(timerBerlalu / (1000 * 60) % 60)
    let detik = Math.floor(timerBerlalu / (1000 )%60)
    let milidetik = Math.floor(timerBerlalu % 1000 /10)

    jam = String(jam).padStart(2, "0")
    menit = String(menit).padStart(2, "0")
    detik = String(detik).padStart(2, "0")
    milidetik = String(milidetik).padStart(2, "0")
    display.textContent=`${jam}:${menit}:${detik}:${milidetik}`
}