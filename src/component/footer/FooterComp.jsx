import React,  { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import '../../component/footer/FooterComp.css'
const FooterComp = (props) => {
return <Fragment>  
        <Container fluid className="container-footer">
        <footer className="page-footer font-small pt-4">
          <div className="container-fluid text-md-left">
            <div className="row">
              <div className="col-md-6">
                <h4>Tentang</h4>
                <p className="text-justify">
                  { props.about }
                </p>
              </div>

              <div className="col-md-3 mb-3">
                <h4>Sosial Media</h4>
                <ul className="list-unstyled">
                  <li>
                    <SocialMediaIconsReact backgroundColor="#fff" borderColor="#000" borderStyle="solid" borderWidth="2" roundness="8px" iconColor="#000"  iconSize="5" icon="facebook" iconSize="5" url={ props.facebook } /> Facebook
                  </li>
                  <li>
                    <SocialMediaIconsReact style={{ margin: 'auto'}} backgroundColor="#fff" borderColor="#000" borderStyle="solid" borderWidth="2" roundness="8px" iconColor="#000"  iconSize="5" icon="twitter" url={ props.twitter} /> Twitter
                  </li>
                  <li>
                    <SocialMediaIconsReact backgroundColor="#fff" borderColor="#000" borderStyle="solid" borderWidth="2" roundness="8px" iconColor="#000"  iconSize="5" icon="instagram" iconSize="5" url={ props.instagram} /> Instagram
                  </li>
                  <li>
                    <SocialMediaIconsReact backgroundColor="#fff" borderColor="#000" borderStyle="solid" borderWidth="2" roundness="8px" iconColor="#000"  iconSize="5" icon="youtube" iconSize="5" url={ props.youtube } /> Youtube
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-3">
                <h4>Kontak</h4>
                <ul className="list-unstyled">
                  <li>
                  <SocialMediaIconsReact backgroundColor="#fff" borderColor="#000" borderStyle="solid" borderWidth="2" roundness="8px" iconColor="#000"  iconSize="5" icon="phone" iconSize="5"/> { props.contact }
                  </li>
                  <li>
                  <SocialMediaIconsReact backgroundColor="#fff" borderColor="#000" borderStyle="solid" borderWidth="2" roundness="8px" iconColor="#000"  iconSize="5" icon="mail" iconSize="5"/> { props.mail }
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#"> KKN-PPM UGM</a>
          </div>
        </footer>
        </Container>
        </Fragment>
}

FooterComp.defaultProps={
  about:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  facebook:'#',
  twitter:'#',
  instagram:'#',
  youtube:'#',
  contact:'+62xxxxxxxxxxx',
  mail:'xxx@gmail.com'
}


export default FooterComp;

