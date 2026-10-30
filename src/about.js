function displayAbout() {
    const divContent = document.getElementById("content");

    divContent.innerHTML = `
            <div class="section-center">
                <H1 class="title">About</H1>
                <div class="open-times">
                    <h4>Opening Times</h4>
                    <p>Monday: 15:00 - 23:00</p>
                    <p>Tuesday: 15:00 - 23:00</p>
                    <p>Wednesday: 15:00 - 23:00</p>
                    <p>Thursday: 15:00 - 23:00</p>
                    <p>Friday: 15:00 - 23:00</p>
                    <p>Saturday: 15:00 - 23:00</p>
                    <p>Sunday: 15:00 - 23:00</p>
                </div>
            </div>`;
}

export { displayAbout };