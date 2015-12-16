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
        this.offsetLoaded = this.props.offsetStart;
        this.attachScrollListener();
    },

    componentDidUpdate: function () {
        this.attachScrollListener();
    },

    componentWillUnmount: function () {
        this.detachScrollListener();
    },

    attachScrollListener: function () {
        var el = ReactDOM.findDOMNode(this);
        if (!this.props.hasMore) {
            return;
        }

        el.addEventListener('scroll', this.scrollListener);
        el.addEventListener('resize', this.scrollListener);
        this.scrollListener();
    },

    detachScrollListener: function () {
        var el = ReactDOM.findDOMNode(this);
        el.removeEventListener('scroll', this.scrollListener);
        el.removeEventListener('resize', this.scrollListener);
    },

    scrollListener: function () {
        var el = ReactDOM.findDOMNode(this);
        var scrollTop = el.scrollTop;

        if (topPosition(el) + el.scrollHeight - scrollTop - window.innerHeight < Number(this.props.threshold)) {
            this.detachScrollListener();
            this.props.loadMore(this.offsetLoaded += 10);
        }
    },

    render: function () {
        var divMode = false;

        if (this.props.hasOwnProperty("divMode")) {
            divMode = this.props.divMode;
        }

        if (divMode == true) {
            return <DivScroll props={this.props}/>;
        } else {
            return <TableScroll props={this.props}/>;
        }
    }
});


var DivScroll = React.createClass({
    render: function () {
        this.props = this.props.props;
        return (
            <div className="infinite-scroll">
                {this.props.children}
                <div className="session_loader">
                {this.props.hasMore && (this.props.loader)}
                </div>
            </div>
        );
    }
});


var TableScroll = React.createClass({
    render: function () {
        this.props = this.props.props;
        return (
            <tbody className="infinite-scroll">
                {this.props.children}
                <tr className="session_loader">
                {this.props.hasMore && (this.props.loader)}
                </tr>
            </tbody>
        );
    }
});


module.exports.InfiniteScroll = InfiniteScroll;