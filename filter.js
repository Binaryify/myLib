const search = (searchContent, arr) => {
  if (searchContent&&arr) {
    return arr.filter(item => {
      return Object.keys(item).some(key => {
        return String(product[key]).toLowerCase().indexOf(searchContent) > -1
      })
    })
  }
  return arr
}
const json = [{ title: 'a', name: 'h' }, { title: "b" }, { title: "a" }]
const result = search('a', json)
console.log(result)