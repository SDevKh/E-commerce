const sidebarImages = document.querySelectorAll('.sidebar img');
const mainImage = document.querySelector('.mainimg');

  sidebarImages.forEach((img) => {
    img.addEventListener('click', () => {
        sidebarImages.forEach((sImg) => sImg.classList.remove('active'));
        img.classList.add('active');
        mainImage.src = img.src;
    });
  });

  function loadProductData(product) {
    document.querySelector('#product-name').textContent = product.name;
    document.querySelector('#product-description').textContent = product.description;
    document.querySelector('#product-price').textContent = `₹${product.price}`;
    document.querySelector('#product-color').textContent = product.color;
    document.querySelector('#product-size').textContent = product.size;
  }
  
  const productData = {
    name: 'Goku Oversized T-Shirt',
    description: 'Pack of one oversized t-shirt round neck with a back print of Goku character. Soft Cotton with excellent comfort.',
    price: 16029,
    color: 'Maroon-Old Blk',
    size: 'M',
  };
  
  loadProductData(productData);

  const sizeSelect = document.querySelector('#size-select')
  const button = document.querySelector('#submit')
  
  button.addEventListener('click', () => {
    const selectedSize = sizeSelect.value
    const data = {
      size: selectedSize
    }
  
    fetch('https://script.google.com/macros/s/AKfycbxuwcuflZXc5cTMzu0rKptHxk6B75tHDjqF3-jfAOoq8iQCpb20SVv0a6ZKCskSvApc/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
   .then(response => alert('Ok'))
   .then(() => { window.location.reload(); })
   .catch(error => console.error('Error!', error.message))
  })