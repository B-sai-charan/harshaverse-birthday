const SUPABASE_URL = "https://kricnqyknurrxxyusrvf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_XtH62NjqtIGJ4j8KJyj0Ww_SSIhnlkW";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ========================================
// GLOBAL MUSIC
// ========================================

const bgMusic = window.bgMusic || new Audio("assets/music/birthday.mp3");

window.bgMusic = bgMusic;

bgMusic.loop = true;
bgMusic.volume = 0.8;
// ========================================
// PERSISTENT MUSIC CONTROL
// ========================================
function createMusicButton() {

    // Don't create another button if one already exists
    if (document.getElementById("musicToggle")) {
        return;
    }

    const musicToggle = document.createElement("button");

    musicToggle.id = "musicToggle";
    musicToggle.className = "music-toggle";
    musicToggle.setAttribute("aria-label", "Toggle music");

    // Always show the correct current state
    musicToggle.textContent = bgMusic.paused ? "🔇" : "🔊";

    musicToggle.addEventListener("click", async () => {

        if (bgMusic.paused) {

            try {
                await bgMusic.play();

                musicToggle.textContent = "🔊";

                console.log("🎵 MUSIC PLAYING");

            } catch (error) {

                console.error("❌ MUSIC FAILED:", error);

            }

        } else {

            bgMusic.pause();

            musicToggle.textContent = "🔇";

            console.log("🔇 MUSIC PAUSED");
        }
    });

    document.body.appendChild(musicToggle);
}

const bodyObserver = new MutationObserver(() => {

    if (!document.getElementById("musicToggle")) {
        createMusicButton();
    }

});

bodyObserver.observe(document.body, {
    childList: true
});

createMusicButton();

const systemText = document.getElementById("systemText");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const enterButton = document.getElementById("enterButton");

title.style.opacity = "0";
subtitle.style.opacity = "0";
enterButton.style.opacity = "0";

systemText.style.opacity = "1";

setTimeout(() => {
    systemText.textContent = "SEARCHING FOR HARSHAVerse...";
}, 1500);

setTimeout(() => {
    systemText.textContent = "SUBJECT FOUND.";
}, 3000);

setTimeout(() => {
    systemText.textContent = "BIRTHDAY: 27.08";
}, 4000);

setTimeout(() => {
    systemText.textContent = "ACCESS GRANTED.";

    title.style.opacity = "1";
    subtitle.style.opacity = "1";
    enterButton.style.opacity = "1";
}, 5000);


enterButton.addEventListener("click", () => {
    bgMusic.volume = 0.8;

bgMusic.play().then(() => {
    console.log("🎵 MUSIC STARTED");
}).catch((error) => {
    console.error("❌ MUSIC FAILED:", error);
});
    const intro = document.querySelector(".intro");

    intro.classList.add("fade-out");

    setTimeout(() => {

        document.body.innerHTML = `
            <main class="welcome">

                <div class="welcome-content">

                    <p class="welcome-small">
                        WELCOME
                    </p>

                    <h1>
                        HARSHAVerse
                    </h1>

                    <p class="welcome-message">
                        This isn't just a birthday website.
                    </p>

                    <p class="welcome-message">
                        It's a small collection of
                        memories, madness and moments.
                    </p>

                    <button id="continueButton">
                        CONTINUE →
                    </button>

                </div>

            </main>
        `;

        const continueButton =
            document.getElementById("continueButton");

        continueButton.addEventListener("click", showHarshaProfile);

    }, 1000);

});


function showHarshaProfile() {

    document.body.innerHTML = `
        <main class="profile">

            <div class="profile-content">

                <p class="profile-status">
                    SYSTEM ANALYSIS
                </p>

                <div class="loading-line">
                    <div class="loading-progress"></div>
                </div>

                <p class="profile-found">
                    SUBJECT #001 FOUND
                </p>

                <h1>
                    HARSHAVerse
                </h1>

                <p class="profile-name">
                    HARSHА DOLBY ATMOS
                </p>

                <div class="profile-card">

                    <div class="profile-row">
                        <span>PERSONALITY</span>
                        <strong>Funny + Emotional</strong>
                    </div>

                    <div class="profile-row">
                        <span>KNOWN FOR</span>
                        <strong>Creating chaos 😂</strong>
                    </div>

                    <div class="profile-row">
                        <span>FRIENDSHIP STATUS</span>
                        <strong>BEST FRIEND</strong>
                    </div>

                    <div class="profile-row">
                        <span>KNOWN WEAKNESS</span>
                        <strong>SINDHUJA 👀</strong>
                    </div>

                </div>

                <p class="profile-message">
                    Approximately 1 year of friendship.
                    <br>
                    Somehow, an unreasonable number of memories.
                </p>

                <button id="memoriesButton">
                    ENTER THE ARCHIVES →
                </button>

            </div>

        </main>
    `;

    setTimeout(() => {
        document
            .querySelector(".profile")
            .classList.add("profile-visible");
    }, 100);

    document
        .getElementById("memoriesButton")
        .addEventListener("click", showArchives);
}
function showArchives() {

    document.body.innerHTML = `
        <main class="archives">

            <header class="archives-header">

                <p class="archives-label">
                    MEMORY ARCHIVES
                </p>

                <h1>ONE YEAR.</h1>

                <p>
                    Eight photographs.<br>
                    Countless memories.
                </p>

            </header>


            <section class="memory-list">


                <article class="memory">
                    <div class="memory-number">01</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory1.jpg"
                        alt="Harsha memory 1"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            THE BEGINNING
                        </p>

                        <h2>
                            Where it all started.
                        </h2>

                        <p>
                            One year ago, we probably had no idea
                            how many memories were waiting for us.
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">02</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory2.jpg"
                        alt="Harsha memory 2"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            THE MAIN CHARACTER
                        </p>

                        <h2>
                            Always posing.
                        </h2>

                        <p>
                            Because apparently every place
                            is a photoshoot location.
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">03</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory3.jpg"
                        alt="Harsha memory 3"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            THE LAUGHS
                        </p>

                        <h2>
                            This laugh.
                        </h2>

                        <p>
                            Some of the best memories are
                            the ones where we couldn't stop laughing.
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">04</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory4.jpg"
                        alt="Harsha memory 4"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            THE RANDOM MOMENTS
                        </p>

                        <h2>
                            No context required.
                        </h2>

                        <p>
                            Just another completely normal day
                            in the Harsha archives.
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">05</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory5.jpg"
                        alt="Harsha memory 5"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            DOLBY ATMOS DETECTED
                        </p>

                        <h2>
                            Volume: Maximum.
                        </h2>

                        <p>
                            Warning: subject may produce
                            unexpected levels of comedy.
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">06</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory6.jpg"
                        alt="Harsha memory 6"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            SYSTEM ERROR
                        </p>

                        <h2>
                            Harsha.exe stopped responding.
                        </h2>

                        <p>
                            Normal Harsha not detected.
                            Please restart the system. 😂
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">07</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory7.jpg"
                        alt="Harsha memory 7"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            THE NORMAL ONE
                        </p>

                        <h2>
                            Almost normal.
                        </h2>

                        <p>
                            For approximately five minutes.
                        </p>
                    </div>
                </article>


                <article class="memory">
                    <div class="memory-number">08</div>

                    <img
                        class="memory-photo"
                        src="assets/photos/memory8.jpg"
                        alt="Harsha memory 8"
                    >

                    <div class="memory-info">
                        <p class="memory-date">
                            NO CONTEXT REQUIRED
                        </p>

                        <h2>
                            Just Harsha.
                        </h2>

                        <p>
                            And honestly, that's enough explanation.
                        </p>
                    </div>
                </article>


            </section>


            <button id="nextChapterButton">
                ENTER THE NEXT CHAPTER →
            </button>

        </main>
    `;


   document
    .getElementById("nextChapterButton")
    .addEventListener("click", showWishSection);

        activateMemoryAnimations();
}

function showWishSection() {

    document.body.innerHTML = `
        <main class="wish-page">

            <div class="wish-content">

                <p class="wish-label">
                    ONE LAST THING.
                </p>

                <h1>
                    ONE WISH.
                </h1>

                <p class="wish-message">
                    If Sindhuja could ask you<br>
                    for just one wish...
                </p>

                <p class="wish-question">
                    What would it be?
                </p>

                <div class="wish-box">

                    <textarea
                        id="wishInput"
                        placeholder="Write your wish here..."
                        maxlength="500"
                    ></textarea>

                    <p class="wish-limit">
                        500 characters maximum
                    </p>

                    <button id="submitWishButton">
                        MAKE MY WISH ❤️
                    </button>

                </div>

            </div>

        </main>
    `;

    document
        .getElementById("submitWishButton")
        .addEventListener("click", submitWish);
}

async function submitWish() {

    const wishInput = document.getElementById("wishInput");
    const submitButton = document.getElementById("submitWishButton");

    const wish = wishInput.value.trim();

    if (wish === "") {
        wishInput.focus();
        return;
    }

    // Prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = "SAVING...";

    try {

        const { error } = await supabaseClient
            .from("wishes")
            .insert([
                {
                    wish: wish
                }
            ]);

        if (error) {
            throw error;
        }

        console.log("❤️ WISH SAVED SUCCESSFULLY");

        document.body.innerHTML = `
            <main class="wish-received">

                <div class="wish-received-content">

                    <p class="wish-label">
                        WISH RECEIVED.
                    </p>

                    <h1>
                        ONE WISH.
                    </h1>

                    <p>
                        Some wishes are meant<br>
                        to be remembered.
                    </p>

                    <div class="wish-heart">
                        ❤️
                    </div>

                    <p class="wish-small">
                        THE HARSHAVerse CONTINUES...
                    </p>

                </div>

            </main>
        `;

        setTimeout(() => {
            showEmotionalSection();
        }, 3500);

    } catch (error) {

        console.error("❌ WISH SAVE FAILED:", error);

        submitButton.disabled = false;
        submitButton.textContent = "MAKE MY WISH ❤️";

        alert(
            "Something went wrong while saving your wish. Please try again."
        );
    }
}

function showEmotionalSection() {

    document.body.innerHTML = `
        <main class="story">

            <section class="story-hero">

                <p class="story-label">
                    CLASSIFIED FILE
                </p>

                <h1>
                    THE REAL<br>
                    STORY.
                </h1>

                <p class="story-intro">
                    Behind the photos, jokes and completely
                    unnecessary amount of chaos...
                </p>

                <button id="storyButton">
                    OPEN THE FILE →
                </button>

            </section>

        </main>
    `;

    document
        .getElementById("storyButton")
        .addEventListener("click", showFunnySection);
}

function showFunnySection() {

    document.body.innerHTML = `
        <main class="funny">

            <section class="funny-content">

                <p class="funny-label">
                    HARSHAVerse ANALYSIS
                </p>

                <h1>
                    SUBJECT<br>
                    HARSHAVerse
                </h1>


                <div class="funny-card">

                    <div class="funny-row">
                        <span>STATUS</span>
                        <strong>Still surviving</strong>
                    </div>

                    <div class="funny-row">
                        <span>COMMON SENSE</span>
                        <strong>Under investigation</strong>
                    </div>

                    <div class="funny-row">
                        <span>COMEDY LEVEL</span>
                        <strong>Dangerously high</strong>
                    </div>

                    <div class="funny-row">
                        <span>DRAMA LEVEL</span>
                        <strong>Unnecessarily high</strong>
                    </div>

                    <div class="funny-row">
                        <span>CRUSH STATUS</span>
                        <strong>Sindhuja detected 👀</strong>
                    </div>

                    <div class="funny-row">
                        <span>FRIENDSHIP</span>
                        <strong>1 year and counting</strong>
                    </div>

                </div>


                <p class="funny-message">
                    Scientific conclusion:
                    Harsha is impossible to explain.
                </p>


                <button id="emotionalButton">
                    OKAY, SERIOUSLY... →
                </button>

            </section>

        </main>
    `;

    document
        .getElementById("emotionalButton")
        .addEventListener("click", showFinalMessage);
}

function showFinalMessage() {

    document.body.innerHTML = `
        <main class="final-message">

            <section class="final-content">

                <p class="final-label">
                    NO JOKES THIS TIME
                </p>

                <h1>
                    ONE YEAR.
                </h1>

                <p class="final-text">
                    One year might not sound like a lifetime.
                </p>

                <p class="final-text">
                    But somehow, in that one year,
                    there were enough laughs, random moments,
                    stupid conversations and memories
                    to make it feel like much more.
                </p>

                <p class="final-text">
                    Thank you for being one of those people
                    who can turn an ordinary day into
                    something worth remembering.
                </p>

                <p class="final-text">
                    Whatever happens next,
                    I hope we keep adding more chapters
                    to this ridiculous story.
                </p>


                <div class="signature">
                    From your best friend ❤️
                </div>


                <button id="birthdayButton">
                    ONE LAST THING →
                </button>

            </section>

        </main>
    `;

    document
        .getElementById("birthdayButton")
        .addEventListener("click", showBirthdayReveal);
}

function showBirthdayReveal() {

    document.body.innerHTML = `
        <main class="birthday">

            <div class="birthday-content">

                <p class="birthday-small">
                    ACCESS LEVEL: FRIEND
                </p>

                <p class="birthday-small">
                    DATE: 27.08
                </p>

                <h1>
                    HAPPY<br>
                    BIRTHDAY
                </h1>

                <h2>
                    HARSHA.
                </h2>

                <p>
                    Here's to another year
                    of madness, memories
                    and questionable decisions.
                </p>

                <div class="heart">
                    ♥
                </div>

                <p class="birthday-end">
                    THE HARSHAVerse CONTINUES...
                </p>

            </div>

        </main>
    `;

}

function activateMemoryAnimations() {

    const memories = document.querySelectorAll(".memory");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("memory-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    memories.forEach((memory) => {
        observer.observe(memory);
    });
}
