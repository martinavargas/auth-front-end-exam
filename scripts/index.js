window.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const form = document.querySelector('form')
    const p = document.querySelector('p')
  
    form.addEventListener('submit', (event) => {
      event.preventDefault()
  
      const data = {
        email: email.value,
        password: password.value,
      }
  
      fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(({ token, refreshToken }) => {
          if (token && refreshToken) {
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('refresh', refreshToken)
            window.location.href = '/pages/admin.html'
          } else {
            p.textContent = 'Invalid credentials. Try again.'
          }
        })
        .catch(error => {
            console.log(error)
        })
    })
  })
  