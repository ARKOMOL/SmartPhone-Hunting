
const searchPhones = ()=>{
    const searchField = document.getElementById('search-box');
    const searchValue = searchField.value;
    searchField.value= '';
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data))
}
