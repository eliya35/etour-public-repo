import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { UserProvider } from "./components/usercontext/UserProvider";
import { RequireAuth } from "./components/usercontext/RequireAuth";
import Cart, { NotificationProvider } from "./components/mydestinations/Cart";
import NavBar from './components/navbar/Navbar'
import Donate from "./components/navbar/Donate";
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

import "./App.css";
import loader from './clockwise.svg'
import ErrorBoundary from "./ErrorBoundary";

// CODE SPLITING
const Home = React.lazy(() => import("./components/homepage/Home"));
const PopularSitesUiPage = React.lazy(() => import("./components/popularsites/PopularSiteUiPage"));
const CategoryPageContents = React.lazy(() => import("./components/category/CategoryPageContents"));
const FeaturedPage = React.lazy(() => import("./components/featured/FeaturedPage"));
const ViewPageData = React.lazy(() => import("./components/viewpage/FetchViewData"));

const AfricaRegionPageContents = React.lazy(() => import("./components/regionfilters/africaregion/africa-pagecontent"));
const AntarticRegionPageContents = React.lazy(() => import("./components/regionfilters/antarticregion/antartic-pagecontent"));
const AsianPacifcRegionPageContents = React.lazy(() => import("./components/regionfilters/asian-pacificregion/asia-pacific-pagecontent"));
const EuropeRegionPageContents = React.lazy(() => import("./components/regionfilters/europeregion/europe-pagecontent"));
const NorthAmericaRegionPageContents = React.lazy(() => import("./components/regionfilters/northamericaregion/north-america-pagecontent"));
const SouthAmericaRegionPageContents = React.lazy(() => import("./components/regionfilters/southamericaregion/south-americapagecontent"));
const AustraliaRegionPageContents = React.lazy(() => import("./components/regionfilters/australiaregion/australia-pagecontent"));

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
						}
					>
						<Routes>
							<Route
								exact
								path="/"
								element={<Home />}
							/>

							<Route
								exact
								path="/popular/"
								element={<PopularSitesUiPage />}
							/>

							<Route
								exact
								path="/category/:category/"
								element={<CategoryPageContents />}
							/>

							<Route
								exact
								path="/featured/"
								element={<FeaturedPage />}
							/>

							<Route exact path="/view/:id/" element=
								{
									<ErrorBoundary>
										<ViewPageData />
									</ErrorBoundary>
								}
							/>

							<Route
								exact
								path="/region/Africa/"
								element={<AfricaRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Antarticar/"
								element={<AntarticRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Asian-pacific/"
								element={<AsianPacifcRegionPageContents />}
							/>

							<Route
								exact
								path="/region/Europe/"
								element={<EuropeRegionPageContents />}
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
								path="/region/Australia/"
								element={<AustraliaRegionPageContents />}
							/>

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

							<Route exact path="/mylist/" element={<Cart />} />

							<Route exact path="/donate/" element={<Donate />} />

							<Route exact path="/contact/" element={<ContactUs />} />

							<Route exact path="/help/" element={<HelpPage />} />

							<Route exact path="/about/" element={<About />} />

							<Route exact path="/faq/" element={<FAQ />} />

							<Route exact path="/suggestion/" element={<Suggestion />} />

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