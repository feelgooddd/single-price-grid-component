import { useState } from "react";
const aboutListData = [
  {
    id: 1,
    content: "Tutorials by industy experts",
  },
  {
    id: 2,
    content: "Peer & expert code review",
  },
  {
    id: 3,
    content: "Coding exercises",
  },
  {
    id: 4,
    content: "Access to our Github repos",
  },
  {
    id: 5,
    content: "Community Forum",
  },
  {
    id: 6,
    content: "Flashcard decks",
  },
  {
    id: 7,
    content: "New videos every week",
  },
];

function JoinSection({ children }) {
  return (
    <div className="section-join p-20 flex flex-col gap-2r">
      <h3 className="txt-primary">{children}</h3>
      <div className="section-join__content">
        <p>
          <span className="txt-yellow txt-bold">
            30-day, hassle free money back guarantee
          </span>
        </p>
        <p className="txt-neutral500 line-1p5">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
    </div>
  );
}

function SubscriptionSection({ children }) {
  return (
    <div className="section-subscription p-20 flex flex-col ">
      <h3>{children}</h3>
      <div className="subscription-price">
        <span className="txt-large txt-bold"> $29</span>
        <p className="txt-muted">per month</p>
      </div>
      <p>Full access for less than $1 a day</p>
      <button className="btn-signup">Sign up</button>
    </div>
  );
}

function AboutSection({ children }) {
  return (
    <div className="section-about p-20 flex flex-col ">
      <h3>{children}</h3>
      <List />
    </div>
  );
}

function List() {
  return (
    <ul>
      {aboutListData.map((item) => {
        return <ListItem key={item.id}>{item.content}</ListItem>;
      })}
    </ul>
  );
}
function ListItem({ children }) {
  return <li>{children}</li>;
}
function App() {
  return (
    <main>
      <JoinSection>Join our community</JoinSection>
      <SubscriptionSection>Monthly Subscription</SubscriptionSection>
      <AboutSection> Why Us </AboutSection>
    </main>
  );
}

export default App;
