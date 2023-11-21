const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const personApi1 = () => {
  const personDetails =(person.result);
  console.log(personDetails);
  for (const result of personDetails) {
    console.log(result.age, 'result');
    const name = result.name.common
    console.log(name);
  
  const cardTitle =document.getElementById('card-container')
   const cardDiv = document.createElement('div')
   cardDiv.innerHTML= `
   <div class="col">
   <div class="card h-100">
     <div class="card-body">
       <h5 class="card-title">Person Name :${name} </h5>
       <p class="card-text">Age : ${result.age}</p>
       <p class="card-text">Address : ${result.address.street} <span> ${result.address.house}</span></p>
     </div>
   </div>
 </div>
   `
   cardTitle.appendChild(cardDiv)
}};
personApi1()
