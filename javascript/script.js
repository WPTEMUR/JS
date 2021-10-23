const product = {
    plainBurger:{
        name: 'GAMBURGER',
        price: 10000,
        kcall: 250,
        amount: 0,
        get SUMMA(){
            return this.price * this.amount
        },
        get KCALL(){
            return this.kcall * this.amount
        }
    },
    freshBurger:{
        name: 'GAMBURGER FRESH ',
        price: 21000,
        kcall: 350,
        amount: 0,
        get SUMMA(){
            return this.price * this.amount
        },
        get KCALL(){
            return this.kcall * this.amount
        }
    },
    freshCombo:{
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 500,
        amount: 0,
        get SUMMA(){
            return this.price * this.amount
        },
        get KCALL(){
            return this.kcall * this.amount
        }
    }
}

const plusOrmius = document.querySelectorAll('.main__product-btn')
plusOrmius.forEach(function(el){
    el.addEventListener('click', function(){
        pOm(el)
    })
})

function pOm(element) {
    let parent = element.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let attr = element.getAttribute('data-symbol')
    let number = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')

    if (attr === '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    }else if (attr === '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    number.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].SUMMA
    kcall.innerHTML = product[parentId].KCALL
}


const extra = document.querySelector('.header__timer-extra')
const productM = document.querySelectorAll('.main__product-info')
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')

let timer = 40


function Timer() {
    
    let interval =
    
    
    
    setInterval(() => {

        extra.innerHTML++
        
        if (extra.innerHTML == 100) {
            clearInterval(interval)
        }else if (extra.innerHTML > 98) {
            clearInterval(interval)
            timer = 1500
            Timer(timer)
        }else if (extra.innerHTML > 95) {
            clearInterval(interval)
            timer = 300
            Timer(timer)
        }else if (extra.innerHTML > 85) {
            clearInterval(interval)
            timer = 150
            Timer(timer)
        }else if (extra.innerHTML > 70) {
            clearInterval(interval)
            timer = 80
            Timer(timer)
        }else if (extra.innerHTML > 45) {
            clearInterval(interval)
            timer = 30
            Timer(timer)
        }
    }, timer);
    
}
Timer()



productM.forEach(function(el) {
    el.addEventListener('click', function (e) {
        productM.forEach(function (el) {
            view.classList.remove('active')
        })
        view.querySelector('img').src = this.querySelector("img").src
        view.classList.add('active')
        
    }) 
})


viewClose.addEventListener('click', function (e) {
    productM.forEach(function(el){
        view.classList.remove('active')
    })
})