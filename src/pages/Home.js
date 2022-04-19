import React, { useEffect } from 'react';
import { Box, LoadingDialog } from '../components/common';
import { Button, StyledText } from '../components/common/basic';
import { useNavigate } from 'react-router-dom';

// hooks
import useCourse from '../hooks';

// theme
import { primaryColor } from '../theme/';

function Home() {
    const { getAdeoData, isFetchingCourse } = useCourse();

    const navigate = useNavigate();

    useEffect(() => {}, []);

    return (
        <>
            {isFetchingCourse && <LoadingDialog />}
            <Box
                backgroundColor={primaryColor}
                style={{
                    height: '100vh',
                    width: '100vw',
                    alignItems: 'center',
                }}
            >
                <Box
                    height={450}
                    width={360}
                    style={{
                        padding: 10,
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
                        First take a diagnostic test to determine the right
                        course for you.
                    </StyledText>
                    <Button
                        onClick={() => {
                            getAdeoData(navigate);
                        }}
                        color={'white'}
                    >
                        <StyledText style={{ cursor: 'pointer' }}>
                            Let's Go
                        </StyledText>
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default Home;
