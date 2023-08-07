import { Badge } from '@chakra-ui/react';
import React from 'react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 90 ? 'green' : score > 50 ? 'yellow' : 'red';

    return (
        <Badge fontSize='14px' colorScheme={color} paddingX={2}>
            {score}
        </Badge>
    );
};

export default CriticScore;
