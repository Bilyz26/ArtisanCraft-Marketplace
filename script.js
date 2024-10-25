

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');

sidebar.style.display='flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display='none';
}


document.getElementById('category-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.best-selling-product');

    let productsArray = Array.from(products);

    productsArray.forEach(product => {
        const category = product.getAttribute('category');
        if (categoryFilter === 'all' || category === categoryFilter) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });

   
}