import React from 'react';
import { Box } from '../components/common';
import { Button, StyledText } from '../components/common/basic';
import { useNavigate } from 'react-router-dom';

//store api
// import { adeoApi } from '../store';

function Home() {
    // const result = adeoApi.useGetCourseQuery();

    // console.log(result);

    const navigate = useNavigate();

    return (
        <Box
            backgroundColor={'#00C664'}
            weight={'medium'}
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                style={{
                    height: 450,
                    width: 360,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                <StyledText
                    color="white"
                    weight={400}
                    size={32}
                    align={'center'}
                >
                    Welcome to the Adeo Experience
                </StyledText>
                <StyledText color="white" weight={300} align={'center'}>
                    You currently have NO Subscriptions.
                </StyledText>
                <StyledText color="white" weight={300} align={'center'}>
                    First take a diagnostic testto determine the right course
                    for you.
                </StyledText>
                <Button
                    onClick={() => {
                        console.log('Hi');
                        navigate('/course');
                    }}
                    color={'white'}
                >
                    <StyledText style={{ cursor: 'pointer' }}>
                        Let's Go
                    </StyledText>
                </Button>
            </Box>
        </Box>
    );
}

export default Home;
