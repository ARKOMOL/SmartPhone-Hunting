
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
   .then(data =>displayPhoneDetails(data.data))
   
}

/*===========displayPhoneDetails=============*/

const displayPhoneDetails = phone =>{
    // console.log(phone)

const showDetails = document.getElementById('phone-details');
showDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    
    div.innerHTML = `
    <div class=" card h-100">
        <img src="${phone.image}" class="card-img-top" alt=""/>
        <div class="card-body">
        <h3 class="card-text">${phone.name}</h3>
    <h5 class="card-text">${phone.releaseDate }|| ${phone.releaseDate!='<h5>not found</h5>'}</h5>


        <h4 class="text-info">Main Features</h4>
            <h5 class="card-title">${phone.mainFeatures.storage}</h5>
            <h5 class="card-text">${phone.mainFeatures.chipSet}</h5>
            <h5 class="card-text">${phone.mainFeatures.displaySize}</h5>
            <h5 class="card-text">${phone.mainFeatures.memory}</h5>
            <h4 class="text-info">Sensors</h4>
            <h5 class="card-text">${phone.mainFeatures.sensors}</h5>
          
           

    <h4 class="text-info">Others</h4>
        <h5 class="card-text">${phone.others?.WLAN}</h5>
        <h5 class="card-text">${phone.others?.Bluetooth}</h5>
        <h5 class="card-text">${phone.others?.GPS}</h5>
        <h5 class="card-text">${phone.others?.NFC}</h5>
        <h5 class="card-text">${phone.others?.Radio}</h5>
        <h5 class="card-text">${phone.others?.USB}</h5>
        </div>

    </div>
    `;
    showDetails.appendChild(div);
  

}
