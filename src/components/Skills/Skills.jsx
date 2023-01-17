const skills = ['Front-End', 'Back-End', 'CI/CD' , 'Soft skills'];

const Skills = () => {
    return (
        <ul>

            {
                skills.map((skill) =>{
                    return (
                        <li>{skill}</li>
                    )
                })
            }
            
        </ul>
    )
}
export default Skills;