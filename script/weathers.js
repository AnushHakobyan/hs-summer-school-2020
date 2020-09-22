(function() {
    const WEATHER_SPRING = 'spring';
    const WEATHER_SUMMER = 'summer';
    const WEATHER_AUTUMN = 'autumn';
    const WEATHER_WINTER = 'winter';
    const WEATHER_NAMES = [WEATHER_SPRING, WEATHER_SUMMER, WEATHER_AUTUMN, WEATHER_WINTER];
    const MONTHS = {
        [WEATHER_SPRING]: ['March', 'April', 'May'],
        [WEATHER_SUMMER]: ['June', 'July', 'August'],
        [WEATHER_AUTUMN]: ['September', 'October', 'November'],
        [WEATHER_WINTER]: ['December', 'January', 'February'],
    };

    const createMonthsListItem = (month) => {
        const monthListItem = document.createElement('li');
        monthListItem.innerText = month;
        return monthListItem;
    };

    const weatherClickHandler = function(event, isExpanded, setIsExpanded) {
        const { target: weatherElement } = event;
        const { id } = weatherElement;
        if (!isExpanded) {
            const months = MONTHS[id];
            const monthsListElements = months.map(createMonthsListItem);
            const monthListContainer = document.createElement('ul');
            monthListContainer.append(...monthsListElements);
            weatherElement.append(monthListContainer);
            setIsExpanded(true);
        } else {
            const monthsListContainer = document.querySelector(`#${id} ul`);
            monthsListContainer.remove();
            setIsExpanded(false);
        }
    };

    const createWeatherListItem = (weatherName) => {
        const listItem = document.createElement('li');
        listItem.innerText = weatherName;
        listItem.className = 'weather';
        listItem.id = weatherName;
        let isListItemExpanded = false;

        const setIsListItemExpanded = (isExpanded) => {
          isListItemExpanded = isExpanded;
        };

        listItem.addEventListener(
            'click',
            (event) => weatherClickHandler(event, isListItemExpanded, setIsListItemExpanded));
        return listItem;
    };

    const createWeatherList = () => {
        const weatherListContainerElement = document.getElementById('weatherList');
        const weatherListItemElements = WEATHER_NAMES.map(createWeatherListItem);
        weatherListContainerElement.append(...weatherListItemElements); // weatherListItemElements[0], weatherListItemElements[1], weatherListItemElements[2], weatherListItemElements[3]
    };

    createWeatherList();
})();
