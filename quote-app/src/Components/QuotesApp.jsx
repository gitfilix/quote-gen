import { useState } from "react"
import './QuotesApp.css'



const QuotesApp = (props) => {
  const appTitle = props.title || 'no title found';
  const [quote, setQuote] = useState({
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    category: 'Motivational'
  })

  const apiKey = import.meta.env.VITE_REACT_APP_NINJA_API_KEY || 'no api key found';


  const fetchNewQuote = async () => {
    // try this api
    const url = 'https://api.api-ninjas.com/v1/quotes'
    const requestOptions = {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    }

    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      console.log('response:', response)
      console.log('data:', data)
      console.log('status:', response.status)

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return
      }
      if (response.status === 200) {
        setQuote({
          text: data[0]?.quote || 'The only way to find out why there is not quote is to analyze the code. - Unknown',
          author: data[0]?.author || 'Unknown',
          category: data[0]?.category || 'Uncategorized'
        })
      }
    } catch (error) {
      console.error('Error fetching quote:', error)
    }
  }


  return (
    <div className='container'>
      <div className='quote-app'>
        <h1 className='app-header'>{appTitle}.</h1>
        <i className='bx bxs-heart fav-icon'></i>
        <p className='quote-category'>About: {quote.category}</p>
        <div className='quote'>
          <i className='bx bxs-quote-alt-left left-quote'></i>
          <p className='quote-text'>{quote.text}</p>
          <p className='quote-author'>- {quote.author}</p>
          <i className='bx bxs-quote-alt-right right-quote'></i>
        </div>
        <div className='circles'>
          <div className='circle-1'></div>
          <div className='circle-2'></div>
          <div className='circle-3'></div>
          <div className='circle-4'></div>
          <div className='circle-5'></div>
        </div>
        <div className='buttons'>
          <button className='btn btn-new' onClick={fetchNewQuote}>
            New Quote
          </button>
          <button className='btn btn-fav'>
            Add to Favorite
          </button>
        </div>
        <div className="favorites">
          <button className="btn-close">
            <i className='bx bx-x'></i>
          </button>
          <div className="fav-quote">
            <div className="fav-quote-delete">
              <i className='bx bx-x-circle'></i>
            </div>
            <div className="fav-quote-content">
              <div className="fav-quote-text">
                The only way to do great work is to love what you do.
              <div className="fav-quote-author">
                Steve Jobs
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotesApp
