const form = document.forms['conatact-form']
const button = document.querySelector('#submit')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
  .then(response => alert('Ok'))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
button.addEventListener('click', () => {
    window.location.href = 'https://payments.cashfree.com/links/F6o2rl94jcs0'
  })