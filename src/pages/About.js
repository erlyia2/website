import '../main.css';
import aboutPhoto from './pfp.jpeg';


function About() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="image">
                    <img src={aboutPhoto} alt="about" width="250rem"/>
                </div>
                <div className="body-container">
Erika is a Brooklyn-based filmmaker from Knoxville, TN. Her work centers around the small pockets of existence that shape everyday life. She graduated from MIT with a B.S. in Computer Science. In her free time, she can be found on various types of circus apparatuses. Her directorial debut short film, Pit Stops, received the 2025 WAVE Grant from Wavelength Productions.
                </div>
                <div className="news">
                    <a href="https://deadline.com/2025/03/wave-grant-recipients-2025-wavelength-1236328438/">Wavelength 2025 WAVE Grant Recipients Revealed</a>
                </div>
                <div>
                    Contact: erikayangfilms@gmail.com
                </div>
            </div>
        </div>
    )
}

export default About;