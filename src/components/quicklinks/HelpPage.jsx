import React, { useEffect } from 'react';
import '../Styles/helppage.css'
import FeedBack from './FeedBack';


const HelpPage = () => {

    // set the page title.
    useEffect(() => { document.title = 'Help'; });

    return (
        <div className="help">
            <h1>What you'll find in this page</h1>
            <div className="help-stuff">
                <li><a href='#navbarusage'>Navbar usages</a></li>
                <li><a href='#categoryusage'>Category usage</a></li>
                <li><a href='#filterusage'>Filter usage</a></li>
                <li><a href='#tourcarduse'>Tour Cards Content and usage</a></li>
                <li><a href='#userprofile'>User Profile and account management</a></li>
                <li><a href='#quiclinks'>Quicklinks navigation</a></li>
            </div>
            <br />

            <h2 id='navbarusage'><a href='#navbarusage'>Navbar usages</a></h2>
            <div className="nav-help">
                <p>
                    Navbar presents to you the following links and functionality:
                    <br />
                    <li>
                        <strong>Logo: </strong>
                        <p>
                            Used to navigate you back to the homepage form whichever part you are in this site.
                        </p>
                    </li>
                    <li>
                        <strong>Featured: </strong>
                        <p>
                            This nav link takes you straight to <a href="/featured/">featured</a> sites where only featured sites are nested.
                        </p>
                    </li>
                    <li>
                        <strong>My Destinations: </strong>
                        <p>
                            This links you straight to your destinations which you add by clicking the add to list button.
                            <br />
                            Note: The sites that you add are only specific to your own browser meaning they will only
                            be viable to the browser you have added the destination from, additionally the sites will only be removed
                            when you explicitly remove them or when you clear your browse data.
                            You are also required to have an account with Etour and signed in with your info to access this
                            pages contents.
                        </p>
                    </li>
                    <li>
                        <strong>Donate link: </strong>
                        <p>
                            This links you to the <a href="/donate/">donate</a> page where information for haw to donate and
                            haw the donations are used maintain the application.
                        </p>
                    </li>
                    <li>
                        <strong>Search Functionality </strong>
                        <p>
                            A simple search feature that helps you find your destination by typing in the stuff.
                            <br />
                            If the site appears under the results click on it and watch yourself being navigate to the spot
                            where you'll get all the information you need to plan your tour effectively. If the site your looking
                            for dose not apper among the results then it means it hasn't benn added yet or simply docent exist.
                            As for the first case you can send as a suggestion <a href="/suggestion/">Here</a> and will get to work.
                        </p>
                    </li>
                </p>
            </div>

            <h2 id='categoryusage'><a href='#categoryusage'>Category usage</a></h2>
            <p>
                Well the name pretty much says it all. Categories give you the power to choose the kind of adventure
                you want to partake whether its Ancient buildings or Popular once's Caves or Mountains, Forests or Marine Life,
                Hotels and Casinos, and a bunch more we have it all here to make your life more easier.
            </p>

            <h2 id='filterusage'><a href='#filterusage'>Filter usage</a></h2>
            <p>
                The available filters <a href="/popular">Most Popular</a> and <a href="/featured">Featured</a> do
                basically what their name say. Most popular sites return only sites that are popular meaning they have a
                tourist traffic of VERY HIGH annually compared to other destination. Featured sites as mentioned above
                return only sites which are featured. <br />
                Note: throughout the sites you'll see that featured sites have a featured targ at there cards this enables you
                to identify them from any location displaying tour cards.
            </p>

            <h2 id='tourcarduse'><a href='#tourcarduse'>Tour Cards Content and usage</a></h2>
            <span>A tour card is const of:</span>
            <ul>
                <li><strong>Card Image</strong></li>
                <p>This is an image of the site which vary from site to.</p>

                <li><strong>Featured targ</strong></li>
                <p>Sites with this targ means they are featured destinations which more than often are pretty cool destinations.</p>

                <li><strong>Short description</strong></li>
                <p>This is a basic description about the site, one could say an introductory paragraph.</p>

                <li><strong>A View button</strong></li>
                <p>
                    This button is pretty cool it helps you view more details about the destination. "I personally like
                    it a lot". Once this button is clicked you are navigated to the view page where you'll find:
                    <ul>
                        <li>
                            <strong>Four different images</strong>
                            <p>This images help you view the destination with a bird eye view and in different angles</p>
                        </li>

                        <li>
                            <strong>A description of the site</strong>
                            <p>
                                Here you'll get just the gist of the destination in question. Information like where the site
                                is located and the traffic it receives annually.
                            </p>
                        </li>

                        <li>
                            <strong>Recommended products section</strong>
                            <p>
                                Now here is where the magic happens, Etour has done its intense research for your sake
                                adventure and sourced some of the most recommended products to have when your planing your adventure.
                                That's not all we have done, we have also provided you with a link where you can get the exact
                                recommended products next to the product to save you the hustle of surfing the entire web looking
                                for the product pretty clean right.
                            </p>
                        </li>

                        <li>
                            <strong>Comments</strong>
                            <p>
                                This feature in the view page grants you access of posting comments or even asking a
                                question to other adventures who have been in that site or even share your own
                                experience there.

                                <br />
                                The feature also allows you to reply to other adventures comments or question providing
                                your own point of view.

                                <br />
                                <strong>
                                    Note: You can only access this page once you are logged in.
                                </strong>

                                <br />
                                <strong>
                                    Warning: When living your comments or replaying a comment you are strongly advised
                                    to be polite. Failure to this you'll be instantly baned from using Etour and
                                    its services plus its not cool !!!
                                </strong>
                            </p>
                        </li>
                    </ul>
                </p>

                <li><strong>Add to List button</strong></li>
                <p>
                    This button when clicked from any where in the site it sends the destination straight tour list where you can review
                    it at some point in life, ohh sorry some point in time when finalizing your plan for the chosen sites.
                </p>
            </ul>


            <h2 id='userprofile'><a href='#userprofile'>User Profile and account management</a></h2>
            <p>
                When you are logged in using your credentials at the right conner or when using your mobile,
                at the dropdown menu you see my profile/account. When clicked on it navigates you to your profile account.

                <br />
                If you are saving your profile for the first time, at bottom of the page before the footer (the black stuff with some links)
                you'll be prompted to save your profile.

                <br />
                <strong>Note: </strong> When saving your profile for the first time all the fields including a profile picture are
                required failure to provide this info the profile will not be saved.
                <br />
                After all the fields and providing and a profile picture of your choice click the save button a
                notification will apper informing you, "You profile has been updated successfully" and your good to go easy.
                One thing to note also now after saving your profile you'll be now dealing with an update button.

                <br />
                At the next leval of yor profile where you arrive after clicking the the "Click Here" link on the your profile.
                At this page you can edit your account information i.e Add a first name, Last name or Change your email.
                To change your username or password you'll need to click on one of the two links "Change your Username" or
                "Change your Password" depending on your needs.

                <br />
                <strong>
                    Note: Make sure your enter the correct email to help us reset your password when you
                    forget it. (it happens often and to everyone) If your email ain't wright you stand a chance of losing your
                    account and all its information!
                </strong>

                <br />
                At this page you can also choose to delete your account if your no longer need it.
                <strong>
                    Once you delete your account all your info is wiped clean and there can be reversing of this process.
                </strong>
            </p>
            <h2 id='quiclinks'><a href='#quiclinks'>Quicklinks navigation</a></h2>
            <p>
                Quick links quick link you to pages, Yes that's what they do.
                <ul>
                    <li>
                        <a href="/about">About</a>
                        <p>
                            Navigates you to about page. This page is where you get to know
                            what etour is all about.
                        </p>
                    </li>

                    <li>
                        <a href="/faq">FAQ</a>
                        <p>
                            Navigates you to frequently asked questions.
                        </p>
                    </li>

                    <li>
                        <a href="/suggestion">Suggest New Feature</a>
                        <p>
                            Navigates to suggestion page where you can live a suggestion or recommendation.
                        </p>
                    </li>

                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <p>
                            Navigates to privacy policy you should probably check that out.
                        </p>
                    </li>

                    <li>
                        <a href="/terms-and-condition">Terms and Conditions</a>
                        <p>
                            Navigates to our terms and condition of use you also should check that out.
                        </p>
                    </li>

                    <li>
                        <a href="/contact">Contact</a>
                        <p>
                            Navigates to contact us page. Where you can find us in case of any thing
                            i.e like you know reporting some hooligans, or some stuff.
                        </p>
                    </li>
                </ul>
            </p>
            <div className="container">
                <FeedBack />
            </div>
        </div>
    );
}

export default HelpPage;