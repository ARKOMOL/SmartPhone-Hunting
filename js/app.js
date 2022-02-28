
const searchPhones = ()=>{
    const searchField = document.getElementById('search-box');
    const searchText = searchField.value;
    searchField.value= '';
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    fetch(url)
    .then(res => res.json())
    .then(data =>displaySearchResult(data.data))
}
// searchPhones()
const displaySearchResult = phones =>{
    // console.log(phones)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    phones.forEach(phone =>{
        console.log(phone);
    })
  


}