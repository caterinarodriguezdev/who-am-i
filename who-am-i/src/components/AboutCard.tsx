import {Card, Flex} from 'antd'
import './AboutCard.css'

interface AboutCardProps {
  title: string;
  description: string;
  icon: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({title, description, icon}) => {

    return (
        <Flex justify='center' vertical>
          <Card className='card-title'>
              <Flex justify='flex-start' align='center'>
                <img style={{width: '24px', height: '24px', marginRight: '1rem'}} src={icon} alt={`icono para ${title}`}/>
                <p>{title}</p>
              </Flex>
          </Card>
          <text className='text'>
            {description}
          </text>
        </Flex>
    );
}