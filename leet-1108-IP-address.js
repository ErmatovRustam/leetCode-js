var defangIPaddr = function(address) {
    return address.split('').map(el => el === '.' ? '[.]' : el).join('')
};

// replaceAll('.', '[.]')   didnt work