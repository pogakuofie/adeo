import React from 'react';

// components
import { Box } from './';
import { StyledText } from './basic';

const LoadingDialog = () => {
    return (
        <Box
            backgroundColor={'rgb(0,0,0,0.7)'}
            style={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: 'absolute',
                alignItems: 'center',
            }}
        >
            <Box
                backgroundColor={'white'}
                height={450}
                width={360}
                style={{
                    padding: 10,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                <StyledText weight={400} size={32} align={'center'}>
                    Loading your Adeo Experience...
                </StyledText>
                <StyledText weight={300} align={'center'}>
                    A personalize set of question to test your <br />
                    super powers.
                </StyledText>
                <StyledText weight={300} align={'center'}>
                    Feel free to grab a cup of <br />
                    coffe ☕ while we are at it.
                </StyledText>
            </Box>
        </Box>
    );
};

export default LoadingDialog;
