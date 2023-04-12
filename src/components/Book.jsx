import React from 'react';
import book from '../images/book.jpg'

export default function Book() {
  return (
    <div className='Events'>
        <div className='container-fluid'>
            <div className='ea'>
                <h5>BOOK A TABLE</h5>
                <h2>BOOK<span> YOUR STAY </span> WITH US</h2>
            </div>
            <div className='book'>
                <div>
                    <img src={book}/>
                </div>
                <div className='ia'>

                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Your Name" name="email"></input>
                        </div>
                        <div class="col">
                            <input type="password" class="form-control" placeholder="Your Email" name="pswd"></input>
                        </div>
                        <div class="col">
                            <input type="password" class="form-control" placeholder="Your Number" name="pswd"></input>
                        </div>
                    </div>
                    <div className='ib'>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Your Name" name="email"></input>
                            </div>
                            <div class="col">
                                <input type="password" class="form-control" placeholder="Your Email" name="pswd"></input>
                            </div>
                            <div class="col">
                                <select class="form-select" id="sel1"  name="sellist1">
                                <option># of People</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>More than 8</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-3">
                         <textarea class="form-control" rows="4" id="comment" placeholder="Message" name="text"></textarea>
                     </div>
                     <div className='bookbut'>
                     <button type="button" class="btn btn-danger">Book a Table</button>
                     </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}
