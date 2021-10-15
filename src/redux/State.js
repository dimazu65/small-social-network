
 let rerenderEntireTree = () => {
   console.log('state changed')
 }
 export let state = {
      profilePage: {
        posts:[
          {id:'1', message: 'This is first post', likeCount: '15'},
          {id:'2', message: 'This is second post', likeCount: '22'}
        ],
        newPostText:'Primer text'
      }
      ,
      dialogsPage: {
        dialogs:  [
          { id: 1, name: "John" },
          { id: 2, name: "Fedor" },
          { id: 3, name: "Sasha" },
          { id: 4, name: "Peter" },
        ],
        messages: [
          { id: 1, message: "Hi!" },
          { id: 2, message: "Hi! Guys" },
          { id: 3, message: "Hi! girls" },
          { id: 4, message: "Hi! people" } 
      ]
      }
      

  }
  export const addPost =() =>{
    let newPost ={
      id:5,
      message: state.profilePage.newPostText,
      likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
  }

  export const updateNewPostText =(newText) =>{
    
    state.profilePage.newPostText= newText;
    rerenderEntireTree(state)
  }

  export const subscribe = (observer) => {
    rerenderEntireTree=observer
  }
  