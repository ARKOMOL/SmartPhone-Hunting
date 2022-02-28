
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
            <button onclick="exploreNow('${phone.slug}')" > Show Details</button>

        </div>
        `;
        searchResult.appendChild(div);
      
     
    })
  
}

/*==============Explore Part=============*/

const  exploreNow = phoneSlug =>{
    console.log(phoneSlug)
   const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`
//    console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(data =>displayPhoneDetails(data))
   
}

/*===========displayPhoneDetails=============*/

const displayPhoneDetails = phone =>{
    // console.log(phone)

const showDetails = document.getElementById('phone-details')
    const div = document.createElement('div');
    div.classList.add('col');
    
    div.innerHTML = `
    <div class="card w-50 h-100 align-center text-center">
        <img  src="${phone.data.image}" class="card-img-top img-fluid w-100 " alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.data.mainFeatures.storage}</h5>
            <h5 class="card-title">${phone.data.mainFeatures.displaySize}</h5>
            <h5 class="card-title">${phone.data.mainFeatures.chipSet}</h5>
            <h5 class="card-title">${phone.data.mainFeatures.memory}</h5>
            <h5 class="card-title">${phone.data.mainFeatures.sensors}</h5>
            <h5 class="card-title">${phone.data.releaseDate}</h5>
           
            
          
        </div>

    </div>
    `;
    showDetails.appendChild(div);
  

}
