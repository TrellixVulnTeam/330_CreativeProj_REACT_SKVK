import { React, useContext, useState, createContext, useEffect } from 'react';
import GlobalContext from '../GlobalContext';
import CreatorContext from '../context/CreatorContext';

// const QuestionContext= createContext();
const QuizContext = createContext();
function QuizBox(props) {
    const { page, setPage } = useContext(GlobalContext);
    const { socket } = useContext(GlobalContext);
    const { creator } = useContext(CreatorContext);
    const [quizzes, setQuizzes] = useState('');
    const quizInfo = { quizzes, setQuizzes };

    console.log(creator)
    socket.emit('get_quizzes', { 'creator': creator })

    useEffect(() => {
        socket.once("get_quizzes", function (data) {
            console.log(data)
            

            setQuizzes(data.quiz_arr);
        });
    }, [socket, setPage]);
    // const [state, dispatch] = useGlobalState();
    

    // let questionBox = <div className={classname}><p>{q_text_value}</p></div>;

    return (
        <div>
            <QuizContext.Provider value={quizInfo}>
                <ClickableQuizzes></ClickableQuizzes>
            </QuizContext.Provider>
        </div>
    );
}

function Quiz(props) {
    return (
        <div className = 'quiz_box'>
            {props.quiz_name}
        </div>
    )
}

function ClickableQuizzes(props) {
    const { socket } = useContext(GlobalContext);
    const { quizzes } = useContext(QuizContext);
    console.log(quizzes)
    // const { count, setCount, q_object, setQ_Object } = useContext(QuestionContext);
    function handleQuizClick (){
        // socket.emit('')
    }
    const div_quizzes = Object.keys(quizzes).map(key =>

        
        <Quiz key={key} quiz_name={quizzes[key].quiz_name} onClick={handleQuizClick}></Quiz>


    )
    return div_quizzes;

}
export default QuizBox;