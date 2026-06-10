function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN').format(number) + ' đ';
}

function renderProducts(){
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = '';
    products.forEach((product, index) => {
        const tr = document.createElement('tr');
        let statusClass = product.status === "Còn hàng" ? 'status-in-stock' : 'status-out-of-stock';
    }
    )

}

































