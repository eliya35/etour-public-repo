import React from 'react';
import { Link } from 'react-router-dom';


import '../Styles/about.css'

const About = () => {
    return (
        <div className="about">
            {/* About etour introductory info */}
            <h1>About Etour International</h1>
            <p>
                Etour is an internationa tourisim application for everyone around the gloab to
                use and share. Think about Etour as an E-tourisim or electronic tourism company; We allow
                adventures all over the word to meet in one palce, to interact, review places they
                have visited or traveld and even plan there next adventure Right Here Right Now!
            </p>
            {/* How dose it work */}
            <h2>HOW DOSE IT WORKS</h2>
            <p>
                Etour is build with various features and services that are easy to use and interact
                with. Some of this features allow you to sort throug various tourist attraction sites
                all over the word at a mouse click or a touch of a screen. Some of this common features
                include;
                <br />
                <li>
                    <strong>Category Sorting: </strong>
                    <p>
                        Category Sorting allows you to navigate to diffrent
                        tourist sites categories and find a tour or an adventure that meets your fancy,
                        wether its Popular Cites, Caves, Mountains, Ancient Ruins, Cassinos, Forests you name it.
                    </p>
                </li>
                <li>
                    <strong>Search Functionality: </strong>
                    <p>
                        Search Functionality allows you as an adventure
                        to serach for tourist sites all over the world and quickly gain all the information
                        you will need about the site of you choosing on the spot!
                    </p>
                </li>
                <li>
                    <strong>Rating and Reviews: </strong>
                    <p>
                        Rating and Reviews allows for Etour adventure
                        to write reviews and rate places he/she has been to, sharing his experience with the
                        world allowing other adventures to know what to expect should they choose to vistit
                        the site.
                    </p>
                </li>
                <li>
                    <strong>Add to List Feature </strong>
                    <p>
                        Add to list feature allows Adventures to add as many sites as they
                        want in ther list and manage them in there. They can add, remove mark as
                        visited or share ther list to there friends and familly.
                    </p>
                </li>
                <li>
                    <strong>Detail Page </strong>
                    <p>
                        When you "view" a tour site you are directed to a detail page where you could get
                        more detail concerning your site of intrest. Inforamtion such as Description, Location
                        and rieviws and other inforamtion.
                    </p>
                </li>
            </p>
            {/* How do i get started */}

            <h2>How do i get started?</h2>
            <p>
                Getting started is as easy as 1,2,3 all you need is a working email address a device
                that can accec the internet and internet connection. Sing up for a free account
                and your ready to start your adventures.
            </p>
            {/* CAN I DONATE TO ETOUR */}

            <h2>HOW CAN I HELP IMPROVE ETOUR AND ITS SERVICES?</h2>
            <p>
                By suggesting new featrues or upgrades
                (suggestion box <a href='/suggestion/'>Click here</a>) you help Etour improve its services.
                Etour.com also accepts Donations graciously
                (More on donation <a href='/donate/'>Click here</a> ) giving Etour the ability to grow
                and serve you much better.
            </p>
            <br />
            <div className="container">
                <div className="feadback">
                    <h6>Was this inforamtion usefull?</h6>
                    <button className='btn btn-success m-2'>Yes</button>
                    <button className='btn btn-danger m-2'>No</button>
                </div>
            </div>
        </div>
    );
}

export default About;