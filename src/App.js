import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SectionHeading from './components/SectionHeading';
import LinkButton from './components/LinkButton';
import GenericCard from './components/GenericCard';
import ProjectCard from './components/ProjectCard';
import TalkCard from './components/TalkCard';
import MediumFeed from './components/MediumFeed';
import Footer from './components/Footer';
import concentration from './assets/images/concentration.jpg';
import manspreading from './assets/images/isitmanspreading.png';
import constellation from './assets/images/github_constellation_roadshow.png';
import forwardJs from './assets/images/ForwardJS.jpeg';
import nzHerald from './assets/images/nzherald.jpg';
import infobae from './assets/images/infobae.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <section className="banner">
          <div className="content-wrapper">
            <h1>Ksenia Coulter</h1>
            <h2>Web Developer. Speaker. Organizer.</h2>
            <LinkButton url="https://twitter.com/kscoult" name="twitter"/>
            <LinkButton url="https://medium.com/@kcoulter" name="medium"/>
            <LinkButton url="https://www.linkedin.com/in/kseniacoulter" name="linkedin"/>
            <LinkButton url="https://github.com/kscoulter" name="github"/>
          </div>
        </section>

        <section className="latest updates">
          <SectionHeading heading="updates"/>
          <GenericCard
            title="Ksenia Spoke at Github Constellation"
            description="GitHub Team's two-part event celebrating software builders and entrepreneurs in Washington DC. Whether you’re a new developer or leading a team of them, they’ve got you covered. Thanks to all who joined me to learn how to get the most out of code reviews."
            mediaType="image"
            media={constellation}
            mediaUrl="https://githubconstellation.com/washington-dc/#getting-the-most-out-of-code-reviews"
            date="Apr 19, 2018" />
          <GenericCard
            title="Ksenia Spoke at ForwardJS in Ottawa"
            description="Spreading the gospel of code reviews in Ottawa, Canada."
            mediaType="image"
            media={forwardJs}
            mediaUrl="https://forwardjs.com/ottawa/schedule#lecture-399"
            date="Apr 5, 2018" />
          <GenericCard
            title="DC Tech Meetup #63 at the Washington Post"
            description="Another full house for DC Tech Meetup - over 300 DC innovators in attendance!"
            mediaType="video"
            media={<iframe width="100%" height="200px" src="https://www.youtube.com/embed/5jNMZw7DNyk" frameBorder="0" allowFullScreen></iframe>}
            mediaUrl="https://www.meetup.com/DC-Tech-Meetup/events/247193478/"
            date="Mar 26, 2018" />
        </section>

        <section className="writing medium-posts">
          <SectionHeading heading="writing"/>
          <MediumFeed />
        </section>

        <section className="talks">
          <SectionHeading heading="talks"/>
          <div className="card-container">
            <TalkCard
              title="Getting The Most Out Of Code Reviews"
              description={<p>How do we judge “good code”? What does it mean for code to be maintainable? How do we create a culture of trust where feedback is not painful? Using real examples and code snippets, I discuss ways to use the code review process to improve your code base, reaffirm your team values, and promote a culture of learning.</p>}
              background="#86BAA3"
              links={[["slides", "https://docs.google.com/presentation/d/e/2PACX-1vTRcK-aAGrIVQdmtXukz-2Y15tJtMP9LxnsUNQJLdAWJHzdy1HksQYPUYEEWwKud9toxQuESbu9evPl/pub?start=false&loop=false&delayms=3000"],["video", "https://youtu.be/8U1fdKG062k"]]} />
            <TalkCard
              title="Build Faster Websites with Accelerated Mobile Pages (Workshop)"
              description={<p>In the era of mobile web, speed and performance are critical. In this workshop I introduce attendees to Accelerated Mobile Pages (AMP). AMP uses multiple strategies – pre-loading, caching, async scripts, enforcement of best practices – to achieve a near-instantaneous load of content. Using starter templates, the workshop attendees will walk away with a fully functional AMP page and the knowledge needed to continue creating fast-loading pages.</p>}
              background="#AFC988"
              links={[["slides", "http//"],["github","https://github.com/kscoulter/CodeHerAMP"]]} />
            <TalkCard
              title="The Many Faces of AMP"
              description={<p>Not just a content producer and publisher, The Washington Post has been rapidly adapting to changes in technology and the media industry. Arc Publishing - our inhouse software-as-a-service business has been attracting bigger and bigger media players as clients. Because of Arc's rapid growth combined with industry focus on mobile speed and performance, our engineers have had the chance to implement Accelerated Mobile Pages for several publishers. This talk will highlight several different approaches to building AMP experiences on our platform, as well as, challenges of integrating AMP into our ecosystem of products and services.</p>}
              background="#A39FB7"
              links={[["video", "https://www.youtube.com/watch?v=-aFc1-yD2Jw"]]}/>
              {/* <TalkCard
                title="Bug Detective: Mastering Developer Tools"
                description={<span><p>The art of debugging is akin to the art of detection. For web developers, the best tools of investigation are right there in the browser.</p>

                <p>How can one master developer tools to investigate common problems that pop up in web development -- from debugging HTML and CSS, to Javascript, to more advanced concepts such as performance and mobile development? This talk will reveal a few tips and tricks on how to leverage best developer tools features in three different browsers and become a seasoned bug detective.</p></span>}
                background="#86BAA3"
                links={[["slides", "https://docs.google.com/presentation/d/e/2PACX-1vTRcK-aAGrIVQdmtXukz-2Y15tJtMP9LxnsUNQJLdAWJHzdy1HksQYPUYEEWwKud9toxQuESbu9evPl/pub?start=false&loop=false&delayms=3000"],["video", "https://youtu.be/8U1fdKG062k"]]} /> */}
          </div>
        </section>

        <section className="portfolio">
          <SectionHeading heading="portfolio"/>
          <ProjectCard
            name="Progressive Web App for Infobae"
            description={<span><p>Argentia-based Infobae is one of the most read Spanish language media in the world. PWA is particularly important for Latin American audience because of connectivity issues common in the region and because mobile accounts for 78% of Infobae's traffic. Fast performing PWA pages resulted in a low bounce rate of 6.8% and engaged readers for over 5 minutes.</p></span>}
            url="https://app.infobae.com/"
            image={infobae} />
          <ProjectCard
            name="New Zealand Herald"
            description={<span><p>I was part of the team that built the new New Zealand Herald website. Worked closely with all stakeholders in order to keep the project advancing at pace despite the significant time zone differences, including working on-site with for launch. I was specifically responsible for images, galleries, and sliders functionality on the site.</p>
            <p>Nzherald.co.nz won Canon Media Awards for Website of the Year in 2017.</p></span>}
            url="http://www.nzherald.co.nz/"
            image={nzHerald} />
          <ProjectCard
            name="Concentration"
            description={<span><p>Test your memory with this space-themed concentration game, just beware of the aliens.</p></span>}
            url="https://github.com/kscoulter/kscoulter.github.io"
            image={concentration} />
          <ProjectCard
            name="Is It Manspreading?"
            description={<span><p>Have you ever wondered if you're taking up too much space on public trasportation? This brainchild of Comedy Hack Day DC lets you link to an image of your spread, determines your spread degree, and lets you know if it is within acceptable range.</p></span>}
            url="http://isitmanspreading.com"
            image={manspreading} />
          {/* <ProjectCard
            name="Is It Manspreading?"
            description="Have you ever wondered if you're taking up too much space on public trasportation? This brainchild of Comedy Hack Day DC lets you link to an image of your spread, determines your spread degree, and lets you know if it is within acceptable range."
            url="http://isitmanspreading.com"
            image={manspreading} /> */}
        </section>

        <section className="contact">
        <SectionHeading heading="contact me"/>
          <div className="content">
            <p>Let's start a conversation! You can email me, tweet at me, or add me on LinkedIn.</p>
            <LinkButton url="mailto:kseniacoulter@gmail.com" name="gmail"/>
            <LinkButton url="https://twitter.com/kscoult" name="twitter"/>
            <LinkButton url="https://www.linkedin.com/in/kseniacoulter" name="linkedin"/>
            <LinkButton url="https://github.com/kscoulter" name="github"/>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
