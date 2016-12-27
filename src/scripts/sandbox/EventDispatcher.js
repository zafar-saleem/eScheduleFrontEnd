let events = {};

const EventDispatcher = {

    dispatchEvent: (eventName, data) => {
        if (!eventName) return;

        for (let key in events) {
            if (events.hasOwnProperty(eventName) && key === eventName) {
                events[eventName](data);
            }
        }
    },

    listenEvent: (eventName, callback) => {
        if (!eventName) return;
        if (!callback && typeof callback !== 'function') return;

        events[eventName] = callback;
    }
};

module.exports = EventDispatcher;

