 import { useEffect, useState } from 'react';
 import { useParams } from 'react-router-dom';
 import axios from 'axios';
 import { BOOK_DETAILS_URL } from '../API';

 function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  console.log(id)

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`).then((res) => setBook(res.data));
  }, [])

   return (
     <div>
        <h3 className="book-title">{book.title}</h3>
        <img className="book-image" src={book.image_url} alt="#" />
        <p>{book.description}</p>
     </div>
   )
 }

 export default BookDetails