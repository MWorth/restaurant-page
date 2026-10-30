const initLoad = (() => {
    const divContent = document.getElementById("content");

    divContent.innerHTML = `
        <H1 class="title">Home</H1>
        <div class="container">
            <img src="https://images.unsplash.com/photo-1772119044027-04e80adeda6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D">
        </div>
        <p>Spring is, for lack of any real words, utopia. The sun beams through the ceilings and walls like the gates of heaven might be opening. The servers, dressed in cotton garms and dresses, are angels on earth with margaritas as olive branches. The food can only be described as watercolours of lilies and peonies. This is, by all means, written for the female gaze. Visually, it is artwork and unlike any other London restaurant.<br><br>Eleanor Henson has done every good thing in keeping Skye Gyngell’s vision alive in this place, transforming seasonal produce from just one loyal supplier into elegant, fairy-like dishes. Capable of turning the average potato into something that tastes of what might as well be sparkles, of fish to taste of clouds — Spring is magical.</p>
            `;
});

export { initLoad };