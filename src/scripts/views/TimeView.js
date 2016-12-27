import $ from 'jquery';
import _ from 'lodash';

import TimeTemplate from '../../templates/TimeTemplate.html';

let _model, $els;
let timeTemplate = _.template(TimeTemplate);

const TimeView = {
    init: (model) => {
        _model = model;

        window.Vents.listenEvent('dateSelected', callback);
        render();
    }
};

function render() {
    console.log(_model.get());
    $('.wrapper').append(timeTemplate({ data: _model.get() }));
}

function callback(data) {
    console.log(data);
    // let el = $(e.target);

    $('.a-date').removeClass('active');
    data.el.addClass('active');
}

module.exports = TimeView;

