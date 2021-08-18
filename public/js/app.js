console.log('JS file in public folder loaded!')

const wForm = document.querySelector('form')
const inpBox = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')


wForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const address = inpBox.value
    msg1.textContent = 'Loading...'
    msg2.textContent = ''

    fetch('/weather?address=' + address).then((res) => {
        res.json().then((data) => {
            console.log("data : ", data)
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }
        })
    })

})