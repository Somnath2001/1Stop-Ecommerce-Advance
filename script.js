
// for feedback collection
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZJVorGDFsW8M5gRr8jB6POkJsOtVtq5RaYF0T8cyQ990zJYhs8SwJINV-osWxQTl1Nw/exec'
            const form = document.forms['submit-feedback']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Feedback! Hope you had a great Shopping with us..."))
                .catch(error => console.error('Error!', error.message))
            })

            // $("#navbarToggle").blur(function (event) {
            //   var screenWidth = window.innerWidth;
            //   if (screenWidth < 768) {
            //     $("#collapsable-nav").collapse('hide');
            //   }
            // });
        
          