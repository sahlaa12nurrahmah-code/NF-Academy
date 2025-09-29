export default function Contact() {
    return(
        <>
            <div class="container px-4 py-5" id="Contact">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3"> 
              <div class="col d-flex align-items-start"> 
                <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"> </div> 

                <div> 
                  <h3 class="fs-2 text-body-emphasis">Email us At</h3> 
                  <p>Stay in touch! Send us an email and let’s connect.</p> 
                  <a href="#" class="btn btn-primary">Email</a> 
                </div> 
              </div> 
              
              <div class="col d-flex align-items-start"> 
                <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div> 

                <div> 
                  <h3 class="fs-2 text-body-emphasis">Our Office</h3> 
                  <p>Located in the heart of the city, our office is ready for you.</p> 
                  <a href="#" class="btn btn-primary">Location details</a> 
                </div> 
              </div>
              
              <div class="col d-flex align-items-start"> 
                <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div> 

                <div> 
                  <h3 class="fs-2 text-body-emphasis">Social Media</h3> 
                  <p>See what we’re up to—follow us on social media.</p> 
                  <a href="#" class="btn btn-primary">Follow Us!</a> 
                </div> 
              </div>
            </div>
          </div>
        </>
    )
}