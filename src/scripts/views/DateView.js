import $ from 'jquery';
import _ from 'lodash';

import DatesView from './DatesView';

import DateTemplate from '../../templates/DateTemplate.html';

let _model, $els;
let dateTemplate = _.template(DateTemplate);

const DateView = {
    init: (model) => {
        _model = model;

        render();
    }
};

function render() {
    _model.get().forEach((data) => {
        DatesView.init(data);
    });
}

function onDateClickHandler(e) {
    let el = $(e.target);

    $('.a-date').removeClass('active');
    el.addClass('active');

    e.preventDefault();
}

module.exports = DateView;

