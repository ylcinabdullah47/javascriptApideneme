const postlist = document.querySelector(".post-list")
const url ='https://jsonplaceholder.typicode.com/posts';
const postUI = (posts) =>{
    let result = "";
    posts.forEach(post => {
        result+= ` 
        <li class="post-item">
        <div class="post-boyd">
            <span class="post-id">posta id: <b>${post.id}</b></span>
            <strong class="post-title">${post.title}</strong>
            <p class="post-content">${post.body}</p>
        </div>
        <button class="post-button">Okumaya devam et</button>
    </li>`;
  
    });
      postlist.innerHTML = result;
};  

// bu kısımda hata yaptım sadace içindeki typeof alığ ojbe oldğunu yazıdırıyr
// async function getpost() {
//     const response = await fetch(url)
//     const data = await response.json()
//     document.querySelector('.container').innerHTML=data;
// }
// getpost();



const getdata = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        postUI(data);
}

getdata();


