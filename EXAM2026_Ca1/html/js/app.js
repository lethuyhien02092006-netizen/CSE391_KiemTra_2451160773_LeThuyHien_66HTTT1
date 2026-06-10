function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN').format(number) + ' đ';
}
function renderProducts() {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = '';
    products.forEach((product, index) => {
        const tr = document.createElement('tr');
        let statusClass = product.status === 'Còn hàng' ? 'status-in-stock' : 'status-out-of-stock';       
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="font-medium">${product.name}</td>
            <td>${product.category}</td>
            <td>${formatCurrency(product.price)}</td>
            <td><span class="status-badge ${statusClass}">${product.status}</span></td>
        `;
        tableBody.appendChild(tr);
    });
}

window.onload = function() {
    renderProducts();
    const btnAddProduct = document.querySelector('.btn-primary');
    
    btnAddProduct.addEventListener('click', function() {
        const nameInput = document.getElementById('productName');
        const categoryInput = document.getElementById('productCategory');
        const priceInput = document.getElementById('productPrice');
        const statusInput = document.getElementById('productStatus');
    
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name: nameInput.value.trim(),
            category: categoryInput.value,
            price: Number(priceInput.value),
            status: statusInput.value
        };
        products.push(newProduct);       
        renderProducts(); 
        document.getElementById('add-product-form').reset();
    });
};