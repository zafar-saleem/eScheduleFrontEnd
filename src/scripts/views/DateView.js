import $ from 'jquery';
import _ from 'lodash';

import DateTemplate from '../../templates/DateTemplate.html';

let _model, $els;
let dateTemplate = _.template(DateTemplate);

const DateView = {
    init: (model) => {
        _model = model;

        render();

        $('body').on('click', '.a-date', onDateClickHandler.bind(this));
    }
};

function render() {
    console.log(_model.get());
    $('.wrapper').html(dateTemplate({ data: _model.get() }));
}

function onDateClickHandler(e) {
    let el = $(e.target);

    $('.a-date').removeClass('active');
    el.addClass('active');

    e.preventDefault();
}

module.exports = DateView;

