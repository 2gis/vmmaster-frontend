var Session = React.createClass({

    statusIcon: function (status) {
        if (status == 'waiting') {
            return 'default'
        } else if (status == 'running') {
            return 'warning'
        } else if (status == 'failed') {
            return 'danger'
        } else {
            return 'success'
        }
    },

    viewIcon: function (session) {
        if (!session.closed && session.status == 'running') {
            return "glyphicon-eye-open";
        } else {
            if (session.closed && session.take_screencast) {
                return "glyphicon-film";
            } else {
                return "glyphicon-none"
            }
        }
    },

    formatError: function (session) {
        var error = '';
        if (session.status == 'failed' && error != '') {
            //<span className="label label-error"> {error} </span>
        }
    },

    render: function () {
        var label = 'label label-' + this.statusIcon(this.props.session.status),
            session_id = '/session/' + this.props.session.id,
            icon = 'glyphicon ' + this.viewIcon(this.props.session),
            error = this.formatError(this.props.session),
            created_date = new Date(this.props.session.created).toLocaleString(),
            link = "/session/" + this.props.session.id + "#screencast";

        return (
            <tr className="session_row" href={session_id} >
                <td className="session_column session_status">
                    <span className={label}>{ this.props.session.status }</span>
                </td>
                <td className="session_column session_name">
                    <a href={session_id}>{ this.props.session.name }</a>
                </td>
                <td className="session_column session_date">{ created_date }</td>
                <td className="session_column session_error" data-toggle="tooltip" title={ this.props.session.error }>
                    <a href={link} title="show screencast">
                        <span className={icon}></span>
                    </a>
                </td>
            </tr>
        );
    }
});

var NoSessions = React.createClass({
    render: function () {
        return (
            <tr><td>No sessions</td></tr>
        )
    }
});

var Sessions = React.createClass({
    getInitialState: function() {
        var sessions = [],
            startPage = 1;

        if (sessions.length == 0) {
            sessions = [<NoSessions key={0} />];
        }

        return {sessions: sessions, page: startPage, hasMore: true};
    },

    handleInfiniteLoad: function(page) {
        var that = this;

        setTimeout(function() {
            that.getDataFromServer(page, function (that, data) {
                var sessions = data.results.map(function(session, index) {
                    if (data) {
                        return <Session key={session.id} session={session} />
                    }
                });
                console.log('new sessions');
                console.log(sessions);
                if (that.state.sessions.length == 1) {
                    that.setState({
                    sessions: sessions
                });
                } else {
                    that.setState({
                    sessions: that.state.sessions.concat(sessions)
                });
                }
            });
        }, 1000);
    },
//    componentDidMount: function () {
////        this.interval = setInterval(this.tick, 2000);
//    },
//
//    componentWillUnmount: function() {
//        clearInterval(this.interval);
//    },

    getDataFromServer: function(page, callback) {
        var sessionAPI = domain + '/api/v1/sessions?page=' + page,
            sessions = [],
            self = this;

        $.getJSON(sessionAPI)
        .done(function (data) {
            if (self.state.sessions.length == data.count) {
                self.setState({hasMore: false});

            }
            callback(self, data);
        })
        .fail(function () {
            self.setState({hasMore: false});
        });
    },

//    tick: function () {
//        var sessions = [];
//        this.getDataFromServer(function (self, data) {
//            sessions = data.map(function(session) {
//                return <Session session={session} />
//            });
////            console.log(sessions);
//            self.setState({sessions: sessions});
//        });
//    },

    render: function () {
        return (
            <table className="table sessions">
                <thead className="caption">
                <tr>
                    <td className="session_column session_status">status</td>
                    <td className="session_column session_name">name</td>
                    <td className="session_column session_date">date</td>
                    <td className="session_column session_error">info</td>
                </tr>
                </thead>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.handleInfiniteLoad}
                    loader={<tr><td className="session_column session_loader" colSpan="4"><span className="loader"></span></td></tr>}
                    hasMore={this.state.hasMore}
                    threshold={250}>
                    {this.state.sessions}
                </InfiniteScroll>
            </table>
        );
    }
});