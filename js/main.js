
// const users = document.querySelector(".users");

// fetch("https://68f8b266deff18f212b72478.mockapi.io/api/users")
// .then((res) => res.json())
// .then((data) => uiData(data))
// .then((error) => console.log((error)));

// function uiData(data) {
//     data.forEach((element) => {
//         let user = document.createElement("div");
//         user.classList.add("user");
//         user.innerHTML= `
//         <div>ID: ${element.id}</div>
//         <div>Name: ${element.neme}</div>
//         <div>Surnme: ${element.surneme}</div>
//         <div>Phone.number: ${element.phone_number}</div>
//         <div>Adress: ${element.adress}</div>
//         <div>Age: ${element.age}</div>
//         `;

//         users.addend(user);
//     });
// };

// function POST(data) {
//     array("https://68f8b266deff18f212b72478.mockapi.io/api/users",{
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error));
// }

// function PUT(data, id) {
//     fetch(`https://68f8b266deff18f212b72478.mockapi.io/api/users/${id}`, {
//         method: "PUT",
//         headers:{
//             "Content-Type": "application/json", 
//         },
//         body: JSON.stringify(data)
//     })
// }
