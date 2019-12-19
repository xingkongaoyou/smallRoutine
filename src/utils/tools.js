export function numberic(val, n) {
    var p = Number(val).toFixed(n || 2)
    var array = p.split('.')
    var i = array[0]
    var f = array[1]
    i = i.split('').reverse().join('').match(new RegExp('([A-Za-z0-9]{1,3})+?', 'g')).join(',').split('').reverse().join('')
    return i + '.' + f
  }
