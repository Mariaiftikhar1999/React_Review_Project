import React ,{useState} from 'react'

const App = () => {
  // firtstep
  const [review, setReview] = useState([])
  const [count, setCount] = useState()
  const totalletter= 20


  const changeInput =(e)=>{
    const input = e.target.value
    
   
    if(input.length > totalletter) {
      alert("you reached the out of limit")
    }else{
      setCount(input.length)
 
   



    }

  }
  const addReview =()=>{
    const inputText = document.getElementById("input").value
    if(inputText.length > totalletter){
      document.getElementById("hello").innerHTML="you reacher the out of limit"
     }
    const reviews ={
      text:inputText,
      date:new Date().toLocaleDateString()
    }
    setReview([...review, reviews])
    if(inputText.trim()===""){
      alert("Pleaser enter some text in your box")
    }
  
    document.getElementById("input").value="";
    setCount(0)
    


    

  }
const  deleteText =(index)=>{
 
    setReview(review.filter(( i) => i !== index));

}

  return (
    <>
    {/* firtstep */}

    <input type="text" 
    onChange={changeInput}
    id='input'
    className='bg-red-200'
    />
    <button onClick={addReview}>Add Review</button>
    {/* second step  */}
    <div>{
     
      review.map((rev)=>{
        return(
          <>
          <div  >
          <h1>{rev.text}</h1>
          <h2>{rev.date}</h2>
          <h1 id='hello'>{rev.text.length}</h1>
          <button className='bg-green-600 text-white' onClick={()=>deleteText(rev)}>Delete</button>
          </div>
          </>
        )

      })
    }
    

    </div>
   


 


      
    </>

  )
}

export default App
