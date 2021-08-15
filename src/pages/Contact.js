import React  from 'react';

const Contact = () => {

  return (
    <section id="contactme">
    <div className="contactpopupbox">

        <div className="box-left">
          <div className="section-heading"> Contact</div>
          <div className="contactpopupbox-content"> <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchu
            m, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
            <p>E: kunal.choudhary156@gmail.com</p>
            <p>M: (+61) 450136364</p>
          </div>
        </div>
        <div className="box-right">
          <form>
          
              <input id="username" type="text" placeholder="Name" />
              <input id="email" type="text" placeholder="me@example.com" />
              <textarea id="message" placeholder=" Message"></textarea>
               <button className="submit-button">Submit</button>
            
          </form>
      </div>
    </div>
  </section>
  );
};

export default Contact;