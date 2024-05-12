
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled
} from '@ant-design/icons';
import { Flex, Layout } from 'antd';
import './App.css';
import { AboutCard } from './components/AboutCard.tsx';
import { Fact } from './components/Fact.tsx';

function App() {
  
  const { Header, Footer, Content } = Layout;

  const experienceDescription: string = 'Soy desarrolladora de software y tengo 3 años de experiencia en el desarrollo de aplicaciones web.Me apasiona crear interfaces de usuario intuitivas, escalables y eficientes. Siempre estoy buscando nuevas formas de mejorar la calidad del código y la experiencia del usuario.'
  const stackDescription: string = 'En mi stack principal tengo Typescript, React, AntDesign, Java y Spring aún así me gusta investigar y he desarrollado proyectos personales con Vue, Angular y Python.';

  return (
    <>
      <Layout>
        <Header style={{backgroundColor: 'white', height: '75vh', textAlign: 'center'}}>
              <Flex align='center' vertical>
                  <div style={{width: '300px', height: '300px', overflow: 'hidden', borderRadius: '50%', marginTop: '3rem'}}>
                      <img src='https://github.com/caterinarodriguezdev/who-am-i/blob/main/who-am-i/src/assets/profile.png' style={{width: '115%', height: 'auto'}} alt='profile picture'></img>
                  </div>
                  <h1>¡Hola! Soy Caterina</h1>
                  <p>
                      Soy Desarrolladora Web FullStack, actualmente centrada en el frontend
                  </p>
                    <Flex gap='24px'>
                      <a href='https://github.com/caterinarodriguezdev' className='links' target='_blank'>
                        <GithubFilled style={{fontSize: '1.7rem'}}/>
                      </a>
                      <a href='https://www.instagram.com/caterinarodriguezdev/' className='links' target='_blank'>
                        <InstagramFilled style={{fontSize: '1.7rem'}}/>
                      </a>
                      <a href='https://www.linkedin.com/in/caterinabergas/' className='links' target='_blank'>
                        <LinkedinFilled style={{fontSize: '1.7rem'}}/>
                      </a>
                    </Flex>
              </Flex>
              <img src='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/triangle.png' className='triangle1' alt='triangle'/>
              <img src='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/triangle.png' className='triangle2'alt='triangle'/>
        </Header>
        <Content style={{height: '80vh', width: '100%', backgroundColor: 'white'}}>
            <Flex align='center' vertical>
              <h2>Sobre mí</h2>
              <Flex justify='space-evenly'>
                <Fact icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/basket.png' text='Juego a basquet'/>
                <Fact icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/padthai.png' text='Me encanta el padthai'/>
                <Fact icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/b6328767c54a0e45ab340cb0a9f70867b0b89f2b/who-am-i/src/assets/loki.svg' text='Mi perro se llama Loki'/>            
              </Flex>
              <AboutCard title='MI EXPERIENCIA' icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/bag.png' description={experienceDescription}/>
              <AboutCard title='MI STACK' icon='https://raw.githubusercontent.com/caterinarodriguezdev/who-am-i/main/who-am-i/src/assets/stack.png' description={stackDescription}/>
            </Flex>
        </Content>
        <Footer style={{backgroundColor: 'black', color: 'white', textAlign: 'left', padding: '1rem 0'}}>
          <h2>Caterina Rodríguez</h2>
          <p>Desarrolladora de Software</p>
        </Footer>
      </Layout>
    </>
  ) 
}

export default App
