const Header = props => <h2>{props.course}</h2>;

function Part(props) {
    return <p>
        {props.part.name} {props.part.exercises}
    </p>;
}


const Content = props => {
    const items = props.parts.map(part => <Part part={part} key={part.id}/>)
    return <>
        {items}
    </>;
};


const Total = props => <p><b>Number of
    exercises {props.parts.reduce((accumalator, currentValue) => accumalator + currentValue.exercises, 0)} </b></p>;

function Course({course}) {
    return <>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </>;
}

function Courses({courses}) {
    const items = courses.map(course => <Course course={course} key={course.id}/>)
    return <>
        {items}
    </>;
}

export default Courses