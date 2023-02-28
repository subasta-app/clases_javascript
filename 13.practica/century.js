function century(year) {
    let century = year / 100;
    let truncCentury = Math.trunc(century);

    if (century - truncCentury > 0) {
        return truncCentury + 1
    } else {
        return truncCentury
    }
}

century(1705)