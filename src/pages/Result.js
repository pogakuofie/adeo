import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { Button, StyledText } from '../components/common/basic';
import { Box, ToggleSwitch } from '../components/common/';
import { ResultStats, TopicCard } from '../components/course';

// hooks
import useCourse from '../hooks/';

function Result() {
    const { questions } = useCourse();

    const navigate = useNavigate();

    return (
        <Box
            padding={0}
            style={{
                height: '100vh',
                width: '100vw',
            }}
        >
            <Box
                backgroundColor={'#F6F6F6'}
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <ResultStats />
                <Box
                    padding={1}
                    width={180}
                    height={1}
                    backgroundColor={'white'}
                />
                <Box>
                    <Button
                        height={35}
                        color="white"
                        backgroundColor={'#2589CE'}
                        style={{
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        }}
                        borderWidth={0}
                    >
                        <StyledText>Topics</StyledText>
                    </Button>
                    <Button
                        height={35}
                        color="white"
                        backgroundColor={'#2A9CEA'}
                        style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                        borderWidth={0}
                    >
                        <StyledText>Questions</StyledText>
                    </Button>
                </Box>
                <Box style={{ flexDirection: 'column' }}>
                    <Box
                        style={{
                            alignSelf: 'flex-end',
                            paddingBottom: 10,
                        }}
                        padding={0}
                    >
                        <ToggleSwitch lable={'%'} />
                    </Box>
                    <TopicCard topic={'Cell'} />
                    <TopicCard topic={'Density'} />
                    <TopicCard topic={'Density'} />
                    <TopicCard
                        color={'white'}
                        backgroundColor={'#2A9CEA'}
                        topic={'Matter'}
                    />
                </Box>
            </Box>
            <Box
                backgroundColor={'#2D3E50'}
                style={{ flex: 2, alignItems: 'flex-start' }}
            >
                <Box style={{ flexDirection: 'column' }}>
                    <StyledText
                        color="white"
                        weight={400}
                        size={32}
                        align={'center'}
                        style={{ marginTop: 100 }}
                    >
                        This was a free diagnostic test
                    </StyledText>
                    <StyledText
                        margin={50}
                        color="white"
                        weight={300}
                        align={'center'}
                    >
                        Buy a subscription to unlock the entire course
                    </StyledText>
                    <Box padding={20}>
                        <Button
                            margin={10}
                            radius={5}
                            backgroundColor={'#07C4FF'}
                            borderColor={'#07C4FF'}
                            onClick={() => {}}
                            color={'white'}
                        >
                            <StyledText style={{ cursor: 'pointer' }}>
                                Store
                            </StyledText>
                        </Button>
                        <Button
                            margin={10}
                            radius={5}
                            backgroundColor={'#FF8071'}
                            borderColor={'#FF8071'}
                            onClick={() => {
                                navigate('/');
                            }}
                            color={'white'}
                        >
                            <StyledText style={{ cursor: 'pointer' }}>
                                Home
                            </StyledText>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Result;
