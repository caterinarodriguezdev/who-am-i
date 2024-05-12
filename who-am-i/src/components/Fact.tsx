import { Card, Flex } from 'antd'
import React from 'react';
import './Fact.css'

interface FactProps {
    icon: string;
    text: string;
}

export const Fact: React.FC<FactProps> = ({icon, text}) => {

    return (
        <Card className='card'>
            <Flex justify='space-evenly' align='center'>
                <img style={{width: '24px', height: '24px'}} src={`./src/assets/${icon}`} alt={`icon ${icon}`}/>
                <p>{text}</p>
            </Flex>
        </Card>
    );
}