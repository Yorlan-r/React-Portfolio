import React, {useState} from "react";

export default function Contact() {
  const[formState, setFormState] = useState({
    name: "",
    message: ""
  })
  function handleSubmit(event){
    event.preventDefault()
    if(formState.name!=""&&formState.message!=""){
      window.location.href="mailto:Yorlan_Ramirez5493@hotmail.com?subject="+formState.name+"&body="+formState.message
    }
    else{
      alert("All fields must be filled out")
    }
  }
  return (
    <section id="Contact">
      <div class="grid-container">
        <div class="card justify-content-center">
          <h4>Contact</h4>
          <form>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              required
              placeholder="name@example.com"
            />
            <label for="floatingInputDisabled">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
            name="name"
            value={formState.name}
            onChange={(event)=> setFormState({...formState, name:event.target.value})}
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextareaDisabled"
              required
            ></textarea>
            <label for="floatingTextareaDisabled">Name</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
            name="message"
            value={formState.message}
            onChange={(event)=> setFormState({...formState, message:event.target.value})}
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2Disabled"
              required              
            ></textarea>
            <label for="floatingTextarea2Disabled">Message</label>
          </div>
          <input type="submit" onClick={handleSubmit} class="btn btn-success"/>
          </form>
        </div>
      </div>
    </section>
  );
}
