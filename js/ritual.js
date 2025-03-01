let completedOfferings = [];
let ritualInProgress = false;

function continueRitualAfterOffering(offeringName) {
    ritualInProgress = false;

    // Add the offering to the completed list if not already there
    if (offeringName !== "nothing") {
        if (!completedOfferings.includes(offeringName)) {
            completedOfferings.push(offeringName);
        }
    }

    // Check if all 8 offerings have been made
    if (completedOfferings.length === 8) {
        completeRitual();
    } else {
        // Continue with normal prompt
        print("꧁༺❂༻꧂ What do you offer to the spirit of music?", "font-size: 14px");
        print(`
         attention           natural_light
         humor               a_smoothie
         seltzer_water       fresh_air
         space_to_breathe    trust
         nothing
        `, "font-size: 14px");

        // show progress
        print(`꧁༺❂༻꧂ The spirit has received ${completedOfferings.length} of 8 offerings...`);
    }
}

function completeRitual() {
    const viewbox = document.getElementById('viewbox');

    // Display completion messages in sequence
    print("꧁༺❂༻꧂ All offerings have been received!", "font-size: 16px; color: gold;");

    setTimeout(() => {
        print("꧁༺❂༻꧂ A harmonious resonance fills the air as the ritual nears completion...", "font-size: 14px;");
        // Play completion sound
        const completionSound = new Audio('./sounds/transcendence_sound.mp3');
        completionSound.volume = 1.0;
        completionSound.play().catch(e => console.log("Error playing completion sound:", e));

        passIntoTheBeyond();
        
    }, 3000);

    setTimeout(() => {
        print("꧁༺❂༻꧂ The spirit of music coalesces before you, its form shimmering with ethereal energy...", "font-size: 14px;");
        if (viewbox) {
            viewbox.innerHTML = `<img src="images/ascii/transcendence_3.png" alt="Transcendence" style="max-width:100%; max-height:100%;">`;
        }

    }, 8000);

    // Reveal a special command or next step
    setTimeout(() => {
        print("꧁༺❂༻꧂ The spirit beckons you to type 'transcend' to receive its gift...", "font-size: 14px;");

        // Create the transcend command
        Object.defineProperty(window, 'transcend', {
            get: function () {
                print("꧁༺❂༻꧂ The veil between worlds thins...", "font-size: 14px;");

                // Play final sound/music
                const transcendSound = new Audio('./sounds/caminhosdapedra.mp3');
                transcendSound.volume = 0.7;
                transcendSound.play().catch(e => console.log("Error playing transcend sound:", e));

                moksha()

                return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂ transcendence ▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
            },
            configurable: true
        });
    }, 12000);
}

// Create a function that generates offering handlers
function createOfferingHandler(name, soundFile, imagePath, message, volume) {
    return {
        get: function () {
            if (ritualInProgress) {
                print("꧁༺❂༻꧂ The spirit is still processing your previous offering...");
                return "Please wait...";
            }

            ritualInProgress = true;

            // Play sound
            const sound = new Audio(soundFile);

            sound.volume = volume;

            // Set up what happens when the sound finishes playing
            sound.onended = function () {
                // Clear the viewbox content
                const viewbox = document.getElementById('viewbox');
                if (viewbox) {
                    viewbox.innerHTML = '';
                }

                print("꧁༺❂༻꧂ The sound fades into silence...");
                setTimeout(() => {
                    continueRitualAfterOffering(name);
                }, 2000);
            };

            // Start playing the sound
            sound.play().catch(e => {
                console.log(`Error playing sound for ${name}:`, e);
                ritualInProgress = false; // Reset if there's an error
            });

            // Display image in viewbox
            const viewbox = document.getElementById('viewbox');
            if (viewbox) {
                viewbox.innerHTML = `<img src="${imagePath}" alt="${name} offering" style="max-width:100%; max-height:100%;">`;
            }

            print(`꧁༺❂༻꧂ You offer ${name} to the spirit of music...`);
            print(message || `꧁༺❂༻꧂ The spirit acknowledges your offering...`);

            return `▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂ ${name} ▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅`;
        },
        configurable: true
    };
}

function beginRitual() {
    print("▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅ please adjust your console to be at least this long ▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅")

    print("꧁༺❂༻꧂ What do you offer to the spirit of music?", "font-size: 14px");
    print(`
         attention           natural_light
         humor               a_smoothie
         seltzer_water       fresh_air
         space_to_breathe    trust
         nothing
        `, "font-size: 14px");

    // Standard properties
    Object.defineProperty(window, 'n', {
        get: function () {
            print("꧁༺❂༻꧂ The ritual has already begun. There is no turning back.");
            return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂ the path is set ▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
        }
    });

    Object.defineProperty(window, 'y', {
        get: function () {
            print("꧁༺❂༻꧂ The ritual has already begun. There is no turning back.");
            return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂ the path is set ▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
        }
    });

    // Define all offerings using our factory function
    const offerings = [
        {
            name: 'attention',
            soundFile: 'sounds/attention.mp3',
            imagePath: 'images/ascii/attention.png',
            message: '꧁༺❂༻꧂ The spirit acknowledges your attention with a resonant hum...',
            volume: 0.9
        },
        {
            name: 'humor',
            soundFile: 'sounds/humor.mp3',
            imagePath: 'images/ascii/humor.png',
            message: '꧁༺❂༻꧂ The spirit chuckles, pleased with your offering of humor...',
            volume: 1.0

        },
        {
            name: 'seltzer_water',
            soundFile: 'sounds/seltzer water.mp3',
            imagePath: 'images/ascii/seltzer_water.png',
            message: "꧁༺❂༻꧂ The spirit's thirst is quenched. Ah...",
            volume: 0.4

        },
        {
            name: 'space_to_breathe',
            soundFile: 'sounds/space to breathe.mp3',
            imagePath: 'images/ascii/space_to_breathe.png',
            message: "꧁༺❂༻꧂ The spirit stretches out languorously...",
            volume: 0.4

        },
        {
            name: 'natural_light',
            soundFile: 'sounds/natural light.mp3',
            imagePath: 'images/ascii/natural_light.png',
            message: "꧁༺❂༻꧂ The spirit glows with appreciation...",
            volume: 0.2

        },
        {
            name: 'a_smoothie',
            soundFile: 'sounds/a smoothie.mp3',
            imagePath: 'images/ascii/smoothie.png',
            message: "꧁༺❂༻꧂ Chill out. Have a smoothie. Doth quoth the spirit...",
            volume: 0.8

        },
        {
            name: 'fresh_air',
            soundFile: 'sounds/fresh air.mp3',
            imagePath: 'images/ascii/fresh_air.png',
            message: "꧁༺❂༻꧂ The spirit takes a deep breath. In. And out...",
            volume: 0.8

        },
        {
            name: 'trust',
            soundFile: 'sounds/trust.mp3',
            imagePath: 'images/ascii/trust.png',
            message: "꧁༺❂༻꧂ The spirit buzzes in mutual acceptance...",
            volume: 0.7

        },
    ];

    // Register all the offerings
    offerings.forEach(offering => {
        Object.defineProperty(
            window,
            offering.name.replace(/\s+/g, ''), // Remove spaces from property name
            createOfferingHandler(
                offering.name,
                offering.soundFile,
                offering.imagePath,
                offering.message,
                offering.volume
            )
        );
    });

    Object.defineProperty(window, "nothing", {
        get: function () {
            print(`꧁༺❂༻꧂ You offer nothing to the spirit of music...`);
            setTimeout(() => {
                continueRitualAfterOffering("nothing");
            }, 2000);
            return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂ silence ▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
        },
        configurable: true
    })
}