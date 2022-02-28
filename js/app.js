
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

/*=========DisplayPhone=============== */

const displaySearchResult = phones =>{
    // console.log(phones)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    phones.slice(0,20).forEach(phone =>{
    //   console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.slug}</p>

            </div>
       
        </div>
        `;
        searchResult.appendChild(div);
      
     
    })
  
}

