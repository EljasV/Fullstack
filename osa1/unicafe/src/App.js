import {useState} from 'react'

const StatisticLine = ({text, value}) => {
    return <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>;
};

const Statistics = ({bad, good, neutral, given}) => {
    if (given) {
        const all = good + neutral + bad;
        return <>
            <h1>Statistics</h1>
            <table>
                <tbody>
                <StatisticLine text="Good" value={good}/>
                <StatisticLine text="Neutral" value={neutral}/>
                <StatisticLine text="Bad" value={bad}/>
                <StatisticLine text="All" value={all}/>
                <StatisticLine text="Average" value={(good - bad) / all}/>
                <StatisticLine text="Positive" value={(good / all * 100).toString() + "%"}/>
                </tbody>
            </table>
        </>;
    } else {
        return <>
            <h1>Statistics</h1>
            <p>No feedback given!</p>
        </>
    }
};

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [given, setGiven] = useState(false);

    const addGood = () => {
        setGood(good + 1);
        setGiven(true);
    };
    const addNeutral = () => {
        setNeutral(neutral + 1);
        setGiven(true);
    };
    const addBad = () => {
        setBad(bad + 1);
        setGiven(true);
    };

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={addGood} text="Good"/>
            <Button onClick={addNeutral} text="Neutral"/>
            <Button onClick={addBad} text="Bad"/>
            <Statistics good={good} neutral={neutral} bad={bad} given={given}/>
        </div>
    )
}

export default App