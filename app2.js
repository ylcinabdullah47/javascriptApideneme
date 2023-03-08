const randomString = Math.random().toString(36).slice(2);
console.log(randomString);

document.querySelector(".div").innerHTML =randomString;




// arkaplan rengi değiştirme

// const input = document.getElementById('name')

// input.addEventListener('input' , e =>{
//     console.log("test123" ,e.target.value)
// });

const colorInput = document.getElementById('color-picker')

colorInput.addEventListener('input' ,e =>{
    document.body.style.backgroundColor = e.target.value
});

// const savebtn = document.getElementById('svbtn')
// savebtn.addEventListener('click' ,e=>{
//     console.log(input.value,
//         colorInput.value)
// });






let araba =["bmw", "audi","reno","toyota"];

setTimeout(() => {
    document.querySelector('.kutu').innerHTML =araba;
}, 3000);



function hello(name ,callback) {
     
   console.log(`hello ${name}`)
   callback();  
}

function godbay() {
    console.log("görüşmek üzere")
}

hello("abdullah" ,godbay)




// ajax http öreneği
let mylist = document.querySelector('#list');
const xhr = new XMLHttpRequest();   
xhr.open("GET" ,"https://jsonplaceholder.typicode.com/users")
xhr .onload = function ( ) {

    const response = xhr.responseText;
    document.getElementById('list').innerHTML=JSON.parse(response)
};

xhr.send();

// çalışıyor ama eksik ve eski bilgiler %100 doğru veri akışı yok



// promis örneği test
// erhan hocaya burada nasıl bilgi metni ekleneri sorulacak



// const number = Math.floor(Math.random()*100)
// if (number %2==0) {
//     document.getElementById('number').innerHTML=number;
// }
// else{
//     document.getElementById('number').innerHTML=number;
// }


// const number = Math.floor(Math.random()*100)
// if (number %2==0) {
//     console.log(number ,"sayınız çift")
// }
// else{
//     console.log(number ,"sayınız tek")
// }

    function getRandom() {
        return new Promise((resolve,reject) =>{
            const number = Math.floor(Math.random()*100);
            if (number %2 === 0) {
                    resolve(number);
            }
            else{
                reject(`hata ${number} tek sayıdır`)
            }
        });
    }

    getRandom()
    .then((number) =>
    document.getElementById('numberrr').innerHTML= ("çözümlendi:" + number))

    .catch((error) =>console.log(error)); 
    //alert("hataoluştu")
    // document.getElementById('numberrr').innerHTML=(err));
    // console.log(error));




    //  fetch ile veri alma 

// temeli bu  json çevirme çok önemli 
//     const url = 'https://jsonplaceholder.typicode.com/users/';
//     fetch(url ,{
//         method :'GET'
//     })
//   .then(response => response.json())
//   .then((data) =>{
//      document.getElementById('apitest').innerHTML=(data)})
//   .catch(error => console.error(error));




// burda yaptğım yukarıda apiden gelen verilerin tamamı listleniyordu burda ise sade name listedim


//   const url = 'https://jsonplaceholder.typicode.com/users/';
//   fetch(url, { method: 'GET' })
//   .then(response => response.json())
//   .then(data => {
//     const nameList = document.createElement('ul');
//     data.forEach(user => {
//       const nameListItem = document.createElement('li');
//       nameListItem.textContent = user.name;
//       nameList.appendChild(nameListItem);
//     });
//     document.getElementById('apitest').appendChild(nameList);
//   })
//   .catch(error => console.error(error));
////************************ */



// async ve await kullanımı burada ki görevi setTimeout benzer sunucaudan 
// geri dönüş hızına göre sıralayıp veriryi aktarıyor
// const url = 'https://jsonplaceholder.typicode.com/users/';
// async function getdata() {
//     const response = await fetch(url);
//     const data =await response.json()
//     console.log(data)
// };
//  document.getElementById('apitest').innerHTML= getdata(); //hatalı çalıştı istenilen veri gelmdi
//  getdata();


 const url ='https://jsonplaceholder.typicode.com/users/';
 const getdata = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    // document.getElementById('apitest').innerHTML=data;

    console.log(data)
 }
 getdata();




