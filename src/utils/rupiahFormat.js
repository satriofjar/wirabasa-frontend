
const rupiahFormat = (amount) => {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        maximumFractionDigits: 0 
    }).format(amount);
}

export default rupiahFormat;