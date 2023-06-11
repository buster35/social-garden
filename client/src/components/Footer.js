import './footer.css'
import Alert from 'react-bootstrap/Alert'


function Footer() {

  return (
      <footer className='footer'>
      <p>A full stack MERN app built by 
        <Alert.Link className='link' variant="light" href="https://potteramy.github.io/portfolio-react/"> Amy Potter, </Alert.Link>
        <Alert.Link className='link' variant="light" href="https://github.com/JHelton404">Jon Helton, </Alert.Link>
        <Alert.Link className='link' variant="light" href="https://annamarlena.github.io/react-portfolio/">Marlena Keller, </Alert.Link>
        <Alert.Link className='link' variant="light" href="https://github.com/morrispg">Patrick Morris, </Alert.Link><>and </>
        <Alert.Link className='link' variant="light" href="https://aqueous-island-13402.herokuapp.com/">Zach Gilbert</Alert.Link></p>
      </footer>
  );
} 

export default Footer