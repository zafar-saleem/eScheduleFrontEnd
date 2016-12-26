let events = {};

const EventDispatcher = {

    dispatchEvent: (eventName, callback) => {
        console.log(events);
        if (!eventName) return;
        if (!callback && typeof callback !== 'function') return;

        events[eventName] = callback;
        console.log(events);
    },

    listenEvent: (eventName, data) => {
        if (!eventName) return;
        if (!events.hasOwnProperty(eventName)) return;

        events[eventName](data);
    }
};

module.exports = EventDispatcher;

