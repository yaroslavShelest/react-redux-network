import React , {useState} from "react";
import { Button , Modal } from "react-bootstrap";

import img from "../../assets/img/modal_img.jpg"
import "./Footer.scss";

const ModalButton = ()=>{
  const [smShow, setSmShow] = useState(false);
  return(
<>
  <Button  variant="danger" onClick={() => setSmShow(true)}>Открыть важную информацию</Button>
      <Modal
        size="-sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title--sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title--sm">
          <b>Доброго времени суток, дружище!!!</b> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Меня зовут Ярик и я начинающий Front end(<b>Rect.JS</b>) developer!!....<br/>
        Не пугайся этого приложения. Я понимаю,что это приложение-мутант,но я тут пробую разные техники и методики 
        для своего самообучения и развития в этой области! Я буду его расширать почутка изучая технологии, и как
        же мне сделать различный функционал.. <br/>
        Успехов тебе! <br/>
        <div>
        <img width='100%' src={img} alt='Developing' />
        </div>
        </Modal.Body>
      </Modal>
      </>
  )
}

const Footer = () => {
  function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
 }

 let timeRef = React.createRef();
 
 setInterval(
  () => timeRef.current.innerHTML = getCurrentTimeString(),
  1000
);
  return (
    <footer className="footer">
      <div className="container d-flex ">
        <i>
          © 2020 Приложение разработано в тестовых целя,чтобы потренировать
          Front end разработку
        </i>
        <ModalButton />  <div className='show_date' ref={timeRef} > </div> 
       
       
      </div>
    </footer>
  );
};

export default Footer;
