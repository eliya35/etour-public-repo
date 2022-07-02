import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { UserProvider } from "./components/usercontext/UserProvider";
import { RequireAuth } from "./components/usercontext/RequireAuth";
import Cart, { NotificationProvider } from "./components/mydestinations/Cart";
import NavBar from './components/navbar/Navbar'
import Donate from "./components/navbar/Donate";
import ViewPageData from "./components/viewpage/FetchViewData";
import FeaturedPage from "./components/featured/FeaturedPage"
import About from "./components/quicklinks/AboutEour";
import ContactUs from "./components/quicklinks/ContactUs"
import FAQ from "./components/quicklinks/FAQ";
import HelpPage from "./components/quicklinks/HelpPage";
import PrivacyPolicy from "./components/quicklinks/PrivacyPolicy";
import Suggestion from "./components/quicklinks/Suggestions";
import TermsAndCondition from "./components/quicklinks/TermsAndCondition";
import UserAccount from "./components/UserRelated/UserAccount";
import UserProfile from "./components/UserRelated/UserProfile";
import LoginRequired from "./components/login/LoginRequired";
import CommingSoon from "./components/quicklinks/CommingSoon";

// import AfricaRegionPageContents from "./components/regionfilters/africaregion/africa-pagecontent";
import AntarticRegionPageContents from "./components/regionfilters/antarticregion/antartic-pagecontent";
import MiddleEastRegionPageContents from "./components/regionfilters/middle-eastregion/middle-east-pagecontent";
import AsianPacifcRegionPageContents from "./components/regionfilters/asian-pacificregion/asia-pacific-pagecontent";
import EuropeRegionPageContents from "./components/regionfilters/europeregion/europe-pagecontent";
import NorthAmericaRegionPageContents from "./components/regionfilters/northamericaregion/north-america-pagecontent";
import SouthAmericaRegionPageContents from "./components/regionfilters/southamericaregion/south-americapagecontent";
import UsaRegionPageContents from "./components/regionfilters/unitedstateregion/usa-pagecontent";
import "./App.css";
import loader from './clockwise.svg'

// CODE SPLITING
const Home = React.lazy(() => import("./components/homepage/Home"));
const PopularSitesUiPage = React.lazy(() => import("./components/popularsites/PopularSiteUiPage"));
const CategoryPageContents = React.lazy(() => import("./components/category/CategoryPageContents"));

const AfricaRegionPageContents = React.lazy(() => import("./components/regionfilters/africaregion/africa-pagecontent"));


// Render out all components in there respective paths
const App = () => {
	return (
		<div>
			<CartProvider>
				<UserProvider>
					<NotificationProvider>
						<NavBar />
					</NotificationProvider>
					
					<Suspense fallback=
						{
							<div className="allsites-loading">
								<img src={loader} className="loading-clockwise" alt="Loading..." />
							</div>
						}>

						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/mylist/" element={<Cart />}
							/>
							<Route exact path="/view/:id/" element={<ViewPageData />} />
							<Route
								exact
								path="/featured/"
								element={<FeaturedPage />}
							/>
							<Route
								exact
								path="/popular/"
								element={<PopularSitesUiPage />}
							/>

							<Route
								exact
								path="/region/Africa/"
								element={<AfricaRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Europe/"
								element={<EuropeRegionPageContents />}
							/>

							<Route
								exact
								path="/region/USA/"
								element={<UsaRegionPageContents />}
							/>

							<Route
								exact
								path="/region/North-america/"
								element={<NorthAmericaRegionPageContents />}
							/>

							<Route
								exact
								path="/region/South-america/"
								element={<SouthAmericaRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Asian-pacific/"
								element={<AsianPacifcRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Antarticar/"
								element={<AntarticRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Middle-East/"
								element={<MiddleEastRegionPageContents />}
							/>

							<Route exact path="/donate/" element={<Donate />} />
							<Route exact path="/contact/" element={<ContactUs />} />
							<Route exact path="/help/" element={<HelpPage />} />
							<Route
								exact
								path="/privacy-policy/"
								element={<PrivacyPolicy />}
							/>
							<Route
								exact
								path="/terms-and-condition/"
								element={<TermsAndCondition />}
							/>
							<Route exact path="/about/" element={<About />} />
							<Route exact path="/faq/" element={<FAQ />} />
							<Route exact path="/suggestion/" element={<Suggestion />} />
							<Route exact path="/category/:category/" element={<CategoryPageContents />} />
							<Route exact path="/profile/" element=
								{
									<RequireAuth>
										<UserProfile />
									</RequireAuth>
								}
							/>
							<Route exact path="/profile/my-account/" element=
								{
									<RequireAuth>
										<UserAccount />
									</RequireAuth>
								}
							/>
							<Route exact path='/login-required/' element={<LoginRequired />} />
							<Route exact path='/coming-soon/' element={<CommingSoon />} />
						</Routes>
					</Suspense>
				</UserProvider>
			</CartProvider>
		</div>
	);
}

export default App;
