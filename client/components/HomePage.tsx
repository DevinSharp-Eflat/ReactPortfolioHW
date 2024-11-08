import * as React from "react";
import homePhoto from "../assets/NeekoDevin.jpg";
//This will be an "About me" page. Provide photo or w.e.

export default function HomePage() {
    return (
        <>
            <h1>About Devin</h1>
            <img src={homePhoto} alt="Neeko on Devin"></img>
            <p>
            My name is Devin, a techy cat dad based in Eugene, Oregon. 
            I am someone who thrives on interacting with other people, 
            especially when it comes to solving problems. 
            Learning new things and expanding my experiences is something I am always striving 
            to do. In my free time, I like to learn new recipes, read up on game design 
            documents, keep up on different programming tools and trends, and volunteer 
            at my local humane society and homeless shelter.
            </p>
        </>
    )
}