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
  function validateForm() {
    // Get all input fields
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var number = document.getElementById("number").value;
    var zip = document.getElementById("zip").value;

    // Check if all fields are filled
    if (name == "" || address == "" || city == "" || state == "" || number == "" || zip == "") {
      alert("Please fill in all fields.");
      return false;
    }

    // If all fields are filled, redirect to payment.html
    return true;
  }

  async function loadProduct(productId) {
    const response = await fetch('products.json');
    const products = await response.json();
    const product = products.find(p => p.id === productId);
  
    if (!product) return;

    // Populate the HTML with product details
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-dealer').textContent = product.dealer;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('main-image').src = product.mainImage;

    // Load color options
    const colorOptions = document.getElementById('color-options');
    product.colorOptions.forEach(color => {
        const option = document.createElement('option');
        option.textContent = color;
        colorOptions.appendChild(option);
    });

    // Load size options
    const sizeOptions = document.getElementById('size-options');
    product.sizes.forEach(size => {
        const option = document.createElement('option');
        option.textContent = size;
        sizeOptions.appendChild(option);
    });

    // Load thumbnail images
    const thumbnailImages = document.getElementById('thumbnail-images');
    product.thumbnailImages.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.className = 'imgside';
        thumbnailImages.appendChild(imgElement);
    });
}

// Load the product with ID 1
loadProduct(1);

