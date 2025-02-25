function QuotesApp() {
  return (
    <div className='container'>
        <div className='quote-app'>
            <h1 className='app-header'>Quote.</h1>
            <i className='bx bxs-heart fav-icon'></i>
            <div className='quote'>
              <i className='bx bxs-quote-alt-left left-quote'></i>
              <p className='quote-text'>“The only way to do great work is to love what you do.”</p>
              <p className='quote-author'>- Steve Jobs</p>
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
              <button className='btn btn-new'>
                New Quote
              </button>
              <button className='btn btn-fav'>
                Add to Favorite
              </button>
            </div>
        </div>
    </div>
  )
}

export default QuotesApp
