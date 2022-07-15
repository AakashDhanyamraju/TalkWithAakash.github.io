import React from 'react'
import emailjs from 'emailjs-com'



const Mailer = () => {

    const sendEmail = (e)=>{
      e.preventDefault()
      emailjs.sendForm('service_0dvhd26','template_w80lpql', e.target,'kC1ZYKD0OoFO0iPJ_').then(res=>{
        console.log(res)
      }).catch(err=>console.log(err.message))
    }


  return (
    <div>
        {/* <h1>Contact Form</h1>
        <form onSubmit={sendEmail} >
            <label for='name' >Name: </label>
            <input type='name' name='name' id='name' />

            <label for='email' >Email: </label>
            <input type='email' name='email' id='email' />

            <label for='message' >Message: </label>
            <textarea id='message' name='message' rows='4' />
            <input  type='submit' value='send' />
        </form> */}
        <div class="content">
    
    <div class="container">

      
      <div class="row justify-content-center">
        <div class="col-md-10">
          
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">

              <h2 class="mb-5">Fill the form. <br /> It's easy.</h2>

              <form class="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm" onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="fname" id="fname" placeholder="First name"/>
                  </div>
                  <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="lname" id="lname" placeholder="Last name"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="email" id="email" placeholder="Email"/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4"/>
                    <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>

            </div>
            <div class="col-lg-4 ml-auto">
              <h3 class="mb-4">Let's talk about everything.</h3>
              
            </div>
          </div>
        </div>  
        </div>
      </div>
  </div>

    </div>
  )
}

export default Mailer