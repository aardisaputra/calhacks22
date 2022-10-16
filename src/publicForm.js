import Card from './Card'
import data from "./data"
import './styles.css'


function publicForm() {
    var averagePrice = 0
    for (let i = 0; i < data.length; i++){
      averagePrice+= data[i].price
    }
    averagePrice = averagePrice / data.length
    const cards = data.map(item => {
      return (
        <Card 
        key = {item.id}
        avg = {averagePrice}
        {...item}
        />
      ) 
    })
  return <>
    <section className='cards-list'>
      {cards}
    </section>
  </>
    
}

export default publicForm;
