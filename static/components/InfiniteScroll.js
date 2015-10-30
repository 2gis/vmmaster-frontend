var React = require('react');
var ReactDOM = require('react-dom');


function topPosition(domElt) {
    if (!domElt) {
        return 0;
    }
    return domElt.offsetTop + topPosition(domElt.offsetParent);
}

var InfiniteScroll = React.createClass({
    componentDidMount: function () {
        this.pageLoaded = this.props.pageStart;
        this.attachScrollListener();
    },

    componentDidUpdate: function () {
        this.attachScrollListener();
    },

    componentWillUnmount: function () {
        this.detachScrollListener();
    },

    attachScrollListener: function () {
        if (!this.props.hasMore) {
            return;
        }

        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.scrollListener);
        this.scrollListener();
    },

    detachScrollListener: function () {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.scrollListener);
    },

    scrollListener: function () {
        var el = ReactDOM.findDOMNode(this);
        var scrollTop = (window.pageYOffset) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight < Number(this.props.threshold)) {
            this.detachScrollListener();
            this.props.loadMore(this.pageLoaded += 1);

        }
    },

    render: function () {
        return (
            <tbody>
                {this.props.children}
                {this.props.hasMore && (this.props.loader)}
            </tbody>
        );
    }
});


module.exports.InfiniteScroll = InfiniteScroll;