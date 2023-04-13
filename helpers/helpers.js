export const dateFormat = date => {
    const newDate = new Date(date)
    const options = {
        yer: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('en-EN', options)
}