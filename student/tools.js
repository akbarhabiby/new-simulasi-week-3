const validation = (obj) => {
    let result = []

    if(!obj.name) result.push('Name is required')
    if(!obj.phase) result.push('Phase is required')
    if(!obj.likeMcd) result.push('Like Mcd is required')

    return result.join(', ')
}

module.exports = validation