let srcValues = {
    defaultCardImg: "https://imgs.search.brave.com/hv9MyoJ25Tz8LbfWr8RIkJo9pwd8V2LTpKWnCO-FMww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JlYXRlYWkuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvYTZw/N3FyYTZwN3FyYTZw/Ny04MDl4ODA5LnBu/Zw",
}

function autoFillCardContent(betTitle = "No bet", betImgSrc = srcValues.defaultCardImg, betDescription = "No description") {
    let getBetTitle = document.querySelector('.card-title');
    let getBetImg = document.querySelector('.card img');
    let getBetDescription = document.querySelector('.card-content-description');
    
    getBetTitle.textContent = betTitle;
    getBetImg.src = betImgSrc;
    getBetDescription.textContent = betDescription;
}

/**
 * Main Generation Loop
 */
autoFillCardContent("Title", "https://imgs.search.brave.com/mJFsB9PgoORVbfYsA_1O6cfr9FtbRKjBQf__ppZLRBY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTUw/MTA2NjQuanBn", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis erat vitae mauris molestie tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean non mi a velit malesuada auctor in id urna. Mauris aliquam arcu nec lobortis lobortis. Praesent non auctor metus. Aliquam at venenatis leo. Nulla facilisi. Cras fringilla sem dignissim sagittis tristique. Sed blandit justo pulvinar, aliquet lectus quis, volutpat neque. Etiam dictum purus sed tortor egestas, vitae iaculis nunc interdum. Quisque condimentum augue ut nisi molestie mattis tempus posuere justo. In non orci et massa posuere tempus vitae nec dolor. Vivamus facilisis aliquet felis, euismod feugiat lacus lacinia sit amet. Curabitur sed justo mauris. Pellentesque sit amet venenatis ante. Nunc nisi turpis, tristique eget ligula sollicitudin, convallis pharetra nunc");