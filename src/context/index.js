import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

// api services
import fetchAdeoData from '../services';

// lib
import { htmlToText } from '../lib/string';

const CourseContext = createContext({});

const Provider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [isFetchingCourse, setIsFetchingCourse] = useState(false);

    const getAdeoData = async (navigate) => {
        try {
            setIsFetchingCourse(true);

            const { data } = await fetchAdeoData();

            setIsFetchingCourse(false);

            const temp = data.filter((item, index) => {
                const { text } = item;

                const question = htmlToText(text);

                return question !== '';
            });

            setQuestions(temp.slice(0, 20));

            navigate('/course');
        } catch (e) {
            setIsFetchingCourse(false);
        }
    };

    const saveAnswer = () => {
        questions[currentQuestion].answer = selectedAnswer;

        const qtn = [...questions];

        qtn[currentQuestion].answer = selectedAnswer;

        setQuestions(qtn);

        setSelectedAnswer(-1);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <CourseContext.Provider
            value={{
                questions,
                getAdeoData,
                currentQuestion,
                setCurrentQuestion,
                saveAnswer,
                selectedAnswer,
                setSelectedAnswer,
                isFetchingCourse,
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

CourseContext.ProviderWrapper = Provider;

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CourseContext;
