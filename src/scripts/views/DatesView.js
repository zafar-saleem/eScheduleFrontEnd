import $ from 'jquery';
import _ from 'lodash';

import DateTemplate from '../../templates/DateTemplate.html';

let dateTemplate = _.template(DateTemplate);

let _model;

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

function onDateClickHandler() {
    window.Vents.dispatchEvent('dateSelected', _model.id);
}

module.exports = DatesView;

