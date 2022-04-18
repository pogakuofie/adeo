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
    const [startTime, setStartTime] = useState();
    const [timeCompleted, setTimeCompleted] = useState(0);
    const [courseScore, setCourseScore] = useState(0);

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

            setQuestions(temp.slice(0, 3));

            navigate('/course');

            setStartTime(Date.now());
        } catch (e) {
            setIsFetchingCourse(false);
        }
    };

    const saveAnswer = (navigate) => {
        questions[currentQuestion].answer = selectedAnswer;

        const qtn = [...questions];

        qtn[currentQuestion].answer = selectedAnswer;

        setQuestions(qtn);

        if (currentQuestion === questions.length - 1) {
            saveCompletion(navigate);
        } else {
            setSelectedAnswer(-1);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const saveCompletion = (navigate) => {
        setTimeCompleted(Date.now());

        const result = questions.map((item) => {
            const { answers, answer } = item;

            return answers.filter((item) => {
                const { id, value } = item;

                return answer === id && value === 1;
            });
        });

        const correctAnwers = result.filter((item) => {
            return item.length === 1;
        });

        const percent = (correctAnwers.length / questions.length) * 100;

        setCourseScore(parseFloat(percent).toFixed(0));

        navigate('/result');
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
                startTime,
                timeCompleted,
                courseScore,
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
