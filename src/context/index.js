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

    const getAdeoData = async () => {
        try {
            const { data } = await fetchAdeoData();

            const temp = data.filter((item, index) => {
                const { text } = item;

                const question = htmlToText(text);

                return question !== '';
            });

            setQuestions(temp.slice(0, 20));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <CourseContext.Provider
            value={{
                questions,
                getAdeoData,
                currentQuestion,
                setCurrentQuestion,
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
