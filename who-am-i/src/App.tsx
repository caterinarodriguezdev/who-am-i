
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled
} from '@ant-design/icons';
import { Row, Col, Layout } from 'antd';
import './App.css';
import { AboutCard } from './components/AboutCard.tsx';
import { Fact } from './components/Fact.tsx';

function App() {
  
  const { Header, Footer, Content } = Layout;

  const experienceDescription: string = 'Soy desarrolladora de software y tengo 3 años de experiencia en el desarrollo de aplicaciones web. Me apasiona crear interfaces de usuario intuitivas, escalables y eficientes. Siempre estoy buscando nuevas formas de mejorar la calidad del código y la experiencia del usuario.'
  const stackDescription: string = 'En mi stack principal tengo Typescript, React, AntDesign, Java y Spring aún así me gusta investigar y he desarrollado proyectos personales con Vue, Angular y Python.';

  return (
    <Layout>
        <Header style={{ minHeight: '40rem', backgroundColor: 'white', padding: '2rem', overflow: 'hidden' }}>
          <Row>
            <Col span={24}>
              <img
                src='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/profile.png'
                style={{borderRadius: '50%', width: '300px', height: 'auto'}}
                alt='profile picture'
                />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h1>¡Hola! Soy Caterina</h1>
              <p>Soy Desarrolladora Web FullStack, actualmente centrada en el frontend</p>
              <a href='https://github.com/caterinarodriguezdev' target='_blank'>
                <GithubFilled className='links' />
              </a>
              <a href='https://www.instagram.com/caterinarodriguezdev/' target='_blank'>
                <InstagramFilled className='links' />
              </a>
              <a href='https://www.linkedin.com/in/caterinabergas/' target='_blank'>
                <LinkedinFilled className='links' />
              </a>
            </Col>
          </Row>
         
              <img
                src='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/triangle.png'
                className='triangle1'
                alt='triangle'
              />
              <img
                src='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/triangle.png'
                className='triangle2'
                alt='triangle'
              />
     
        </Header>
        <Content style={{ padding: '2rem', backgroundColor: 'white' }}>
          <Row justify='center' align='middle'>
            <Col span={24}>
              <h2>Sobre mí</h2>
            </Col>          </Row>
          <Row justify='center' gutter={16} style={{flexWrap: 'wrap'}}>
            <Col md={24} lg={8} className='fact-container'>
              <Fact icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/basket.png' text='Juego a basquet' />
            </Col>       
            <Col md={24} lg={8} className='fact-container'>
              <Fact icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/padthai.png' text='Me encanta el padthai' />
            </Col>     
            <Col md={24} lg={8} className='fact-container'>
              <Fact icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/b6328767c54a0e45ab340cb0a9f70867b0b89f2b/who-am-i/src/assets/loki.svg' text='Mi perro se llama Loki' />
            </Col>
          </Row>
          <Row justify='center'>
            <Col>
              <AboutCard
                title='MI EXPERIENCIA'
                icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/bag.png'
                description={experienceDescription}
              />
              <AboutCard
                title='MI STACK'
                icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/stack.png'
                description={stackDescription}
              />
            </Col>
          </Row>
        </Content>
        <Footer style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}>
          <Row justify='center' align='middle'>
            <Col span={12}>
              <h2>Caterina Rodríguez</h2>
              <p>Desarrolladora de Software</p>
            </Col>
          </Row>
        </Footer>
    </Layout>
  );
}

export default App
