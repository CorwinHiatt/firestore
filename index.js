import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import admin from './admin.js';

initializeApp({
    credential:cert(admin)
})

const db = getFirestore()


 const newPet = { 
     Name:'mikey',
    Species:'mouse',
    size: 'small',
    ownerNum: '9713339999',
    location:''
}


function getPets(){
    db.collection('Pets').doc('7SQRpPYLzxdMJoyD10vs').get()
    .then(doc => console.log(doc.data))
    .catch(console.error)
}

     db.collection('Pets')
     .doc('7SQRpPYLzxdMJoyD10vs')
     .update({name: 'Bella', gender:'F' })
     .then(() => console.log(getPets()))
     .catch(console.error)

    
    // )
    //.then(collection => {
     //   collection.docs.forEach(doc => {
      //    console.log(doc.id, doc.data())
       // })
     // })
        
//db.collection('Pets').get()

 

//.catch(console.error)



//db.collection('Pets').add(newPet)
//db.collection('Pets').get('Pets')

//.then(doc => console.log('Profile:',doc.id))
//.catch(console.error)



// .then(collection => {
//     const allPets = collection.doc.forEach(doc => doc.data())
//     console.log(doc.data())
// }
// )
// .catch(error => console.log(error)) 



/* 1. create and connect to a firestore database ~check
2. Create a database for a pet boutique 
    3. customers, pets, and products
    (create atleast 2 docs in each collection)
    via nodejs
    4. write code to query : list all pets, customers, products
    5. update 1 pet & 1 product  */
    
    
    
//     db.collection('Pets').get()
//   // reshape the collection
//   .then(collection => {
//     collection.docs.forEach(doc => {
//       console.log(doc.id, doc.data())
//     })
//   })
//   .catch(console.error)


// db.collection('Pets').where('name:', '==', 'iggy').update({ size: 'xxl' })
    
    
    
    
    
    
    
    
    
    
    
    
    
    //const customers = {
    //    name: 'corwin',
    //    lname: 'hiatt',
    //    phone: '9712679344',
    //    email: 'cc.hiatt@yahoo.com',
    //  
    //}
    //
    //db.collection('Petstore').add(customers)
    // .then(doc => console.log('Game created: ',doc.id))
    //.catch(console.error)