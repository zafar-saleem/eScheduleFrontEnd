let _model, $els;

const DateView = {
    init: (model) => {
        _model = model;

        render();
    }
};

function render() {
    console.log(_model.get());
}

module.exports = DateView;

