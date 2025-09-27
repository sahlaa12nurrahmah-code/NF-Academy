import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        {/*Header*/}
        <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
          <div className='col-md-3 mb-2 mb-md-0'>
            <a href="/" className='d-inline-flex align-items-center link-body-emphasis text-decoration-none'>
            <i className="fa-solid fa-book fa-xl" style={{ color: "#7e5ddf" }}></i>
            <span className='ms-2 fs-4' style={{ color: "#7e5ddf" }}>Old Times Literia</span>
            </a>
          </div>

          <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
            <li><a href='#Home' className='nav-link px-2' style={{ color: "#7e5ddf" }}>Home</a></li>
            <li><a href='#Books' className='nav-link px-2' style={{ color: "#7e5ddf" }}>Books</a></li>
            <li><a href='#Team' className='nav-link px-2' style={{ color: "#7e5ddf" }}>Team</a></li>
            <li><a href='#Contact' className='nav-link px-2' style={{ color: "#7e5ddf" }}>Contact</a></li>
          </ul>

          <div className='col-md-3 text-end'>
            <button type='button' className='btn btn-outline-primary me-2'>I'm Back</button>
            <button type='button' className='btn btn-primary'>Sign me Up!</button>
          </div>
        </header>

        {/*Hero*/}
        <div id='Home' className="px-4 pt-5 my-5 text-center border-bottom"> 
          <h1 className="display-4 fw-bold text-body-emphasis">We Sell Original Sealed Old Books Only For You!</h1> 
          <div className="col-lg-6 mx-auto"> 
            <p className="lead mb-4">Welcome to Old Times Literia, a haven for book lovers who cherish the charm of timeless stories. Here, every page whispers nostalgia,
              every cover holds a piece of history, and every book invites you to journey through the beauty of the past while creating new memories for the future.</p> 
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> 
              <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">It is Real?</button> 
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">I Want It!</button> 
            </div> 
          </div> 
          <div className="overflow-hidden">
            <div className="container px-5"> 
              <img 
                src="https://www.thepublicdiscourse.com/wp-content/uploads/2023/09/BOOKS.jpg" 
                className="img-fluid border rounded-3 shadow-lg mb-4" 
                alt="Example image" 
                width="700" 
                height="500" 
                loading="lazy"
              /> 
            </div> 
          </div>
        </div>

        {/*Book List*/}
        <section id='Books' className="py-5 text-center container"> 
          <div className="row py-lg-5"> 
            <div className="col-lg-6 col-md-8 mx-auto"> 
              <h1 className="fw-light">Our Precious Collection</h1> 
              <p className="lead text-body-secondary">Discover the treasured collection at Old Times Literia, where vintage classics and timeless reads await. From rare editions to beloved masterpieces, our shelves are filled with stories that bring the elegance of the past into your hands today.</p> 
            </div> 
          </div> 
        </section> 
        
          <div className="album py-5 bg-body-tertiary"> 
            <div className="container"> 
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
                <div className="col"> 
                  <div className="card shadow-sm"> 
                    <img src="https://m.media-amazon.com/images/I/71QFvLwy0EL._UF1000,1000_QL80_.jpg" alt="Thumbnail" className="bd-placeholder-img card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

                    <div className="card-body">
                      <b>The Old, Old Story: A Novel (Classic Reprint) by Rosa Nouchette Carey</b> 
                      <p className="card-text">When Lady Car died, it was understood that her husband was a broken-hearted man that for him the joys and ambitions of life had crumbled to pieces in his wife's grave...</p> 
                      <div className="d-flex justify-content-between align-items-center"> 
                        <div className="btn-group"> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button> 
                        </div> 
                        <small className="text-body-secondary">510 pages</small> 
                      </div> 
                    </div> 
                  </div> 
                </div>

                <div className="col"> 
                  <div className="card shadow-sm"> 
                    <img src="https://m.media-amazon.com/images/I/71i8rPdSoPL._SY425_.jpg" alt="Thumbnail" className="bd-placeholder-img card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

                    <div className="card-body">
                      <b>The Old Man and Sea: Om Illustrated Classics by Ernest Hemingway</b> 
                      <p className="card-text">For old man Santiago, catching the biggest Marlin in the deep sea has become an obsession. But even after 84 days at sea, the deprived old man is unable...</p> 
                      <div className="d-flex justify-content-between align-items-center"> 
                        <div className="btn-group"> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button> 
                        </div> 
                        <small className="text-body-secondary">240 pages</small> 
                      </div> 
                    </div> 
                  </div> 
                </div> 

                <div className="col"> 
                  <div className="card shadow-sm"> 
                    <img src="https://m.media-amazon.com/images/I/41r-5v+EhdL._SY445_SX342_FMwebp_.jpg" alt="Thumbnail" className="bd-placeholder-img card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

                    <div className="card-body">
                      <b>The Call of the Wild by Jack London</b> 
                      <p className="card-text">This triumphant tale of survival follows the adventures of Buck, half-St. Bernard and half-Scottish sheepdog, who is forced into the brutal life of a sled-dog during the heady days...</p> 
                      <div className="d-flex justify-content-between align-items-center"> 
                        <div className="btn-group"> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button> 
                        </div> 
                        <small className="text-body-secondary">64 pages</small> 
                      </div> 
                    </div> 
                  </div> 
                </div>

                <div className="col"> 
                  <div className="card shadow-sm"> 
                    <img src="https://m.media-amazon.com/images/I/712ynoUzRBL._SY425_.jpg" alt="Thumbnail" className="bd-placeholder-img card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

                    <div className="card-body">
                      <b>The Silver Ladies of Penny Lane: An absolutely hilarious feel good novel by Dee MacDonald</b> 
                      <p className="card-text">Tess and Orla have been best friends throughout most of their adult lives. So when life gave them lemons and their loved ones let them down...</p> 
                      <div className="d-flex justify-content-between align-items-center"> 
                        <div className="btn-group"> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button> 
                        </div> 
                        <small className="text-body-secondary">312 pages</small> 
                      </div> 
                    </div> 
                  </div> 
                </div>

                <div className="col"> 
                  <div className="card shadow-sm"> 
                    <img src="https://m.media-amazon.com/images/I/81JbbziMfiL._SY425_.jpg" alt="Thumbnail" className="bd-placeholder-img card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

                    <div className="card-body">
                      <b>The Wisteria Society of Lady Scoundrels (Dangerous Damsels) by India Holton</b> 
                      <p className="card-text">Cecilia Bassingwaite is the ideal Victorian lady. She's also a thief. Like the other members of the Wisteria Society crime sorority, she flies around England drinking...</p> 
                      <div className="d-flex justify-content-between align-items-center"> 
                        <div className="btn-group"> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button> 
                        </div> 
                        <small className="text-body-secondary">226 pages</small> 
                      </div> 
                    </div> 
                  </div> 
                </div>

                <div className="col"> 
                  <div className="card shadow-sm"> 
                    <img src="https://m.media-amazon.com/images/I/51PQZU1w9kL._SY445_SX342_FMwebp_.jpg" alt="Thumbnail" className="bd-placeholder-img card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>

                    <div className="card-body">
                      <b>Pride and Prejudice(Masterpiece Library Edition) by Jane Austin</b> 
                      <p className="card-text">Elizabeth Bennet and the wealthy Mr. Darcy as they overcome their initial personal flaws—his pride and her prejudice—to find love in a society where marriage is a primary concern or women like Elizabeth and her four sisters...</p> 
                      <div className="d-flex justify-content-between align-items-center"> 
                        <div className="btn-group"> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button> 
                          <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button> 
                        </div> 
                        <small className="text-body-secondary">400 pages</small> 
                      </div> 
                    </div> 
                  </div> 
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <section id="Team" className="container marketing py-5">
            <div className="row">
              <div className="col-lg-4 text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtvCOr2gdLs_zZdrNIYMelJRneBSntQCJi2g-lXb6to5QVdR9" alt="Team Member" className="bd-placeholder-img rounded-circle mb-3" width="140" height="140"/>
                <h2 className="fw-normal">Watanabe Haruto</h2>
                <p>Lead developer passionate about building scalable web apps.</p>
                <p><a className="btn btn-secondary" href="#">Get to know &raquo;</a></p>
              </div>

              <div className="col-lg-4 text-center">
                <img src="https://files.shapes.inc/api/files/avatar_cb11b302-b433-41a4-a020-25226d5a4bb8.png" alt="Team Member" className="bd-placeholder-img rounded-circle mb-3" width="140" height="140"/>
                <h2 className="fw-normal">Aeri Uchinaga</h2>
                <p>Creative designer who brings ideas to life visually.</p>
                <p><a className="btn btn-secondary" href="#">Get to know &raquo;</a></p>
              </div>

              <div className="col-lg-4 text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5qXDbxmJS5lISbQDJ1NQPRLACwEnuJWOimIgNzEptyMGm8yoxmnL6YQWXXg9bpM8uac&usqp=CAU" alt="Team Member" className="bd-placeholder-img rounded-circle mb-3" width="140" height="140"/>
                <h2 className="fw-normal">Keonho</h2>
                <p>Marketing strategist dedicated to connecting with audiences.</p>
                <p><a className="btn btn-secondary" href="#">Get to know &raquo;</a></p>
              </div>
            </div>
          </section>

          {/*Contact*/}
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

          {/*Footer*/}
          <div className="container"> 
            <footer className="py-3 my-4"> 
              <p className="text-center text-body-secondary">&copy; 2025 Asa guided by NF Academy</p> 
            </footer> 
          </div>
      </div>
    </>
  )
}

export default App
