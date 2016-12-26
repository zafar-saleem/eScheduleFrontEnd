import DateModel from './scripts/models/DateModel';
import TimeModel from './scripts/models/TimeModel';

import TimeView from './scripts/views/TimeView';
import DateView from './scripts/views/DateView';

import EventDispatcher from './scripts/sandbox/EventDispatcher';

window['Vents'] = EventDispatcher;

DateView.init(DateModel, {

});

TimeView.init(TimeModel, {

});

