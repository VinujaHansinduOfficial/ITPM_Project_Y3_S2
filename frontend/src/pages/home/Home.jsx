import React, { useEffect, Suspense, useState } from "react";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import "./home.css";

const Featured = React.lazy(() => import("../../components/featured/Featured"));
const FeaturedProperties = React.lazy(() => import("../../components/featuredProperties/FeaturedProperties"));
const SubscribeFooterSection = React.lazy(() => import("../../components/subscribeFooterSection/SubscribeFooterSection"));

// Skeleton loader component
const SkeletonLoader = ({ title }) => (
  <div className="section">
    <header>
      <h1 className="homeTitle">{title}</h1>
    </header>
    <div className="skeleton-loader">
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-card" />
    </div>
  </div>
);

// Section renderer
const RenderSection = ({ title, id, LazyComponent }) => (
  <Suspense fallback={<SkeletonLoader title={title} />}>
    <section aria-labelledby={id} className="section">
      <header>
        <h1 id={id} className="homeTitle">{title}</h1>
      </header>
      <LazyComponent />
    </section>
  </Suspense>
);

const Home = () => {
  const [metaLoaded, setMetaLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home | Explore Properties, Destinations, and More";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Explore featured properties, popular destinations, and more. Book your next vacation with ease."
    );

    setMetaLoaded(true);
  }, []);

  return (
    <main className="homeContainer" role="main">
      <ErrorBoundary>
        <RenderSection
          title="Featured"
          id="featured-title"
          LazyComponent={Featured}
        />

        <RenderSection
          title="Popular Choices"
          id="popular-properties-title"
          LazyComponent={FeaturedProperties}
        />

        <Suspense fallback={<SkeletonLoader title="Stay Updated" />}>
          <section aria-labelledby="subscribe-footer-title" className="section subscribe-section">
            <header>
              <h1 id="subscribe-footer-title" className="homeTitle">Stay Updated</h1>
              <p className="homeSubtitle">
                Subscribe to our newsletter and never miss out on travel updates, exclusive offers, and top destinations.
              </p>
            </header>
            <SubscribeFooterSection />
          </section>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default Home;
