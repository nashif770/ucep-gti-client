import React from 'react';
import useMCQ from '../../0.hooks/useMCQ';

const ExamPage = () => {

    const [questions] = useMCQ()

    return (
        <div>
            <h1>{questions.length}</h1>
        </div>
    );
};

export default ExamPage;