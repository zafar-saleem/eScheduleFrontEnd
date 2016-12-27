import $ from 'jquery';
import _ from 'lodash';

import DateTemplate from '../../templates/DateTemplate.html';

let dateTemplate = _.template(DateTemplate);

let _model;
let _isEventCalled = true;

const DatesView = {
    init: (model) => {
        _model = model;

        $('body').on('click', '.a-date', onDateClickHandler.bind(this));

        render();
    }
};

function render() {
    $('.m-dateview').append(dateTemplate({ data: _model }));
}

function onDateClickHandler(e) {
    _model['el'] = $(e.target);
    window.Vents.dispatchEvent('dateSelected', _model);
    e.preventDefault();
}

module.exports = DatesView;

