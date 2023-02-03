import './experience.css';

export default function Experience() {
    return (
        <div className={'experience-container'}>
            <h3 className={'experience-title'}>Experience</h3>
            <div className={'experience-section'}>
                <h4 className={'experience-section-title'}>Carvana</h4>
                <h5 className={'experience-section-duration'}>
                    Software Engineer 1 | 02/2022 - 11/2022 | Tempe, Arizona
                </h5>
                <ul className={'experience-list'}>
                    <li>
                        Contributed to client applications using React, Typescript,
                        Redux, and Next JS. Along with testing using React testing
                        library. Contributions made in an Azure DevOps CI/CD
                        environment, subject to code review and QA.
                    </li>
                    <li>
                        Established testing protocol and implemented React Testing
                        Library in a legacy repository spanning dozens of components,
                        files, and utility methods.
                    </li>
                    <li>
                        Created components that displayed user information obtained via
                        request through GraphQL and allowed a user to interact and make
                        financial decisions within their Carvana account.
                    </li>
                    <li>
                        Contributed solutions to various bugs in the UI, such as visual
                        errors on mobile, or endpoints that needed to be updated when
                        identified as owned by our team.
                    </li>
                </ul>
            </div>
            <div className={'experience-section'}>
                <h4>Anant</h4>
                <h5 className={'experience-section-duration'}>
                    Software Engineer | 03/2021 - 02/2022 | Washington, D.C.
                </h5>
                <ul className={'experience-list'}>
                    <li>
                        Contributed to client applications using React, Typescript, and
                        Material-UI. Along with testing using React testing library and
                        Cypress. Contributions made in a CI/CD environment, subject to
                        code review and QA in 3-week sprints.
                    </li>
                    <li>
                        Represented Anant in daily client meetings and updates.
                    </li>
                    <li>
                        Maintained and responded to tickets across all Anant sites
                        including new features, bug fixes, and SEO optimization
                    </li>
                    <li>
                        Drafted a style-guide for Anant sites in order to better
                        streamline updates and new features while maintaining
                        consistency.
                    </li>
                    <li>
                        Established Awesome-Cassandra on the Awesome-List by adhering to
                        strict guidelines and creating a process to contribute.
                    </li>
                    <li>
                        Co-organized and led two weekly webinars surrounding Cassandra and 
                        Data Engineering.
                    </li>
                    <li>
                        Drafted and presented monthly learning webinars surrounding technical 
                        topics.
                    </li>
                </ul>
            </div>
        </div>
    )
}