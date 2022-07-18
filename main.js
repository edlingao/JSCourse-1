const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;
  let opacity = 1;
  const toast = document.querySelector('.toast')
  toast.classList.remove('hide')
  toast.querySelector('.text').innerText = `Welcome ${email}`;
  
  const interval = setInterval(() => {
    opacity = opacity - 0.1;
    toast.style = `opacity: ${opacity}`;

    if(opacity <= -0.1) {
      toast.classList.add('hide')
      clearInterval(interval)
    }
  }, 250)

})