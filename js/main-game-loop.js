function main() {
    print("꧁༺❂༻꧂ Do you want to begin the ritual? (y/n)", "font-size: 14px");

}

function noRitual() {
    print("꧁༺❂༻꧂ The ritual is canceled.");
    print("꧁༺❂༻꧂ Perhaps another time...");

    Object.defineProperty(window, 'n', {
        get: function() {
            return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
        }
    });

    Object.defineProperty(window, 'y', {
        get: function() {
            return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
        }
    });
}

// Handle 'y' response
Object.defineProperty(window, 'y', {
    get: function() {
        print("꧁༺❂༻꧂ The ritual begins...");
        beginRitual();
        return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂ type in the word ▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
    },
    configurable: true
});

// Handle 'n' response
Object.defineProperty(window, 'n', {
    get: function() {
        noRitual();
        return "▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅▅▄▃▂▁▂▃▄▅";
    },
    configurable: true
});

main();