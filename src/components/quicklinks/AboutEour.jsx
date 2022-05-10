import React from 'react';
import '../Styles/about.css'


const About = () => {
    return (
        <div className="about">
            {/* About etour introductory info */}
            <h1>About Etour International</h1>
            <p>
                Etour is an international tourism application for everyone around the glob.
                Think about Etour as the All in one location; Etour allows
                adventures all over the world to meet in one place, interact, review places they
                have visited or traveled and even plan there next adventure Right Here Right Now!
            </p>
            {/* How dose it work */}
            <h2>HOW DOSE IT WORKS</h2>
            <p>
                Etour is build with various features and services that are easy to use and interact
                with. Some of this features allow you to sort through various tourist attraction sites
                all over the word at a mouse click or a touch of a screen. Some of this common features
                include;
                <br />
                <li>
                    <strong>Category Sorting: </strong>
                    <p>
                        Category Sorting allows you to navigate to different
                        tourist sites categories and find a tour or an adventure that meets your fancy,
                        whether its Popular Cites, Caves, Mountains, Ancient Ruins, Casinos, Forests you name it.
                    </p>
                </li>
                <li>
                    <strong>Search Functionality: </strong>
                    <p>
                        Search Functionality allows you as an adventure
                        to search for tourist sites all over the world and quickly gain all the information
                        you will need about the site of you choosing on the spot!
                    </p>
                </li>
                <li>
                    <strong>Reviews/ Comments: </strong>
                    <p>
                        Reviews allow Etour adventure
                        to write reviews on sites he/she has visited and some of the cool things
                        they did there, sharing his experience with the
                        world allowing other adventures to know what to expect should they choose to visit
                        the site.
                    </p>
                </li>
                <li>
                    <strong>Add to List Feature </strong>
                    <p>
                        Add to list feature allows Adventures to add as many sites as they
                        want to his/her <a href="/mylist/">My Destinations</a> page. At this page they can, remove or view each
                        destination and use it plan his/her adventure.
                    </p>
                </li>
                <li>
                    <strong>Detail Page </strong>
                    <p>
                        When you "view" a tour site you are directed to a detail page where you get
                        more detail concerning the site of interest. Information such as Description, Location
                        and reviews and other information can be found there.
                    </p>
                </li>
            </p>
            {/* How do i get started */}

            <h2>How do i get started?</h2>
            <p>
                Getting started is as easy as 1,2,3 all you need is a working email address a device
                that can access the internet and good internet connection. <a href="/register/"> Sing up for a free account</a> and
                your ready to start your adventures.
            </p>
            {/* CAN I DONATE TO ETOUR */}

            <h2>HOW CAN I HELP IMPROVE ETOUR AND ITS SERVICES?</h2>
            <p>
                By suggesting new features or upgrades
                (suggestion box <a href='/suggestion/'>Click here</a>).
                Etour also accepts donations graciously
                More on donation <a href='/donate/'>Click here</a> giving Etour the ability to grow
                and serve you much better.
            </p>
            <br />
            <div className="container">
                <div className="feedback">
                    <h6>Was this information usefully?</h6>
                    <button className='btn btn-success m-2'>Yes</button>
                    <button className='btn btn-danger m-2'>No</button>
                </div>
            </div>
        </div>
    );
}

export default About;