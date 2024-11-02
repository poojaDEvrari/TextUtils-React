import React  from 'react'

export default function About(props) {
  let mYstyle=
  {color:props.mode==='dark'?'white':'#1a232b',
    backgroundColor: props.mode==='dark'? '#1a232b':'white',
    border:'1px solid',
  borderColor: props.mode==='dark'?'white':'#1a232b'}
   
  
  return (
    <>
  


        
        <div className='container my-3'>
        <h2 style={{color:props.mode==='dark'?'white':'#1a232b'}}>About us </h2>
        <div class="accordion" id="accordionExample">
    <div className="accordion-item"style={mYstyle}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={mYstyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Analyze Your text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        
        <div className="accordion-body">
        TextUtils app analyzes text by providing functionalities such as word count, character count, and the ability to convert text case. It aims to assist users in manipulating and understanding textual content efficiently.
        </div>
      </div>
    </div>
    <div className="accordion-item"style={mYstyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed"style={mYstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Free to Use
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        TextUtils is designed to be freely accessible to all users, ensuring everyone can benefit from its features without any cost barriers. Enjoy unlimited access to its tools and functionalities without any subscription fees or in-app purchases, making it a versatile tool for all your text manipulation needs.
        </div>
      </div>
    </div>
    <div className="accordion-item"style={mYstyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button"style={mYstyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatible
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        For the TextUtils app, ensuring browser compatibility is crucial to reach a wide audience. Testing and optimizing for various browsers like Chrome, Firefox, Safari, and Edge will enhance user accessibility and functionality across different platforms and devices. This approach ensures a seamless experience regardless of the browser users prefer.
        </div>
      </div>
    </div>
  </div>


  </div>
  </>
  )
}
