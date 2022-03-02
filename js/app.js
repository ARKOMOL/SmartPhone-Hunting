/*==========error message===========*/
document.getElementById('error-message').style.display = 'none';
document.getElementById('error-message2').style.display = 'none';

/*===============main part started===================*/

/*spiner  */

const spinerToggle = displayspiner =>{
    document.getElementById('spiner').style.display = displayspiner;
}



const searchPhones = ()=>{
    const searchField = document.getElementById('search-box');
    const searchText = searchField.value;
    searchField.value= '';
    spinerToggle('block')
    // document.getElementById('error-message').style.display = 'none';
  
    if(searchText=== ''){
        document.getElementById('error-message').style.display = 'block';
       
    }

    else{
        const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    fetch(url)
    .then(res => res.json())
    .then(data =>displaySearchResult(data.data))
    document.getElementById('error-message').style.display = 'none';
    }
}
// searchPhones()

/*=========DisplayPhone=============== */


const displaySearchResult = phones =>{
    // console.log(phones)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // condition 
    if (phones.length === 0) {
        document.getElementById('error-message2').style.display = 'block';}
        
else{
    
    phones?.slice(0,20).forEach(phone =>{
        //   console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col');
            
            div.innerHTML = `
            <div class="card h-100 pt-2 shadow ">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.phone_name}</h5>
        
    
                </div>
                <button onclick="exploreNow('${phone.slug}')"  class = "rounded-3 bg-info my-3 mx-5 text-light h6 p-2"> Show Details</button>
    
            </div>
            `;
            searchResult.appendChild(div);
          
            spinerToggle('none')
        })
        document.getElementById('error-message2').style.display = 'none';

}

  
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
    <div class=" card h-100 shadow rounded-3 py-4 px-2">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt=""/>
        <div class="card-body">
        <h3 class="card-text">${phone.name}</h3>
        <h4 class="card-title">${phone.brand}</h4>
        <h5 class="text-warning">${phone.releaseDate ? phone.releaseDate: ' Date not found'}</h5>


        <h4 class="text-info">Main Features</h4>
            <h5 class="card-title">${phone.mainFeatures.storage}</h5>
            <h5 class="card-text">${phone.mainFeatures.chipSet}</h5>
            <h5 class="card-text">${phone.mainFeatures.displaySize}</h5>
            <h5 class="card-text">${phone.mainFeatures.memory}</h5>
            <h4 class="text-info">Sensors</h4>
            <h5 class="card-text">${phone.mainFeatures.sensors}</h5>
          
           

    
            <div >

            <h4 class="text-info text-center">Others</h4>
            <h5 class="card-text">WLAN : ${phone.others ?phone.others.WLAN:'not found'}</h5>
            <h5 class="card-text">Bluetooth :${phone.others ?phone.others.Bluetooth:'not found'}</h5>
            <h5 class="card-text">GPS :${phone.others ? phone. others.GPS:'not found'}</h5>
            <h5 class="card-text">NFC :${phone.others ? phone.others.NFC:'not found'}</h5>
            <h5 class="card-text">Radio :${phone.others ?phone.others.Radio:'not found'}</h5>
            <h5 class="card-text"> USB :${phone.others ?phone.others.USB:'not found'}</h5>
        </div> 
        </div> 

    </div>
    
    `;
    showDetails.appendChild(div);
  
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('error-message2').style.display = 'none';

}

