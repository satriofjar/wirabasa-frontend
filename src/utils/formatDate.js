const formatDate = (x)=> {

    const date = new Date(x);
    const day = String(date.getDate()).padStart(2, '0');
    const month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ][date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}


export default formatDate;