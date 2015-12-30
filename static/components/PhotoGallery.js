var React = require('react');
var ReactDOM = require('react-dom');
var getSessionId = require('../utils/Utils').getSessionId;
var StepsStore = require('../stores/StepsStore').StepsStore;
var addLinksToHead = require('../utils/Utils').addLinksToHead;
var photor = require('photor');


var PhotoGallery = React.createClass({
    getDefaultProps: function () {
        addLinksToHead(['/static/css/photor.min.css']);
    },

    getInitialState: function () {
        return {
            'screenshots': [],
            'start_screenshot': 0,
            'photorInstance': null
        };
    },

    setScreenshotsForPhotor: function () {
        var screenshots = [],
            session_id = getSessionId(),
            screenshot_id = this.props.start_screenshot?this.props.start_screenshot:0,
            _state = StepsStore.getState(),
            host = "//" + window.location.hostname;

        _state.steps.forEach(function (item, i) {
            if (item.screenshot) {
                var screenshot = {
                    id: item.id,
                    url: host + "/screenshot/" + session_id + "/" + item.id + ".png",
                    thumb: host + "/screenshot/" + session_id + "/" + item.id + "_thumb.png"
                };
                if (parseInt(item.id) == parseInt(screenshot_id)) {
                    screenshot_id = screenshots.length;
                }
                screenshots.push(screenshot);
            }
        });

        this.setState({
            screenshots: screenshots,
            photorInstance: this.state.photorInstance,
            start_screenshot: screenshot_id
        }, this.initGallery);
    },

    componentDidMount: function() {
        this.setScreenshotsForPhotor();
        window.addEventListener("keydown", this._handleEscKey, false);
    },

    componentWillUnmount: function () {
        window.removeEventListener("keydown", this._handleEscKey, false);
    },

    initGallery: function () {
        var el = this.refs.photor,
            instance = null;
        $("#popup").removeClass('_disabled');

        if (this.state.screenshots.length == 1) {
            instance = photor(el, {
                single: true,
                data: this.state.screenshots
            });
        } else if (this.state.screenshots.length > 0) {
            instance = photor(el, {
                duration: 0,
                current: this.state.start_screenshot,
                data: this.state.screenshots
            });
        } else {
            return;
        }

        if (instance) {
            this.setState({
                screenshots: this.state.screenshots,
                photorInstance: instance,
                start_screenshot: this.state.screenshot_id
            });
        }
    },

    closeGallery: function () {
        var node = ReactDOM.findDOMNode(this),
            container = node.parentNode;

        $("#popup").addClass('_disabled');
        this.state.photorInstance.destroy();
        this.setState({
            screenshots: this.state.screenshots,
            photorInstance: null,
            start_screenshot: this.state.start_screenshot
        });

        ReactDOM.unmountComponentAtNode(container);
    },

    _handleEscKey: function (event) {
        if (event.keyCode == 27) {
            this.closeGallery();
        }
    },

    render: function () {
        return (
            <div>
                <div className="photor-popup _disabled" id="popup">
                    <div className="photor-popup-content">
                        <div ref="photor" className="photor">

                            <div className="photor__viewport">
                                <div className="photor__viewportLayer"></div>
                                <div className="photor__viewportControl">
                                    <div className="photor__viewportControlPrev"></div>
                                    <div className="photor__viewportControlNext"></div>
                                </div>
                            </div>

                            <div className="photor__thumbs">
                                <div className="photor__thumbsLayer"></div>
                            </div>

                        </div>

                        <a className="photor-close" onClick={ this.closeGallery }>
                            <span className="glyphicon glyphicon-remove"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports.PhotoGallery = PhotoGallery;