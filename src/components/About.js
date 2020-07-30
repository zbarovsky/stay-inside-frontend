import React from 'react'

export default function About() {
    return(
        <div className="about">
            <h1 className="aboutTitle">About The Dev Team</h1>
            <div className="aboutPage">
                <div className="member">
                    <h3>Josh Danao</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U011SC6GRMK-b7744c409e1e-512" />
                    <h5>Frontend Development</h5>
                </div>
                <div className="member">
                    <h3>Minh Nguyen</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013SS45XPW-6b458202f6f4-512" />
                    <h5>Backend Development</h5>
                </div>
                <div className="member">
                    <h3>Nick Hvattum</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U0141JELV4Y-710a221b9c63-512" />
                    <h5>Frontend Development</h5>
                </div>
                <div className="member">
                    <h3>Zack Barovsky</h3>
                    <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-UV0CS3TQF-6394ecdb9322-512" />
                    <h5>Project Manager, Git Master, Backend Developement</h5>
                </div>
            </div>
        </div>

    )
}