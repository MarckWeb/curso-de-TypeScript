//Descripción de una API de JavaScript mediante una interfaz

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

async function fetchPosts(url: string) {
   let response = await fetch(url);
   let body = await response.json();
   console.log(body)

   // Devuelve el cuerpo tipado como un array de objetos Post

   //Se está diciendo a TypeScript que trate la variable body como si fuera un array de objetos de tipo Post

   //se espera que cada elemento del array body en un objeto de tipo 
   return body as Post[];

   //cuando se dice body as Post[], se está indicando que se espera que body sea un array donde cada elemento del array es un objeto que cumple con la estructura definida por la interfaz Post
}

async function showPost() {
   let posts = await fetchPosts(fetchURL);
   // Display the contents of the first item in the response
   let post = posts[0];
   console.log('Post #' + post.id)
   // If the userId is 1, then display a note that it's an administrator
   console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
   console.log('Title: ' + post.title)
   console.log('Body: ' + post.body)
}

showPost();



