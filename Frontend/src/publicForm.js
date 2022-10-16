import Card from './Card'
import data from "./data"
import './cards.css'


function PublicForm() {
  let averagePrice = 0
  for (let i = 0; i < data.length; i++){
    averagePrice+= data[i].price
  }
  averagePrice = averagePrice / data.length
  let data1 = []
  let data2 = []
  let counter = 0
  for(let i = 0; i < data.length; i++) {
    data1.push(data[counter])
    counter+=1
  }

  // for(let i = 0; i < data.length - counter; i++){
  //   data2.push(data[counter])
  //   counter+=1
  // }


    const cardsLeft = data1.map(item => {
      return (
        <Card 
        key = {item.id}
        {...item}
        />
      ) 
    })

    // const cardsRight = data2.map(item => {
    //   return (
    //     <Card 
    //     key = {item.id}
    //     {...item}
    //     />
    //   ) 
    // })
  return <>
  <div className='public-page'>
      <section className='cards-Left'>
        {cardsLeft}
      </section>
      {/* <section className='cards-Right'>
        {cardsRight}
      </section> */}
      <div className='avg'>   
        <h1>{averagePrice}</h1>
      </div>
    </div>
  </>
    
}

export default PublicForm;
