import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact({img, name, tel}) {
  return (
      <div className='contactContainer'>
          <div className="imageContainer">
              <img src={img}  alt=""></img>
          </div>

          <div className="contactInfo">
              <h2>{name}</h2>
              <h2>{tel}</h2>
          </div>
      </div>
  )
}

export default Contact

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component


   
  //  const getData = data.map((object, objNumb) => { 
  //    console.log(object);
  //    return (
  //      <Card1
  //        key={objNumb}
  //        img={object.img}
  //        name={object.name}
  //        telephone={object.telephone}
  //        // price={object.price}
  //        // creator={object.creator}
  //      />
  //    )
  //  })

// function getData({  img, name, telephone  })  {
//     return (
//         <div className='Contactslist'>
//             <div className="title">
//                 <h1>Contacts</h1>
//             </div>

            
//          <Contact/>
//         </div>
//     )
// }
//     return (
//         <div className='contactContainer'>
//             <div className="imageContainer">
//                 <img src={nft} alt="Contact Image"></img>
//             </div>

//             <div className="contactInfo">
//                 <h2>Elon Musk</h2>   <h2 className=''></h2>
//                 <h2>1-888-518-3752.</h2><h2 className=''></h2>
//             </div>
  

//         </div>
//     )
// }

// export default Contact
