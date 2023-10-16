const formatDate = (jam, x)=> {

    const date = new Date(x);
    const hour = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    const day = String(date.getDate()).padStart(2, '0');
    const month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ][date.getMonth()];
    const year = date.getFullYear();

    return jam ? `${hour} - ${day} ${month} ${year}` : `${day} ${month} ${year}`;
}


export default formatDate;