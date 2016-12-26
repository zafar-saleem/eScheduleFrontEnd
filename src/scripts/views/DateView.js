import $ from 'jquery';
import _ from 'lodash';

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
    console.log(_model.get());
    $('.wrapper').html(dateTemplate({ data: _model.get() }));
}

module.exports = DateView;

