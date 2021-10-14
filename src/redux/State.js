 
 let state = {
      profilePage: {
        posts:[
          {id:'1', message: 'This is first post', likeCount: '15'},
          {id:'2', message: 'This is second post', likeCount: '22'}
        ]
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
  export default state;