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
